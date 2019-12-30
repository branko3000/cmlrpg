export default function Combat(enemy,player){
  this.ticks = 0; //stores the combat progress
  this.health = enemy.health; //stores the current health of the enemy
  this.weapon; //stores the weapon used by the enemy
  this.armor; //stores the armor used by the enemy
  this.information = {}; //stores all information about this combat, used for making logentrys from the library
  this.setWeapon = function(){
    let weapon = enemy.weapons[Math.floor(Math.random() * enemy.weapons.length)];
    this.weapon = weapon;
    return weapon.name;
  }
  this.setArmor = function(){
    let armor = enemy.armors[Math.floor(Math.random() * enemy.armors.length)];
    this.armor = armor;
    return armor.name;
  }
  this.setBehavior = function(){
    let behavior = enemy.behaviors[Math.floor(Math.random() * enemy.behaviors.length)];
    this.pattern = behavior.pattern;
    return behavior.name;
  }
  this.giveBattlecry = function(){
    return enemy.battlecrys[Math.floor(Math.random() * enemy.battlecrys.length)];
  }
  this.handle = function(action){
    this.playerAction = action; //stores the player action
    this.enemyAction = this.getEnemyReaction(); //gets and stores the enmy action for the current ticks
    this.fight(); //generates the results
    this.ticks++; //ups the ticks
  }
  this.fight = function(){
    if(this.playerAction == 'reload'){ //when the player reloads
      if(player.currentAmmunition < player.weapon.capacity){ //when the weapon isnt full yet
        player.currentAmmunition++; //up the player ammmo
      }
      else{ //when the weapon is full
        this.playerAction = 'reloadFailed'; //set the player action to specific fail
      }
    }
    else if(this.playerAction == 'shoot'){ //when the player shoots
      if(player.currentAmmunition > 0){ //if the player has sufficient ammo
        if(this.enemyAction == 'dodge'){ //when the enemy has dodged
          this.playerAction = 'shotMissed'; //set playeraction to a specified error
        }
        else{ //whent the enemy hasnt dodged and the player has sufficient ammo
          let minDamage = player.weapon.power - player.weapon.deviance;
          let bonusDamage = Math.round(Math.random() * (player.weapon.deviance * 2));
          let actualDamage = minDamage + bonusDamage - this.armor.power;
          if(actualDamage < 0){
            actualDamage = 0;
          }
          this.information.playerDamage = actualDamage;
          this.health -= actualDamage;
          if(this.health < 0){
            this.health = 0;
          }
          if(this.health == 0){
            this.enemyAction = 'die';
            this.information.enemyDeathcry = enemy.deathcrys[Math.round(Math.random() * enemy.deathcrys.length)];
          }
        }
        player.currentAmmunition--;
      }
      else{ //when the player does not have sufficient ammunition
        this.playerAction = 'noAmmunition';
      }
    }
    if(this.health > 0){
      if(this.enemyAction == 'shoot'){
        if(this.playerAction == 'dodge'){
          this.enemyAction = 'shotMissed';
        }
        else{
          let minDamage = this.weapon.power - this.weapon.deviance;
          let bonusDamage = Math.round(Math.random() * (this.weapon.deviance * 2));
          let actualDamage = minDamage + bonusDamage - player.armor.power;
          if(actualDamage < 0){
            actualDamage = 0;
          }
          this.information.enemyDamage = actualDamage;
          player.currentHealth -= actualDamage;
        }
      }
    }
    this.update();
  }
  this.update = function(){
    this.information.enemyName = enemy.name;
    this.information.playerHealth = player.currentHealth;
    this.information.playerMaxHealth = player.maxHealth
    this.information.playerAmmunition = player.currentAmmunition;
    this.information.playerMaxAmmunition = player.weapon.capacity;
    this.information.enemyHealth = this.health;
    this.information.enemyMaxHealth = enemy.health;
    this.information.playerWeapon = player.weapon.name;
    this.information.playerWeaponSound = player.weapon.sounds[Math.floor(Math.random() * player.weapon.sounds.length)];
    this.information.playerArmor = player.armor.name;
    this.information.playerArmorSound = player.armor.sounds[Math.floor(Math.random() * player.armor.sounds.length)];
    this.information.enemyWeapon = this.weapon.name;
    this.information.enemyWeaponSound = this.weapon.sounds[Math.floor(Math.random() * this.weapon.sounds.length)];
    this.information.enemyArmor = this.armor.name;
    this.information.enemyArmorSound = this.armor.sounds[Math.floor(Math.random() * this.armor.sounds.length)];
  }
  this.getEnemyReaction = function(){
    let short = this.pattern.charAt(this.ticks % this.pattern.length);
    switch(short){
      case 'R':
        return 'reload';
        break;
      case 'D':
        return 'dodge';
        break;
      case 'S':
        return 'shoot';
        break;
      case 'X':
      default:
        return ['reload','dodge','shoot'][Math.floor(Math.random() * 3)];
        break;
    }
  }
}
