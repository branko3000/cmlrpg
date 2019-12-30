import Map from './map.js';
import Log from './log.js';
import Player from './player.js';
import Combat from './combat.js';
import {Point, Direction, Information, Library, Finder} from '../tools/utils.js';

/* MAIN
 * The main object is called by the avatar and handles all actions
 */
export default function Main(config){
  this.log = new Log(); //creates and stores a new Log
  this.player = new Player(new Point(0,0),20); //creates and stores a new virtual player with starting position and health
  this.map = new Map(3105,config.tiles); //creates and stores a new map with a seed and a set of tiles from the config
  this.library = new Library(config.library); //creates and stores a new library with a set of books to read from, straight from the config
  this.combat; //creates the combat variable which is used to handle combats. Empty means no combat at the moment
  /* HANDLE
   * handle takes a action from the avatar as well as an array of parameters.
   * it will return the text result and handle all of the consequences of the action internally.
   */
  this.handle = function(action, parameters){
    switch(action){ //switches on the passed action
      case 'move': //when a move should be done
        if(parameters[0] instanceof Direction){ //if the passed parameter is a direction
          if(this.combat){ //when there is a combat ongoing
            return this.library.giveString('errorMoveInCombat'); //return a specific error from the library
          }
          else{
            this.player.move(parameters[0]); //move the virtual player in the given direction
            let tile = this.map.giveTile(this.player.position); //stores the tile at the players position from the map
            let direction = this.library.giveString(parameters[0].name); //stores the name of the direction from the library
            let entry; //declares entry
            if(tile.happening){ //when there is a happening at the current tile
              switch(tile.happening){ //switches on the happening
                case 'encounter': //when there is an encounter
                  let enemy = Finder.getObjectInArray(config.enemys,'name',this.map.giveEnemy(tile)); //store the enemy of the encounter, find it within the enemy list using a finder from the utilities
                  this.combat = new Combat(enemy,this.player); //creates and stores a new combat with the enemy and the player
                  entry = this.library.giveString('encounter',{ //stores a encounter string from the library based on the given parameters
                    direction: direction,
                    area: tile.name,
                    enemyName: enemy.name,
                    enemyWeapon: this.combat.setWeapon(), //will set to a weapon of the array of possibile weapons and store the result
                    enemyArmor: this.combat.setArmor(), //s.o.
                    enemyBehavior: this.combat.setBehavior(), //s.o.
                    enemyBattlecry: this.combat.giveBattlecry() //will get a random battlecry
                  });
                  break;
              }
            }
            else{ //when there is no happening
              entry = this.library.giveString('move',{direction: direction, area: tile.name}); //get a string formovement from the library, based on the given parameters
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
          let close = this.map.giveTile(pointClose); //stores the tile from the map at close
          let far = this.map.giveTile(pointFar); //stores the tile from the map at far
          let direction = this.library.giveString(parameters[0].name); //stores the direction string from the library
          let entry; //declares an entry
          if(far.name == close.name){ //when the tiles close and far are the same
            entry = this.library.giveString('lookSame',{direction: direction, close: close.name}); //gets a specified string from the library
          }
          else{ //when the tiles are different
            entry = this.library.giveString('lookDifferent',{direction: direction, close: close.name, far: far.name}); //s.o.
          }
          return this.log.makeEntry(entry); //make a log entry and return its content
        }
        else{ //when a unvalid direction is passed
          return this.library.giveString('errorNoValidDirection'); //return a specific error from the library
        }
        break;
      case 'dodge': //for any of the fighting actions
      case 'shoot':
      case 'reload':
        if(this.combat){ //when there is a combat
          this.combat.handle(action); //handle the combat virtually
          let entry1 = this.library.giveString(this.combat.playerAction + 'Player', this.combat.information); //store the string for the player action
          let entry2 = this.library.giveString(this.combat.enemyAction + 'Enemy', this.combat.information); //store the string for the enemy action
          if(this.combat.health <= 0){ //when the enemy is beaten
            this.combat = null; //remove the combat
          }
          return this.log.makeEntry(entry1 + ' ' + entry2); //make a logentry from the joined player and enemy string and return it
        }
        else{ //when there is no combat
          return this.library.giveString('errorNoCombat'); //return a specific error from the library
        }
        break;
      default: //when there is a unknown action requested
        return this.library.giveString('errorUnknown'); //return a specific error from the library
    }
  }
}
