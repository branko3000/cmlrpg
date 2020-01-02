import {Finder} from '../tools/utils.js';

export default function Enemy(enemy){
  //stores all properties of the enemy
  let keys = Object.keys(enemy);
  for(let key of keys){
    this[key] = enemy[key];
  }
  //sets certain properties, that are not defined in the enemy Object
  this.currentHealth = this.maxHealth;
  //sets certain propertys, where multiple options exist
  this.weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
  this.armor = this.armors[Math.floor(Math.random() * this.armors.length)];
  this.behavior = this.behaviors[Math.floor(Math.random() * this.behaviors.length)];
  if(this.weapon.startWith){
    this.currentAmmunition = this.weapon.startWith;
  }
  else{
    this.currentAmmunition = 0;
  }
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
