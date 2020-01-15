const Tiles = [
  {
    name: 'forrest',
    happening: null
  },
  {
    name: 'plain',
    happening: null
  },
  {
    name: 'field',
    happening: null
  },
  {
    name: 'suburb',
    happening: null
  },
  {
    name: 'empty parking lot',
    happening: null
  },
  {
    name: 'park',
    happening: null
  },
  {
    name: 'plaza',
    happening: null
  },
  {
    name: 'guarded suburb',
    happening: 'encounter',
    options: {
      60: 'Roomba 676',
      40: 'Roomba s9+'
    }
  },
  {
    name: 'suspicious parking lot',
    happening: 'encounter',
    options: [
      'Roomba 676',,'Roomba 676','Roomba 676','Roomba s9+','Roomba s9+','Samsung smart fridge'
    ]
  },
  {
    name: 'abandoned mall',
    happening: 'item',
    options: ['rifle','shotgun','laserpistol','laserrifle','missile launcher','light armor']
  },
  {
    name: 'abandoned store',
    happening: 'item',
    options: ['rifle','shotgun','laserpistol','laserrifle','leather jacket']
  }
]

export default Tiles;
