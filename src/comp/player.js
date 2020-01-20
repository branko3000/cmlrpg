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
    this.xp = config.player.start.xp || 0;
    this.level = 1;
    this.position = new Point(config.player.start.position);
    this.maxHealth = config.player.baseHealth;
    this.currentHealth = this.maxHealth;
    this.currentAmmunition = 0;
    this.battlecrys = config.player.battlecrys;
    this.deathcrys = config.player.deathcrys;
    /*function*/
    this.move = function(direction){
        this.position.change(direction);
    }
    this.look = function(direction){
        //no statchanges
    }
    this.changeXP = function(value){
      let oldlevel = this.level;
      this.xp += value;
      return this.setLevel();
    }
    this.levelFromXp= function(xp){
      return 1 + Math.floor((Math.sqrt(600+(100 * xp))/(50/(config.player.levelingSpeed || 1))));
    }
    this.xpFromLevel= function(level){
      return (Math.pow((level - 1) * 50, 2) - 600) / 100
    }
    this.setLevel = function(){
      let level = this.levelFromXp(this.xp);
      if(level != this.level){
        this.level = level;
        if(config.player.resetHealthOnLevelUp == true){
          this.maxHealth = config.player.baseHealth + ((this.level - 1) * config.player.healthPerLevel);
          this.currentHealth = this.maxHealth;
        }
        return true;
      }
      else{
        return false;
      }
    }

    this.giveSummary = function(){
        return {
            playerLevel: this.level,
            playerXP: this.xp,
            playerXPMissing: this.xpFromLevel(this.level + 1) - this.xp,
            playerXPGoal: this.xpFromLevel(this.level + 1),
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
    this.setWeapon = function(){
      let weapon = config.player.start.weapon;
      if(!(weapon instanceof Object)){
        let _weapon = Finder.getObjectInArray(config.items,'name',weapon);
        weapon = _weapon;
      }
      this.weapon = weapon;
    }
    this.setArmor = function(){
      let armor = config.player.start.armor;
      if(!(armor instanceof Object)){
        let _armor = Finder.getObjectInArray(config.items,'name',armor);
        armor = _armor;
      }
      this.armor = armor;
    }
    this.setWeapon();
    this.setArmor();
    this.setLevel(); //sets the level upon creation
}
