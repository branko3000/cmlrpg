const Enemys = [
  {
    name: "Roomba 676",
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
        weapons: ['rifle','laserpistol'],
        behaviors: ['chill','aggressive']
      },
      5: {
        maxHealth: 15,
        xp: 20,
        armors: {power: 4,name: 'shell',sounds: ['crack']},
        weapons: ['rifle','laserpistol','shotgun','laserrifle'],
        behaviors: ['chill','aggressive','crazy']
      },
      10: {
        maxHealth: 25,
        xp: 50,
        armors: {power: 6,name: 'shell',sounds: ['crack']},
        weapons: ['shotgun','laserrifle','missile launcher','railgun'],
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
    name: "Roomba s9+",
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
        weapons: ['rifle','laserpistol'],
        behaviors: ['chill','aggressive']
      },
      4: {
        maxHealth: 12,
        xp: 30,
        armors: {power: 3,name: 'shell',sounds: ['crack']},
        weapons: ['rifle','laserpistol','shotgun','laserrifle'],
        behaviors: ['chill','aggressive','crazy']
      },
      8: {
        maxHealth: 17,
        xp: 80,
        armors: {power: 4,name: 'shell',sounds: ['crack']},
        weapons: ['shotgun','laserrifle','missile launcher','railgun'],
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
  }, //Roomba s9+
  {
    name: "Samsung smart fridge",
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
        maxHealth: 30,
        xp: 100,
        armors: {power: 5,name: 'door',sounds: ['crack','creek']},
        weapons: ['rifle','laserpistol'],
        behaviors: ['aggressive','mad']
      },
      5: {
        maxHealth: 50,
        xp: 200,
        armors: {power: 5,name: 'door',sounds: ['crack','creek']},
        weapons: ['rifle','laserpistol','shotgun','laserrifle'],
        behaviors: ['aggressive','mad','smart']
      },
      8: {
        maxHealth: 80,
        xp: 500,
        armors: {power: 5,name: 'door',sounds: ['crack','creek']},
        weapons: ['shotgun','laserrifle','missile launcher','railgun'],
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
  }, //Samsung smart fridge
  {
    name: "stupid dude from the Internet cafe",
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
        pattern: '*D*R'
      }
    ]
  }, //stupid dude from the Internet cafe
  {
    name: "Tesla Model G that was hacked by gunter.js",
    battlecrys: [
      'I calculated this!'
    ],
    deathcrys: [
      'I calculated this, but damn am I bad at maths!'
    ],
    maxHealth: 100,
    xp: 1200,
    armors: {power: 12,name: 'carriage',sounds: ['crack','creek','screech']},
    weapons: ['missile launcher'],
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
