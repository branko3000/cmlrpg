# CMLRPG

Commandline RPG is a tool to create custom, Dungeons and Dragons style RPGs in a webconsole or something similar. It works using a virtual avatar that handles the input and output that a wrapper generates from a set of custom config files.

[TOC]

## Usage

1. Clone this repo
2. Open the file located at `src/index.js`  with a editor of your choice.
3. Change the value of the `import Config from './config/*/*.js';` to a config file of your choice from the `src/config` folder.
4. Change the value of the `import Avatar from './avatar/*.js';` to a avatar file of your choice from the `src/avatar` folder.
5. Run a JavaScript bundler of your choice to bundle all scripts into a singular script.
6. Add this script you your site with a `<script></script>` tag.
7. Call `new CMLRPG();` from anywhere (the avatar object will be stored in a global `CMLRPG` variable ) to start the game.

## Customize

This project is meant to be used to build custom RPGs. The possibilities are endless, as you are able to define all text used yourself. So any setting, any language is possibile. There is no need to have the RPG happen in the console only. Any way of getting a text based input and presenting it as a text based output can be used. Textarea, push messages, text to speech - your choice. Please be so kind to add any new *Avatars* and configs to the repo to have it accessible to all users.

To use the CMLRPG within your enviroment you first need to write a Avatar for your environment. It should be stored in `src/avatars/*.js`. Read more on how to write an avatar in the [Documentation]() section if this document. You then need to call this Avatar from within the `index.js` file by importing it,  using the `import` function. This is done in the following way:

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

Within the string patterns there are varibales available. To have a the value of a variable written into a string you need to write out it's name in curly brackets. So for instance, if you would like to write out the current amount of ammunition the player has loaded, you could write: `You have {playerAmmunition} shots in your weapon.` and it would be printed as `'You have 3 shots in your weapon'`. All variables are accessible in all contexts, however some are at a nonsense value. If you would print the name of the current enemy while walking like this: `You walk in {direction}ern direction. You are meeting a {enemyName}` it would be printed as `'You walk in southern direction. You are meeting a goblin'`, as there is currently no enemy and the variable is still at the value of the enemy the player has fought last.

The following variables can be used from within a string pattern:

- direction - The direction the player is facing.
- close - the name of the tile right infront of the player, relative to the direction he is facing.
- far - the name of the tile behind the close tile, relative to the direction the player is facing.
- area - the name of the tile the player is currently standing on.
- playerHealth - the current health of the player.
- playerMaxHealth - the maximum amount of health the player can have.
- playerLevel - the current level of the player
- playerAmmunition - the current amount of ammunition the player has loaded.
- playerMaxAmmunition - the capacity of the weapon the player is currently holding.
- playerWeapon - the name of the weapon the player has currently equipped.
- playerWeaponSound - a random sound from all of the possibile sounds the currently equipped weapon of the player can make.
- playerWeaponDamage - the damage range of the players weapon
- playerArmor - the name of the armor the player has currently equipped.
- playerArmorSound - a sound the players armor can make
- enemyName - the name of the enemy the player has fought last, during a fight it is the name of the current enemy.
- enemyBehavior - the name of the enemys behavior
- enemyBattlecry - a random battlecry from the list of battlecrys the enemy has.
- enemyDeathcry - a random deathcry from the list of deathcrys the enemy has.
- enemyHealth - the current amount of health of the enemy. 0 when there is no combat happening at the moment.
- enemyMaxHealth - the maximum amount of health the enemy can have.
- xpGain - the amount of XP the current enemy is worth/the current goal yields.
- enemyWeapon, enemyWeaponSound, enemyWeaponDamage, enemyArmor, enemyArmorSound, enemyAmmunition, enemyMaxAmmunition - equivalent to the values for player, just specific to the enemy instead of the player.

### Enemys.js

This file contains an array of objects with each representing a enemy within the game. These objects are called by tiles in the `Tiles.js` file. The file should look like this:

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
- \* - the best possibile move, based on the players action, is selected

