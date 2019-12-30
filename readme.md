# CMLRPG

Commandline RPG is a tool to create custom, Dungeons and Dragons style RPGs in a webconsole or something similar.

## Usage

To use the CMLRPG within your enviroment you first need to write a Avatar for your environment. It should be stored in `src/avatars/*.js`. You then need to call this Avatar from within the `index.js` file by importing it,  using the `import` function. This is done in the following way:

```js
import Avatar from './avatars/*.js'; //load the avatar for your enviroment
```

You will also need to supply a custom `config.js` file. It should be stored in `src/config/*/config.js`. It is then called in the `index.js` file by importing it. This should look like this:

```js
import Config from './config/*/config.js'; //load the config for your language
```

You should also supply a couple of Objects which are used by your `config.js` file to supply all needed data. Currently the following objects are needed:

- `Tiles.js` - contains all the environments objects which are accessible throughout the game
- `Library.js` - contains string patterns and translations
- `Enemys.js` - contains all the enemy objects which are to be fought

You should store all of these files in the same folder as the `config.js` file under the name stated above. Each file should contain one object which is exported with an `export` statement. The object then contains all of the values needed for the game. All of these files are called into the config with `import` like this:

```js
import Tiles from "./tiles.js";
import Library from './library.js';
import Enemys from "./enemys.js";

const Config = {
  tiles: Tiles,
  library: Library,
  enemys: Enemys
}

export default Config;
```

When you are writing these files orient yourself on the default files to see, which fields are needed and how they are structured. Below you can find the standard structure for each of these files. After you have supplied all of the needed files use a js bundler like [webpack]() or [parcel]() to bundle all of your files together into one script. Then load this script inside of your context. In the case of the CMLRPG for the developer tools console (using the avatar stored under `src/avatars/webconsole.js`) you have to add a script tag containing the packaged script to your html page like this:

```html
<script src="/src.a2b27638.js"></script>
```

The script above was produced by *parcel*. After the script containing all the necessary code is loaded in your enviroment all you need to do is creating a new *CMLRPG* object like this:

```html
<script>
window.onload = function () {
  new CMLRPG();
};
</script>
```

Everything else should the be done by the avatar.

### Tiles.js

This file contains an array of objects which represend enviroments in your game. This file should look somewhat like this:

```js
const Tiles = [
  {
    name: 'forrest',
    happening: null
  },
  {
    name: 'forrest with a goblin hut',
    happening: 'encounter',
    enemys: [
      'goblin'
    ]
  }
]

export default Tiles;
```

### Library.js

This file contains translations for certain strings used in the game, as well as arrays with patterns and placeholders, which are used to describe certain actions in the game. Which varibales are acessible within which string can be found below. This file should look somewhat like this:

```js
const Library = {
  north: 'north',
  east: 'east',
  south: 'south',
  west: 'west',
  errorUnknown: 'Something mysterious happened',
  errorMoveInCombat: 'You cannot move while in combat.',
  errorNoCombat: 'You are not in a combat.',
  errorNoValidDirection: 'This is not a valid direction.',
  move: [
    'You move to the {direction} into a {area}.'
  ],
  encounter: [
    "You move to the {direction} into a {area}. You are immedeatly attacked.",
  ],
  dodgePlayer: [
    "You dodge."
  ],
  reloadPlayer: [
    "You put a round into your {playerWeapon}."
  ],
  reloadFailedPlayer: [
    'Your weapon is alreday full.'
  ],
  shootPlayer: [
    "You fire your weapon."
  ],
  shotMissedPlayer: [
    "You miss!"
  ],
  noAmmunitionPlayer: [
    'You have no ammunition left.'
  ],
  dodgeEnemy: [
    "The enemy dodges."
  ],
  reloadEnemy: [
    'The enemy reloads.'
  ],
  shootEnemy: [
    'The enemy fires at you'
  ],
  shotMissedEnemy: [
    'The enemy misses.'
  ],
  dieEnemy: [
    "You have killed the enemy."
  ],
  lookDifferent: [
    'You look to the {direction}. You see a {close} upclose and a {far} in the distance.'
  ],
  lookSame: [
    'You look to the {direction}. You see a {close} that continues in the distance.'
  ]
}
export default Library;

```

These arrays can be of any length. The string that is actually used is selected at random. Do not wonder at the translation of `north: 'north'`. The 4 possible directions have an english name string, which is translated by the library before it is used. So when you are writing a game in another language, you might want to write: `north: 'Norden'`.

Within the string patterns there are varibales available. To have a the value of a variable written into a string you need to write out it's name in curly brackets. So for instance, if you would like to write out the current amount of ammunition the player has loaded, you could write: `You have {playerAmmunition} shots in your weapon.` and it would be printed as `'You have 3 shots in your weapon'`. *All variables are accessible in all contexts, however some are at a nonsense value.* If you would print the name of the current enemy while walking like this: `You walk in {direction}ern direction. You are meeting a {enemyName}` it would be printed as `'You walk in southern direction. You are meeting a goblin'`, as there is currently no enemy and the variable is still at the value of the enemy the player has fought last.

