const Tiles = [
  {
    name: 'forrest',
    symbol: 'A',
    color: 'green',
    happening: null
  },
  {
    name: 'forrest with a goblin hut',
    symbol: 'A',
    color: 'green',
    happening: 'encounter',
    enemys: [
      'goblin'
    ]
  },
  {
    name: 'plain',
    happening: null
  },
  {
    name: 'mountain',
    happening: null
  },
  {
    name: 'swamp',
    symbol: 'X',
    color: 'black',
    happening: null
  },
  {
    name: 'swamp with totally no goblins in it',
    symbol: 'X',
    color: 'black',
    happening: 'encounter',
    enemys: [
      'goblin','goblin','goblin maniac'
    ]
  }
]

export default Tiles;
