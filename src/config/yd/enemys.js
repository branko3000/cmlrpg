const Enemys = [
  {
    name: "Vroomba 676",
    gender: 'n',
    battlecrys: [
      'I`m the one who cleans!',
      'I will suck you!',
      'Ever heard of Kerby?'
    ],
    deathcrys: [
      'I`m now nothing more but the dust I used to suck...',
      'I sucked to little or to much...',
      'I`ll be be back!'
    ],
    levels: {
      1: {
        maxHealth: 10,
        xp: 10,
        armors: {power: 3,name: 'shell',sounds: ['crack']},
        weapons: ['semi-automatic rifle','laserpistol'],
        loot: ['semi-automatic rifle','laserpistol'],
        behaviors: ['chill','aggressive']
      },
      5: {
        maxHealth: 15,
        xp: 20,
        armors: {power: 4,name: 'shell',sounds: ['crack']},
        weapons: ['semi-automatic rifle','laserpistol','shotgun','laserrifle'],
        loot: ['semi-automatic rifle','laserpistol','shotgun','laserrifle'],
        behaviors: ['chill','aggressive','crazy']
      },
      10: {
        maxHealth: 25,
        xp: 50,
        armors: {power: 6,name: 'shell',sounds: ['crack']},
        weapons: ['shotgun','laserrifle','RPG'],
        loot: ['shotgun','laserrifle','RPG'],
        behaviors: ['chill','aggressive','crazy','smart']
      }
    },
    patterns: [
      {
        name: 'aggressive',
        pattern: 'RS'
      },
      {
        name: 'crazy',
        pattern: 'X'
      },
      {
        name: 'chill',
        pattern: 'RDDSXX'
      },
      {
        name: 'smart',
        pattern: 'RDSR*'
      }
    ]
  }, //Vromba 676
  {
    name: "Vroomba s9+",
    gender: 'n',
    battlecrys: [
      'I`m the one who cleans!',
      'I will suck you!',
      'Ever heard of Kerby?'
    ],
    deathcrys: [
      'I`m now nothing more but dust I used to suck...',
      'I sucked to little or to much...',
      'I`ll be be back!'
    ],
    levels: {
      1: {
        maxHealth: 8,
        xp: 15,
        armors: {power: 2,name: 'shell',sounds: ['crack']},
        weapons: ['semi-automatic rifle','laserpistol'],
        behaviors: ['chill','aggressive']
      },
      4: {
        maxHealth: 12,
        xp: 30,
        armors: {power: 3,name: 'shell',sounds: ['crack']},
        weapons: ['semi-automatic rifle','laserpistol','shotgun','laserrifle'],
        loot: ['semi-automatic rifle','laserpistol','shotgun','laserrifle'],
        behaviors: ['chill','aggressive','crazy']
      },
      8: {
        maxHealth: 17,
        xp: 80,
        armors: {power: 4,name: 'shell',sounds: ['crack']},
        weapons: ['revolver','shotgun','laserrifle','machine gun','missile launcher'],
        loot: ['revolver','shotgun','laserrifle','machine gun','missile launcher'],
        behaviors: ['chill','aggressive','crazy','smart']
      }
    },
    patterns: [
      {
        name: 'aggressive',
        pattern: 'RS'
      },
      {
        name: 'mad',
        pattern: 'X'
      },
      {
        name: 'smart',
        pattern: 'RDSRD*'
      },
      {
        name: 'self-conscious',
        pattern: 'RD*'
      }
    ]
  }, //Vroomba s9+
  {
    name: "Sumsang smart fridge",
    gender: 'f',
    battlecrys: [
      'It`s getting cold in here!',
      'Stay fresh!',
      'Ich mach dich kalt!'
    ],
    deathcrys: [
      'You`ve defrosted me...',
      'not cool!',
    ],
    levels: {
      1: {
        maxHealth: 20,
        xp: 100,
        armors: {power: 2,name: 'door',sounds: ['crack','creek']},
        weapons: ['machine gun','silenced sniper rifle','sawed-off shotgun'],
        loot: ['machine gun','silenced sniper rifle','sawed-off shotgun'],
        behaviors: ['aggressive','mad']
      },
      3: {
        maxHealth: 30,
        xp: 200,
        armors: {power: 4,name: 'door',sounds: ['crack','creek']},
        weapons: ['machine gun','silenced sniper rifle','sawed-off shotgun','RPG','raygun'],
        loot: ['machine gun','silenced sniper rifle','sawed-off shotgun','RPG','raygun'],
        behaviors: ['aggressive','mad','smart']
      },
      9: {
        maxHealth: 50,
        xp: 500,
        armors: {power: 5,name: 'door',sounds: ['crack','creek']},
        weapons: ['raygun','RPG','fusionblaster'],
        loot: ['raygun','RPG','fusionblaster'],
        behaviors: ['aggressive','mad','smart','self-conscious']
      }
    },
    patterns: [
      {
        name: 'aggressive',
        pattern: 'RS'
      },
      {
        name: 'mad',
        pattern: 'X'
      },
      {
        name: 'smart',
        pattern: 'RXXRD*'
      },
      {
        name: 'self-conscious',
        pattern: 'RD*RD*RDX'
      }
    ]
  }, //Sumsang smart fridge
  {
    name: "Terry t7",
    gender: 'n',
    battlecrys: [
      'I`ll make you hoe for me!',
      'Sow the wind, reap the whirlwind!',
      'I will fertilize the ground with your remains!'
    ],
    deathcrys: [
      'I`ll dig my own grave...',
      'You reap what ypu sow.'
    ],
    levels: {
      1: {
        maxHealth: 20,
        xp: 20,
        armors: {power: 3,name: 'shell',sounds: ['crack']},
        weapons: ['semi-automatic rifle','laserpistol','assault rifle'],
        loot: ['semi-automatic rifle','laserpistol','assault rifle'],
        behaviors: ['chill','aggressive']
      },
      5: {
        maxHealth: 30,
        xp: 35,
        armors: {power: 4,name: 'shell',sounds: ['crack']},
        weapons: ['semi-automatic rifle','laserpistol','shotgun','laserrifle','sniper rifle'],
        loot: ['semi-automatic rifle','laserpistol','shotgun','laserrifle','sniper rifle'],
        behaviors: ['chill','aggressive','crazy']
      },
      10: {
        maxHealth: 40,
        xp: 70,
        armors: {power: 6,name: 'shell',sounds: ['crack']},
        weapons: ['sawed-off shotgun','laserrifle','missile launcher'],
        loot: ['sawed-off shotgun','laserrifle','missile launcher'],
        behaviors: ['chill','aggressive','crazy','smart']
      }
    },
    patterns: [
      {
        name: 'aggressive',
        pattern: 'RS'
      },
      {
        name: 'crazy',
        pattern: 'X'
      },
      {
        name: 'chill',
        pattern: 'RDDSXX'
      },
      {
        name: 'smart',
        pattern: 'RDSR*'
      }
    ]
  }, //Terry t7
  {
    name: "stupid dude from the Internet cafe",
    gender: 'm',
    battlecrys: [
      'Teemo is boss!'
    ],
    deathcrys: [
      'I was fooled!'
    ],
    maxHealth: 50,
    xp: 500,
    armors: 'leather jacket',
    weapons: 'crossbow',
    behaviors: ['self-confident'],
    loot: ['leather jacket', 'crossbow'],
    patterns: [
      {
        name: 'self-confident',
        pattern: '*DXR'
      }
    ]
  }, //stupid dude from the Internet cafe
  {
    name: "Tesla Model G that was hacked by gunter.js",
    gender: 'n',
    battlecrys: [
      'I calculated this!'
    ],
    deathcrys: [
      'I calculated this, but damn am I bad at maths!'
    ],
    maxHealth: 100,
    xp: 1200,
    armors: {power: 8,name: 'carriage',sounds: ['crack','creek','screech']},
    weapons: ['missile launcher'],
    loot: ['missile launcher'],
    behaviors: ['enraged'],
    patterns: [
      {
        name: 'enraged',
        pattern: '*D*R'
      }
    ]
  } //Tesla Model G that was hacked by gunter.js
]

export default Enemys;