The following variables can be used from within a string pattern:

- direction - The direction the player is facing.
- close - the name of the tile right infront of the player, relative to the direction he is facing.
- far - the name of the tile behind the close tile, relative to the direction the player is facing.
- area - the name of the tile the player is currently standing on.
- playerHealth - the current health of the player.
- playerMaxHealth - the maximum amount of health the player can have.
- *playerLevel - the current level of the player.*
- *playerXP - the current amount of XP of the player.*
- *playerXPNeeded - the amount of XP the player needs to the next level.*
- playerAmmunition - the current amount of ammunition the player has loaded.
- playerMaxAmmunition - the capacity of the weapon the player is currently holding.
- playerWeapon - the name of the weapon the player has currently equipped.
- playerWeaponSound - a random sound from all of the possibile sounds the currently equipped weapon of the player can make.
- playerArmor - the name of the armor the player has currently equipped.
- playerArmorSound - a sound the players armor can make
- enemyName - the name of the enemy the player has fought last, during a fight it is the name of the current enemy.
- enemyBehavior - the name of the enemys behavior
- enemyBattlecry - a random battlecry from the list of battlecrys the enemy has.
- enemyDeathcry - a random deathcry from the list of deathcrys the enemy has.
- enemyHealth - the current amount of health of the enemy. 0 when there is no combat happening at the moment.
- enemyMaxHealth - the maximum amount of health the enemy can have.
- enemyXP - the amount of XP this enemy is worth.
- enemyWeapon, enemyWeaponSound, enemyArmor, enemyArmorSound - equivalent to the values for player, just specific to the enemy instead of the player.

### Enemys.js

This file contains an array of objects with each representing a enemy within the game. The file should look like this:

```
const Enemys = [
  {
    name: "goblin",
    health: 10,
    battlecrys: [
      'Die you pest!'
    ],
    deathcrys: [
      'I am dying...'
    ],
    armors: [
      {
        name: 'light plate armor',
        power: 3,
        sounds: [
          'plings'
        ]
      }
    ],
    weapons: [
      {
        name: 'short bow',
        power: 5,
        deviance: 3,
        capacity: 3,
        sounds: [
          'makes Sssst!'
        ]
      }
    ],
    behaviors: [
      {
        name: 'aggressive',
        pattern: 'RRSSHRSXRS'
      }
    ]
  }
]

export default Enemys;

```

All of the arrays be extended to any length. Which value is used is determined by random. Weapon, armor, behavior and deathcry are decided on creation, the battlecry and all sounds are selected new everytime they are used. The name field is to be matched by the `enemy: []` array from a tile object in the `Tile.js` file. 

The behavior field contains different behaviors for this enemy. Each behavior has a `name:`, which is accessible within library strings using `{enemyBehavior}` and a `pattern:` which is used to determine the enemys action in a combat. Each letter in the patternstring represents one of 4 actions. Which letter is used depends on the progress of the combat. The letter is selected based on the current combat round. So in the first combat round the first letter is used as a behavior, in the second round the second string and so on. When the rounds exceed the length of the string, the pattern is looped. So the longer the pattern the less likely the player will get used to it. You can use this to add different difficulties to your enemys. Each letter represents the following behavior:

- R - reload
- S - shoot
- D - dodge
- X - random behavior is selected from the 3 above

## Documentation

In the following I will explain a bit more about certain aspects of the game.

### Combat

Combat is pretty simple. Each combatant has three options: reloading, shooting, dodging. When both dodge, no one is hit. When one shoots and the other one dodges, the shot is a miss and the shooter has wasted one round. When both shoot, both are hit. When one shoots while the other reloads, the one reloading is hit.

To shoot you need to have loaded atleast one shot first. When the player finishes a combat with rounds left in the weapon, they are available in the next combat. Enemys do not have a ammunition system. Their behavior is defined by a pattern, which should be written in a way that the enemy only shoots, when he has loaded his gun beforehands (whoever some enemys might differ, for the purpose of fairness this would be good).

The damage that is dealt is determined by three values: the power of the weapon, the deviance of the weapon and the power of the armor. The damage is calculated by having the power changed by a random amount within the deviation and then substracting the fixed power of the armor from that. A small example: the player is shooting a gun with a power of 10, a deviation of 5 against an enemy with an armor with power 7.

- First shot: 10 - 5 = 5, 5 - 7 = -2, so 0 damage is done (as damage below 0 is treated as 0)
- Second shot: 10 - 3 = 7, 7 -7 = 0, so 0 damage is done
- Third shot: 10 - 0 = 10, 10 - 7 = 3, so 3 damage is done
- Fourth shot 10 + 4 = 14, 14 - 7 = 7, so 7 damage is done

The higher the deviance, the less reliable the weapon is, but the more damage could be dealt.

When the health of one combatant falls below 0 his action is still resolved (so a killed enemy could still hit you in the round you've killed him, thats how gun's work!). Afterwards the fight ends. When the player dies the game ends. A killed enemy will yield XP.

