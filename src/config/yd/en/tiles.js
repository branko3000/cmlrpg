const Tiles = [
  /*standard city enviroment*/
  {
    name: 'forrest',
    happening: null
  },
  {
    name: 'street',
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
  /*enviroment with encounters*/
  {
    name: 'guarded suburb',
    happening: 'encounter',
    options: {
      70: 'Vroomba 676',
      20: 'Vroomba s9+',
      10: 'Sumsang smart fridge'
    }
  },
  {
    name: 'suspicious parking lot',
    happening: 'encounter',
    options: {
      60: 'Vroomba 676',
      35: 'Vroomba s9+',
      5: 'Terry t7'
    }
  },
  {
    name: 'super secret lab',
    happening: 'encounter',
    options: {
      30: 'Vroomba 676',
      15: 'Vroomba s9+',
      5: 'Terry t7',
      50: 'Sumsang smart fridge'
    }
  },
  /*enviroment with loot*/
  {
    name: 'mall',
    happening: 'item',
    options: {
      10: 'pistol',
      10: 'revolver',
      30: 'shotgun',
      20: 'sniper rifle',
      20: 'semi-automatic rifle',
      30: 'assault rifle',
      20: 'leather jacket',
      40: 'bullet proof vest',
      10: 'laserrifle',
      2: 'RPG'
    }
  },
  {
    name: 'store',
    happening: 'item',
    options: {
      5: 'slingshot',
      5: 'blowgun',
      10: 'crossbow',
      5: 'bow',
      20: 'pistol',
      10: 'revolver',
      20: 'shotgun',
      5: 'laserpistol',
      10: 'winter coat',
      20: 'leather jacket'
    }
  },
  {
    name: 'military base',
    happening: 'item',
    options: {
      10: 'pistol',
      10: 'silenced sniper rifle',
      20: 'semi-automatic rifle',
      50: 'assault rifle',
      50: 'bullet proof vest',
      20: 'light armor',
      15: 'heavy armor',
      5: 'RPG',
      1: 'missile launcher'
    }
  },
  {
    name: 'secret lab',
    happening: 'item',
    options: {
      100: 'lab coat',
      50: 'raygun',
      10: 'exosuite',
      1: 'railgun',
      1: 'fusionblaster'
    }
  }
]

export default Tiles;
