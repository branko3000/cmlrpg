import {Finder} from '../tools/utils.js';

export default function Enemy(enemy,level,config){
  if(level){
    this.name = enemy.name;
    this.battlecrys = enemy.battlecrys;
    this.deathcrys = enemy.deathcrys;
    this.patterns = enemy.patterns;
    //stores all properties of the enemy for the correct level
    let keys = Object.keys(enemy.levels[level]);
    for(let key of keys){
      this[key] = enemy.levels[level][key];
    }
  }
  else{
    let keys = Object.keys(enemy);
    for(let key of keys){
      this[key] = enemy[key];
    }
  }
  //sets certain properties, that are not defined in the enemy Object
  this.currentHealth = this.maxHealth;
  //sets certain propertys, where multiple options exist
  this.setWeapon = function(){
    let weapon = null;
    if(this.weapons instanceof Array){
      weapon = Finder.getRandomEntryInArray(this.weapons);
      if(!(weapon instanceof Object)){
        let _weapon = Finder.getObjectInArray(config.items,'name',weapon);
        weapon = _weapon;
      }
    }
    else{
      weapon = this.weapons;
      if(!(weapon instanceof Object)){
        let _weapon = Finder.getObjectInArray(config.items,'name',weapon);
        weapon = _weapon;
      }
    }
    this.weapon = weapon;
  }
  this.setArmor = function(){
    let armor = null;
    if(this.armors instanceof Array){
      armor = Finder.getRandomEntryInArray(this.armors);
      if(!(armor instanceof Object)){
        let _armor = Finder.getObjectInArray(config.items,'name',armor);
        armor = _armor;
      }
    }
    else{
      armor = this.armors;
      if(!(armor instanceof Object)){
        let _armor = Finder.getObjectInArray(config.items,'name',armor);
        armor = _armor;
      }
    }
    this.armor = armor;
  }
  this.setWeapon();
  this.setArmor();
  let behavior = Finder.getRandomEntryInArray(this.behaviors);
  this.behavior = Finder.getObjectInArray(this.patterns,'name',behavior);
  this.currentAmmunition = 0;
  //returns a random battlecry
  this.giveBattlecry = function(){
    return Finder.getRandomEntryInArray(this.battlecrys);
  }
  //returns a random deathcry
  this.giveDeathcry = function(){
    return Finder.getRandomEntryInArray(this.deathcrys);
  }
  //returns a random weapon sound
  this.giveWeaponsound = function(){
    return Finder.getRandomEntryInArray(this.weapon.sounds);
  }
  //returns a random armor sound
  this.giveArmorsound = function(){
    return Finder.getRandomEntryInArray(this.armor.sounds);
  }
  //gets a action for a certain tick
  this.getAction = function(tick,opponent){
    let action = this.behavior.pattern.charAt(tick % this.behavior.pattern.length);
    switch(action){
      case 'R':
        return 'reload';
        break;
      case 'D':
        return 'dodge';
        break;
      case 'S':
        return 'shoot';
        break;
      case '*':
        if(opponent.action == 'dodge'){
          if(this.currentAmmunition < this.weapon.capacity){
            return 'reload';
          }
          else{
            return 'dodge';
          }
        }
        else if(opponent.action == 'shoot'){
          if(opponent.currentAmmunition > 0){
            return 'dodge';
          }
          else{
            if(this.currentAmmunition > 0){
              return 'shoot';
            }
            else{
              if(this.currentAmmunition < this.weapon.capacity){
                return 'reload';
              }
              else{
                return 'dodge';
              }
            }
          }
        }
        else if(opponent.action == 'reload'){
          if(this.currentAmmunition > 0){
            return 'shoot';
          }
          else{
            if(this.currentAmmunition < this.weapon.capacity){
              return 'reload';
            }
            else{
              return 'dodge';
            }
          }
        }
        break;
      case 'X':
      default:
        return ['reload','dodge','shoot'][Math.floor(Math.random() * 3)];
        break;
    }
  }
}