#### Some thoughts on patterns

Weapon and armor are not the only things that make an enemy hard to deal with. The pattern is quite important as well. You have to think about the following things when designing a pattern: how much damage will it deal? How random will it be? How hard is it to recognise?

The damage output of a pattern is important, as the game is not over when the fight is done. The more damage this enemy will deal before he is dead, the harder the game will be to continue. The most damaging pattern is obviously: `'RS'`. Try to mix in some longer moments of dodging to reduce damage output, especially with highly damaging weapons attached.

The randomness of a pattern is mainly due to the usage of the `X`. The more `X` the harder it will be to recognise, as you cannot be sure if the action was random or part of the pattern. But the `*` can seem to be random as well, as the player is unable to know if the actual action came from the `X` or the `*`. So to control, how good a pattern is to recognise (and therefore to be easily beaten) you have to think about the amount of `X` and `*` characters in it.

But the length of the pattern is important as well. The shorter it is, the faster the player will notice when the pattern starts again and will be able to beat it. Mixing in *fake* repeats can make a pattern harder to guess, just as the usage of `X` will. When you have `'RRSDSRRSSD'` the player might guess, that the second time the double reload appears, the pattern is already repeating. He might then dodge the first shot (good) but will then reload, as he is expecting the enemy to dodge anyways. The player will then be hit by a shot he was totally not expecting.

Here are some patterns with comments on their difficulty:

- `RDS` - insanely easy
- `RDSRSD` - easy with a fake repeat
- `RDSR**` - easy to guess but very hard to combat
- `DX` - insanely easy
- `DRDXDRD*` - easier to recognise then to combat
- `RXR*X` - very hard tp recognise and combat. The combination `R*X` makes sure, that atleast some damage is done, even if most of the `X` come out as a *dodge*.

### Player.js

This file contains values that define how the player will level up, behave and with what equipment he will start. The file should look like this:

```js
const Player = {
  baseHealth: 20,
  healthPerLevel: 5,
  start: {
    position: {x: 0, y: 0},
    weapon: {
      name: 'flint lock rifle',
      power: 5,
      deviance: 2,
      capacity: 3,
      sounds: [
        'Peng!',
        'Bauz!',
        'Bumm!'
      ]
    },
    armor: {
      name: 'light plate armor',
      power: 4,
      sounds: [
        'Zeeng',
        'aches'
      ]
    }
  },
  battlecrys: [
    'Engarde!',
    'I will wreck you!'
  ],
  deathcrys: [
    'Ahhhhhhh',
    'I took an arrow to the knee!'
  ]
}
export default Player;
```

### *Story.js*

This file contains an array with task objects. These tasks represent the story, that is being told in the game. This file should look like this:

```js
const Story = [
	{
    name: '',
    prolog: '',
    epilog: '',
    description: '',
    xp: 20,
    loot: {
      type: 'weapon',
      name: 'flint lock rifle',
      power: 5,
      deviance: 2,
      capacity: 3,
      sounds: [
        'Peng!',
        'Bauz!',
        'Bumm!'
      ]
    }
    goals: [
      {
        type: 'location',
        position: {
          x: 10,
          y: -5
        }
      }
  	]
		tiles: [
      {
        name: 'forsaken castle',
        happening: 'encounter',
        enemys: [
          'ghost of the king'
        ]
  		}
    ]
  }
]
export default Story;
```

A chapter begins when the one before is completed. The player is then presented with the `epilog` of the finished chapter followed by the `prolog` of the new task. The first chapters `prolog` will be appended to the overall introduction at the start of the game. The last chapters `epilog` will be written right before the end credits. A chapters `description` and `name` will be given to the player when he calls the `task` function through the *Avatar*. The chapter number is defined by the position of the chapter in the `Story.js` array.

The `xp` are given to the player after finishing the chapter. The player is also offered a *loot dialogue* containing the *item* in the `loot` field. You may specify a string or an array of strings instead of writing out the object.

