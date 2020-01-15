import Enemy from './enemy.js';
import {Finder} from '../tools/utils.js';

export default function Combat(enemy,player,config){
  /*Takes the player level and return the corresponding enemylevel based on what is defined for the given enemy*/
  this.getEnemyLevel = function(level){
    if(enemy.levels){
      let breakpoints = Object.keys(enemy.levels).map(Number); //gets all defined level keys and stores them as numbers
      breakpoints.sort(function(a,b){ //sorts the breakpoints in ascending order
        return a - b;
      })
      let breakpoint = breakpoints[0]; //sets the first and now also smallest value as default, for fallback purpose
      for(let point of breakpoints){
        if(level >= point){
          if(level - point < level - breakpoint){
            breakpoint = point;
          }
        }
      }
      return breakpoint;
    }
    else{
      return 0;
    }
  }
  this.enemy = new Enemy(enemy,this.getEnemyLevel(player.level),config); //creates a new eneny from the passed enemy
  this.player = player;
  this.ticks = 0; //stores the combat progress
  this.loot = enemy.loot || null;
  this.information = {}; //stores all information about this combat, used for making logentrys from the library
  this.handle = function(action){
    this.player.action = action; //stores the player action
    this.enemy.action = this.enemy.getAction(this.ticks, this.player); //gets and stores the enmy action for the current ticks
    this.fight(this.player,this.enemy); //generates the results
    this.fight(this.enemy,this.player);
    this.update();
    this.ticks++; //ups the ticks
  }
  this.fight = function(fighter,opponent){
    if(fighter.action == 'reload'){ //when the player reloads
      if(fighter.currentAmmunition < fighter.weapon.capacity){ //when the weapon isnt full yet
        fighter.currentAmmunition++; //up the player ammmo
      }
      else{ //when the weapon is full
        fighter.action = 'reloadFailed'; //set the player action to specific fail
      }
    }
    //shoot
    else if(fighter.action == 'shoot'){ //when the player shoots
      if(fighter.currentAmmunition > 0){ //if the player has sufficient ammo
        if(opponent.action == 'dodge'){ //when the enemy has dodged
          fighter.action = 'shotMissed'; //set playeraction to a specified error
        }
        else{ //whent the enemy hasnt dodged and the player has sufficient ammo
          let damage = this.calcDamage(fighter.weapon,opponent.armor);
          fighter instanceof Enemy ? this.information.enemyDamage = damage : this.information.playerDamage = damage;
          opponent.currentHealth -= damage;
          if(opponent.currentHealth < 0){
            opponent.currentHealth = 0;
          }
          if(opponent.currentHealth == 0){
            opponent.action = 'die';
          }
        }
        fighter.currentAmmunition--;
      }
      else{ //when the player does not have sufficient ammunition
        fighter.action = 'noAmmunition';
      }
    }
  }
  this.calcDamage = function(weapon,armor){
    let minDamage = weapon.power - weapon.deviance;
    let bonusDamage = Math.round(Math.random() * (weapon.deviance * 2));
    let actualDamage = minDamage + bonusDamage - armor.power;
    if(actualDamage < 0){
      actualDamage = 0;
    }
    return actualDamage;
  }
  this.update = function(){
    this.information.playerHealth = this.player.currentHealth;
    this.information.playerMaxHealth = this.player.maxHealth
    this.information.playerAmmunition = this.player.currentAmmunition;
    this.information.playerMaxAmmunition = this.player.weapon.capacity;
    this.information.playerWeapon = this.player.weapon.name;
    this.information.playerWeaponSound = this.player.giveWeaponsound();
    this.information.playerWeaponDamage = (this.player.weapon.power - this.player.weapon.deviance) + '-' + (this.player.weapon.power + this.player.weapon.deviance);
    this.information.playerArmor = this.player.armor.name;
    this.information.playerArmorSound = this.player.giveArmorsound();
    this.information.playerBattlecry = this.player.giveBattlecry();
    this.information.playerDeathcry = this.player.giveDeathcry();
    this.information.enemyName = this.enemy.name;
    this.information.enemyHealth = this.enemy.currentHealth;
    this.information.enemyMaxHealth = this.enemy.maxHealth;
    this.information.enemyAmmunition = this.enemy.currentAmmunition;
    this.information.enemyMaxAmmunition = this.enemy.weapon.capacity;
    this.information.enemyWeapon = this.enemy.weapon.name;
    this.information.enemyWeaponSound = this.enemy.giveWeaponsound();
    this.information.enemyWeaponDamage = (this.enemy.weapon.power - this.enemy.weapon.deviance) + '-' + (this.enemy.weapon.power + this.enemy.weapon.deviance);
    this.information.enemyArmor = this.enemy.armor.name;
    this.information.enemyArmorSound = this.enemy.giveArmorsound();
    this.information.enemyBattlecry = this.enemy.giveBattlecry();
    this.information.enemyDeathcry = this.enemy.giveDeathcry();
    this.information.enemyBehavior = this.enemy.behavior.name;
    this.information.xpGain = this.enemy.xp;
  }
  this.update(); //updates on creation
}
