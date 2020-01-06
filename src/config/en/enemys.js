const Enemys = [
  {
    name: "goblin",
    maxHealth: 10,
    xp: 10,
    battlecrys: [
      'Die you filthy bugger!',
      'I will delife you, pest!',
      'eat my ass, son of a female dog!'
    ],
    deathcrys: [
      'This was foretold in the ancient murals...',
      'Tell my kids that I love them!',
      'I will be be back!'
    ],
    armors: [
      {
        name: 'some pieces of hide',
        power: 2,
        sounds: [
          'Krrrrt',
          'Ritsch Ratsch',
          'Brrrrt'
        ]
      },
      {
        name: 'light armor',
        power: 4,
        sounds: [
          'Kling',
          'Ding',
          'Pling'
        ]
      }
    ],
    weapons: [
      {
        name: 'short bow',
        power: 3,
        deviance: 1,
        capacity: 3,
        sounds: [
          'does Shhhhhh',
          'sounds Sssst',
          'makes a Oioioioiong sound'
        ]
      },
      {
        name: 'slingshot',
        power: 4,
        deviance: 3,
        capacity: 5,
        startWith: 1,
        sounds: [
          'does Ploing',
          'makes Pheeew',
          'does a Donk'
        ]
      }
    ],
    behaviors: [
      {
        name: 'aggressive',
        pattern: 'RRSS'
      },
      {
        name: 'chill',
        pattern: 'RDDSXX'
      },
      {
        name: 'smart',
        pattern: 'RHSR*'
      }
    ]
  },
  {
    name: "goblin leader",
    maxHealth: 15,
    xp: 25,
    battlecrys: [
      'Die you filthy bugger!',
      'I will delife you, pest!',
      'eat my ass, son of a female dog!'
    ],
    deathcrys: [
      'This was foretold in the ancient murals...',
      'Tell my kids that I love them!',
      'I will be be back!'
    ],
    armors: [
      {
        name: 'wrecked plate armor',
        power: 2,
        sounds: [
          'Dong',
          'Bong',
          'Klonk'
        ]
      },
      {
        name: 'light armor',
        power: 4,
        sounds: [
          'Kling',
          'Ding',
          'Pling'
        ]
      }
    ],
    weapons: [
      {
        name: 'long bow',
        power: 5,
        deviance: 1,
        capacity: 2,
        sounds: [
          'Shhhhhh',
          'Sssst',
          'Oioioioiong'
        ]
      },
      {
        name: 'flint lock pistol',
        power: 6,
        deviance: 4,
        capacity: 2,
        startWith: 2,
        sounds: [
          'Puff Puff',
          'Puff Peng',
          'Peng Peng'
        ]
      }
    ],
    behaviors: [
      {
        name: 'aggressive',
        pattern: 'RRSS'
      },
      {
        name: 'chill',
        pattern: 'RDDSXX'
      },
      {
        name: 'smart',
        pattern: 'RHSR*'
      }
    ]
  },
  {
    name: "goblin maniac",
    maxHealth: 20,
    xp: 20,
    battlecrys: [
      'Wulullu!',
      'Ackacka Rackackack!',
      'Yehah!'
    ],
    deathcrys: [
      'Bye Bye',
      'Cio Bella!',
      'Arividerci'
    ],
    armors: [
      {
        name: 'some tatters',
        power: 0,
        sounds: [
          'Rripp',
          'Ssst',
          '*rip*'
        ]
      }
    ],
    weapons: [
      {
        name: 'flamethrower',
        power: 7,
        deviance: 7,
        capacity: 100,
        startWith: 1,
        sounds: [
          '*burn*',
          '*die*',
          '*love the smell*'
        ]
      }
    ],
    behaviors: [
      {
        name: 'aggressive',
        pattern: 'RRSS'
      },
      {
        name: 'chill',
        pattern: 'RDDSXX'
      },
      {
        name: 'smart',
        pattern: 'RHSR*'
      }
    ]
  },
  {
    name: "King Henry",
    maxHealth: 25,
    xp: 100,
    battlecrys: [
      'You will totally not kiss my daughter goodnight, punk!'
    ],
    deathcrys: [
      'Kiss me goodnight, punk!'
    ],
    armors: [
      {
        name: 'golden plate armor',
        power: 5,
        sounds: [
          'Pling',
          'Plong'
        ]
      }
    ],
    weapons: [
      {
        name: 'crossbow',
        power: 6,
        deviance: 2,
        capacity: 1,
        startWith: 1,
        sounds: [
          'Zziing',
          'Pheew',
          'Ssshhht'
        ]
      }
    ],
    behaviors: [
      {
        name: 'enraged',
        pattern: 'SHR*'
      }
    ]
  }
]

export default Enemys;
