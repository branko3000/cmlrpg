import Map from './map.js';
import Log from './log.js';
import Player from './player.js';
import Combat from './combat.js';
import Story from './story.js';
import {Point, Direction, Information, Library, Finder} from '../tools/utils.js';

/* MAIN
 * The main object is called by the avatar and handles all actions
 */
export default function Main(config){
  this.log = new Log(); //creates and stores a new Log
  this.player = new Player(config); //creates and stores a new virtual player with starting position and health
  this.map = new Map(3105,config.tiles); //creates and stores a new map with a seed and a set of tiles from the config
  this.library = new Library(config.library); //creates and stores a new library with a set of books to read from, straight from the config
  this.story = new Story(config.story);
  let information = {};
  let taskInformation = this.story.giveSummary(this.player.position);
  let playerInformation = this.player.giveSummary();
  information = Finder.addKeysFromTo(taskInformation,information);
  information = Finder.addKeysFromTo(playerInformation,information);
  this.library.addInformation(information); //to have the player level accesible before the first encounter
  this.combat; //creates the combat variable which is used to handle combats. Empty means no combat at the moment
  this.loot = null; //will store an item that can be picked up by the player
  this.giveConfigValue = function(value){
    return config[value];
  }
  //will return the tile at a certain position, looks for overwrites first
  this.giveTile = function(position){
    let tile = this.story.giveTile(position); //if there is a story overwrite at this position
    if(!tile){ //when there was none
      tile = this.map.giveTile(position);
    }
    return tile;
  }
  this.onTaskGoal = function(){
    return this.player.position.equals(this.story.give('goal'));
  }
  this.nextChapter = function(){
    let nextChapter = this.story.nextChapter(this.player.position);
    if(nextChapter){
      this.library.addInformation({taskProlog: nextChapter.taskProlog});
    }
    else{
      this.library.addInformation({taskProlog: config.endcredits});
    }
    let text = this.library.giveString('taskFinished');
    if(nextChapter){
      this.library.addInformation(nextChapter);
    }
    return text;
  }
  /* HANDLE
   * handle takes a action from the avatar as well as an array of parameters.
   * it will return the text result and handle all of the consequences of the action internally.
   */
  this.handle = function(action, parameters){
    switch(action){ //switches on the passed action
      case 'move': //when a move should be done
        this.loot = null; //empty loot on next move
        if(parameters[0] instanceof Direction){ //if the passed parameter is a direction
          if(this.combat){ //when there is a combat ongoing
            return this.library.giveString('errorMoveInCombat'); //return a specific error from the library
          }
          else{
            this.player.move(parameters[0]); //move the virtual player in the given direction
            let tile = this.giveTile(this.player.position);
            this.library.addInformation({direction: this.library.giveString(parameters[0].name), area: tile.name}); //adds specific information
            let entry = this.library.giveString('move');; //declares entry
            if(tile.happening){ //when there is a happening at the current tile
              let option;
              if(tile.options instanceof Array){
                option = Finder.getRandomEntryInArray(tile.options);
              }
              else if(tile.options instanceof Object){
                option = Finder.getEntryFromChancedObject(tile.options)
              }
              switch(tile.happening){ //switches on the happening
                case 'encounter': //when there is an encounter
                  let enemy = Finder.getObjectInArray(config.enemys,'name',option); //store the enemy of the encounter, find it within the enemy list using a finder from the utilities
                  this.combat = new Combat(enemy,this.player,config); //creates and stores a new combat with the enemy and the player, passes the config for weapon identification
                  this.library.addInformation(this.combat.information); //adds combat information
                  entry += ' ' + this.library.giveString('encounter');
                  break;
                case 'item': //when there is an itemdrop
                let item = Finder.getObjectInArray(config.items,'name',option);
                  this.loot = item;
                  switch(item.type){
                    case 'armor':
                      this.library.addInformation({itemName: item.name, itemPower: item.power});
                      break;
                    case 'weapon':
                      let itemDamage = (item.power - item.deviance) + '-' + (item.power + item.deviance);
                      this.library.addInformation({itemName: item.name, itemPower:  itemDamage, itemCapacity: item.capacity});
                      break;
                  }
                  entry += ' ' + this.library.giveString('item' + item.type);
                  break;
                // case 'custom': //when there is a custom event

              }
            }
            if(this.onTaskGoal() && !this.combat){ //when the player is on a task goal and there was no combat started
              let xp = this.story.give('xp')
              this.player.changeXP(xp);
              this.library.addInformation(this.player.giveSummary());
              entry += ' ' + this.nextChapter();
            }
            return this.log.makeEntry(entry); //make a log entry and return its content
          }
        }
        else{ //when a unvalid direction is passed
          return this.library.giveString('errorNoValidDirection'); //return a specific error from the library
        }
        break;
      case 'look': //when a look action is happening
        if(parameters[0] instanceof Direction){ //when a valid direction is passed
          let pointClose = new Point(this.player.position); //gets the player position
          pointClose.change(parameters[0]); //moves it into the looked direction
          let pointFar = new Point(pointClose); //gets the close positon
          pointFar.change(parameters[0]); //moves it into the looked direction
          let close = this.giveTile(pointClose);; //stores the tile from the map at close
          let far = this.giveTile(pointFar);; //stores the tile from the map at far
          let direction = this.library.giveString(parameters[0].name); //stores the direction string from the library
          this.library.addInformation({close: close.name, far: far.name, direction: direction});
          let entry; //declares an entry
          if(far.name == close.name){ //when the tiles close and far are the same
            entry = this.library.giveString('lookSame'); //gets a specified string from the library
          }
          else{ //when the tiles are different
            entry = this.library.giveString('lookDifferent'); //s.o.
          }
          return this.log.makeEntry(entry); //make a log entry and return its content
        }
        else{ //when a unvalid direction is passed
          return this.library.giveString('errorNoValidDirection'); //return a specific error from the library
        }
        break;
      case 'touch':
        let type = 'nothing';
        if(this.loot){
          type = this.loot.type;
          this.player.equip(this.loot);
        }
        return this.library.giveString('touch' + type);
      case 'dodge': //for any of the fighting actions
      case 'shoot':
      case 'reload':
        if(this.combat){ //when there is a combat
          this.combat.handle(action); //handle the combat virtually
          this.library.addInformation(this.combat.information);
          let entry = this.library.giveString(this.combat.player.action + 'Player'); //store the string for the player action
          entry += ' ' + this.library.giveString(this.combat.enemy.action + 'Enemy'); //store the string for the enemy action
          if(this.combat.enemy.action == 'die'){ //when the enemy is beaten
            this.player.changeXP(this.combat.enemy.xp);
            this.library.addInformation(this.player.giveSummary());
            if(this.combat.loot){
              let item;
              if(this.combat.loot instanceof Array){
                item = Finder.getRandomEntryInArray(this.combat.loot);
              }
              else if(this.combat.loot instanceof Object){
                item = Finder.getEntryFromChancedObject(this.combat.loot)
              }
              else{
                item = this.combat.loot;
              }
              this.loot = item;
              switch(item.type){
                case 'armor':
                  this.library.addInformation({itemName: item.name, itemPower: item.power});
                  break;
                case 'weapon':
                  let itemDamage = (item.power - item.deviance) + '-' + (item.power + item.deviance);
                  this.library.addInformation({itemName: item.name, itemPower:  itemDamage, itemCapacity: item.capacity});
                  break;
              }
              entry += ' ' + this.library.giveString('item' + item.type);
            }
            if(this.onTaskGoal()){
              entry += ' ' + this.nextChapter();//store the string for the enemy action
            }
            this.combat = null; //remove the combat
          }
          return this.log.makeEntry(entry); //make a logentry from the joined player and enemy string and return it
        }
        else{ //when there is no combat
          return this.library.giveString('errorNoCombat'); //return a specific error from the library
        }
        break;
      case 'task':
        let task = this.story.giveSummary(this.player.position);
        if(task){
          this.library.addInformation(task);
          return this.library.giveString('task');
        }
        else{
          return this.library.giveString('errorNoTasks');
        }
        break;
      case 'info':
        this.library.addInformation(this.player.giveSummary());
        return this.library.giveString('info');
      case 'log':
        let entrys = '';
        for(let i=0;i<this.log.entrys.length;i++){
          entrys += (i + 1) + ': ' + this.log.entrys[i] + '\n';
        }
        return entrys;
        break;
      default: //when there is a unknown action requested
        return this.library.giveString('errorUnknown'); //return a specific error from the library
    }
  }
}
