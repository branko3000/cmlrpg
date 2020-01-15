const Player = {
  baseHealth: 20,
  healthPerLevel: 5,
  levelingSpeed: 1,
  start: {
    xp: 1000,
    position: {x: 0, y: 0},
    weapon: {
      type: 'weapon',
      name: 'flint lock rifle',
      power: 10,
      deviance: 2,
      capacity: 3,
      sounds: [
        'Peng',
        'Bauz',
        'Ssst Bumm'
      ]
    },
    armor: {
      type: 'armor',
      name: 'light plate armor',
      power: 4,
      sounds: [
        'Zeeng',
        'Ziing'
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