```js
loot: 'Golden Bow',
```

If you specified a string, the item with this name from `Item.js` in the `config.js` will be given as loot. When you specify an array, a random string will be selected.

```js
loot: ['Golden Bow','Silver Bow','Flint Lock Pistol']
```

The `goal` property defines when the chapter will be finished. There are currently only three different types of goals:

- location - reaching a certain location
  - `position` set to an object containig a `x` and `y` property. When this point is reached in the game while this chapter is active, the chapter will be triggered as finished. If you don't overwrite the specified position, all triggered happenings will happen right after the task is finished.
- distance - travelling a certain amount of steps
  - `steps` set to a number of steps to walk
- fight - fighting a certain amount of enemys
  - `fights` set to the number of fights the player will have to win before finishing the chapter.
- level - a certain level has to be reached before the chapter is finished
  - `level` set to the level, the player will have to reach.

To define what kind your goal is you have to write the correct `type` property. Each type needs a certain amount of additional information as specified above. You can combine multiple types in one goal. The chapter will be finished when all goals are reached. To specify multiple goals, simply add more goal objects to the `goals:` array. **Please be aware that specifying multiple goals of the same type will result in the game possibly breaking. Use multiple chapters instead.**

The `tiles` property is used to overwrite certain tiles on the map while the chapter is active. This can be used to have more or specific enemys around the area or to add a boss the `location` of the goal. Simply specify a tile in the style the `Tiles.js` file uses and add a `x` and a `y` property to specify the location where this tile should be loaded. These tiles can have happenings as well. Any happening will be resolved before the chapter is finished, so a fight has to be won before the chapter is done.

### *Items.js*

This file contains an array containig objects which represent different items in the game. The file should look like this:

```js

```

Each item needs a `name` and `description` field, which is used in the loot dialogue. There are currently three different types of items which are to be specified by the `type` property. Each type needs certain additional propertys:

- `weapon`
  - `power` - the base to use for damage calculations
  - `deviance` - how much the actual damage can deviate from the base (specified with *power*)
  - `capacity` - how many rounds may be loaded aka how many times *reload* can be used
  - `sounds` - array with sound strings that may be used
- `armor`
  - `power` - how much damage it can reduce
  - `sounds` - array with sound strings that may be used
- `potion`
  - `trigger` - when this potion is used/can be used
    - `pickup` - effect happens upon picking up the potion
    - `combat` - potion can be consumed from the inventory during combat
    - `inventory` - potion can be consumed from the inventory at any time
  - `durationtype` - the way the duration is determined
    - `once` - the effect happens only once
    - `infinite` - the effect takes place forever
    - `steps` - the effect takes place for a certain amount of steps
    - `fights` - the effect takes place for a certain amount of fights
    - `rounds` - the effect takes place for a certain amount of fighting rounds, starting in the next (or current) fight. Effect ends when the next (or current) fight ends.
  - `duration` - specifies the number for the durationtype. Is ignored for `durationtype: 'once'` and `durationtype: 'infinite'`
  - `effects` - an array of the effects that should happen when the potion is triggered and everytime the duration retriggers it
    - `parameter` - the parameter that should be modified
    - `modificatiotype` - the modification that shall be done on every trigger. More below.
      - `set` - sets the parameter to a certain value
      - `up` - ups the parameter by a certain value (upping by a negative value will result in a reduction of the parameter)
      - `lock` - will keep the parameter from being changed while the potion is active. Keep in mind, that all effects of the potion happen in order of the array. So if you want to set and then lock a parameter then you have to do the setting first.
    - `modification` - the value of the modification, can be ignored for `modificationtype: 'lock'`. To set a numerical value to its highest value, simply set it to an insanely high value. The game will cap it at the max.
      - `1` - specifies a certain number
      - `''` - specifies a certain string
      - `[]` - use a random value from the specified array

## Documentation

Here I have documented how certain aspects work on the more technical site. This is interesting when you are customizing a RPG but especially important when writing your own avatar.

### Avatars





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
