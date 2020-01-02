const Player = {
  baseHealth: 20,
  healthPerLevel: 5,
  start: {
    position: {x: 0, y: 0},
    weapon: {
      type: 'weapon',
      name: 'flint lock rifle',
      power: 5,
      deviance: 2,
      capacity: 3,
      sounds: [
        'makes Peng!',
        'does a loud Bauz!',
        'does Ssst Bumm!'
      ]
    },
    armor: {
      type: 'armor',
      name: 'light plate armor',
      power: 4,
      sounds: [
        'lets loose a silent Zeeng',
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
