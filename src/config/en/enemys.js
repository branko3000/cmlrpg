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
        power: 3,
        sounds: [
          'does Krrrrt',
          'makes Ritsch Ratsch',
          'does a Brrrrt'
        ]
      },
      {
        name: 'light armor',
        power: 1,
        sounds: [
          'krinkles slightly',
          'makes prrt',
          'sounds a knckrknck'
        ]
      }
    ],
    weapons: [
      {
        name: 'short bow',
        power: 10,
        deviance: 3,
        capacity: 3,
        sounds: [
          'does Shhhhhh',
          'sounds Sssst',
          'makes a Oioioioiong sound'
        ]
      },
      {
        name: 'slingshot',
        power: 10,
        deviance: 1,
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
        pattern: 'RHHSH'
      }
    ]
  },
  {
    name: "goblin leader",
    maxHealth: 1,
    xp: 100,
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
        name: 'light armor',
        power: 1,
        sounds: [
          'krinkles slightly',
          'makes prrt',
          'sounds a knckrknck'
        ]
      }
    ],
    weapons: [
      {
        name: 'short bow',
        power: 1,
        deviance: 3,
        capacity: 3,
        sounds: [
          'does Shhhhhh',
          'sounds Sssst',
          'makes a Oioioioiong sound'
        ]
      }
    ],
    behaviors: [
      {
        name: 'aggressive',
        pattern: 'R'
      }
    ]
  },
  {
    name: "Ghost of the old King",
    maxHealth: 5,
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
        name: 'golden chainmail',
        power: 5,
        sounds: [
          'does a Pling'
        ]
      }
    ],
    weapons: [
      {
        name: 'giant crossbow',
        power: 7,
        deviance: 0,
        capacity: 1,
        sounds: [
          'Shhhhhh'
        ]
      }
    ],
    behaviors: [
      {
        name: 'awakened',
        pattern: 'R'
      }
    ]
  }
]

export default Enemys;
