const Story = [
  {
    title: 'The beginning',
    prolog: 'The prolog of the beginning.',
    epilog: 'The epilog of the begining',
    description: 'The description of the beginning',
    xp: 10,
    loot: {
      type: 'weapon',
      name: 'flint lock pistols',
      power: 7,
      deviance: 7,
      capacity: 2,
      sounds: [
        'Peng!',
        'Bauz!',
        'Bumm!'
      ]
    },
    goal: {x:1,y:0},
		tiles: [
      {
        name: 'goblin fortress',
        happening: 'boss',
        enemys: [
          'goblin leader'
        ],
        x: 1,
        y: 0
  		}
    ]
  },
  {
    title: 'The ending',
    prolog: 'The prolog of the ending.',
    epilog: 'The epilog of the ending',
    description: 'The description of the ending',
    xp: 50,
    goal: {x:2,y:1},
		tiles: [
      {
        name: 'unholy portal',
        happening: 'goal',
        x: 2,
        y: 1
  		}
    ]
  }
]
export default Story;
