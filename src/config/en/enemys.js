const Enemys = [
  {
    name: "goblin",
    health: 10,
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
        power: 5,
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
        power: 4,
        deviance: 1,
        capacity: 5,
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
        pattern: 'RHHSXX'
      },
      {
        name: 'smart',
        pattern: 'RHHSH'
      }
    ]
  }
]

export default Enemys;
