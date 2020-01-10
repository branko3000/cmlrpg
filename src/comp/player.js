import {Point,Finder} from '../tools/utils.js';

/* The player is stored in a variable and is
 * the only entry point to the code.
 * A set of functions is called from the console.
 * All functions, that cannot be called from the console are
 * are marked with a "_" prefix.
 * A avatar object is used to make only the desired functions accessible.
 * The avatar also checks validation and gives back the returns into console.
 */
export default function Player(config){
    /* Fields to store information about the player */
    this.xp = 0;
    this.level = 1;
    this.position = new Point(config.start.position);
    this.maxHealth = config.baseHealth;
    this.currentHealth = this.maxHealth;
    this.currentAmmunition = 0;
    this.weapon = config.start.weapon;
    this.armor = config.start.armor;
    this.battlecrys = config.battlecrys;
    this.deathcrys = config.deathcrys;
    /*function*/
    this.move = function(direction){
        this.position.change(direction);
    }
    this.look = function(direction){
        //no statchanges
    }
    this.changeXP = function(value){
      this.xp += value;
      this.setLevel();
    }
    this.setLevel = function(){
      let level = 1 + Math.floor((Math.sqrt(625+(100 * this.xp)-25)/50));
      if(level != this.level){
        this.level = level;
        this.maxHealth = config.baseHealth + (this.level * config.healthPerLevel);
        this.currentHealth = this.maxHealth;
      }
    }
    this.giveSummary = function(){
        return {
            playerLevel: this.level,
            playerHealth: this.currentHealth,
            playerMaxHealth: this.maxHealth,
            playerAmmunition: this.currentAmmunition,
            playerMaxAmmunition: this.weapon.capacity,
            playerWeapon: this.weapon.name,
            playerWeaponPower: (this.weapon.power - this.weapon.deviance) + '-' + (this.weapon.power + this.weapon.deviance),
            playerArmor: this.armor.name,
            playerArmorPower: this.armor.power
        }
    }
    this.equip = function(item){
      this[item.type] = item;
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
}
