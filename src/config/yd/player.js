const Player = {
  baseHealth: 30,
  healthPerLevel: 5,
  levelingSpeed: 1,
  resetHealthOnLevelUp: true,
  start: {
    xp: 0,
    position: {x: 0, y: 0},
    weapon: 'pistol',
    armor: 'winter coat'
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
