const Library = {
  errorUnknown: 'Something mysterious happened',
  errorMoveInCombat: 'You are fighting, do not try to flee!',
  errorNoCombat: 'You are currently not in a fight.',
  errorNoValidDirection: 'It seems that the direction you are trying to move to is non existent.',
  north: 'north',
  east: 'east',
  south: 'south',
  west: 'west',
  move: [
    'You move to the {direction} into a {area}.',
    'You move in {direction}ern direction, entering a {area} shortly after.',
    'You start moving into the {direction}. You enter a {area}.'
  ],
  encounter: [
    "You move to the {direction} into a {area}. You are immedeatly attacked by a {enemyBehavior} {enemyName} in {enemyArmor}, wielding a {enemyWeapon}. The enemy shouts: '{enemyBattlecry}' while hurdling at you!",
  ],
  dodgePlayer: [
    "You [{playerHealth}/{playerMaxHealth}] throw yourself into cover."
  ],
  reloadPlayer: [
    "You [{playerHealth}/{playerMaxHealth}] put a round into your {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}]."
  ],
  reloadFailedPlayer: [
    'You try tro cramp another shot into your already full {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}].'
  ],
  shootPlayer: [
    "You [{playerHealth}/{playerMaxHealth}] fire your {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] and it {playerWeaponSound},dealing a whopping {playerDamage} points of damage to your enemy - his {enemyArmor} {enemyArmorSound}."
  ],
  shotMissedPlayer: [
    "You [{playerHealth}/{playerMaxHealth}] fire your {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}], which {playerWeaponSound}, but you miss!"
  ],
  noAmmunitionPlayer: [
    'You [{playerHealth}/{playerMaxHealth}] try to fire your unloaded {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] and unsurprisingly fail to do so!'
  ],
  dodgeEnemy: [
    "The enemy {enemyName} [{enemyHealth}/{enemyMaxHealth}] lunges behind a rock."
  ],
  reloadEnemy: [
    'The enemy {enemyName} [{enemyHealth}/{enemyMaxHealth}] reloads his {enemyWeapon}.'
  ],
  shootEnemy: [
    'The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] fires his {enemyWeapon}, which {enemyWeaponSound}, hurting you badly with {enemyDamage} points of damage. Your {playerArmor} {playerArmorSound}.'
  ],
  shotMissedEnemy: [
    'The opposing {enemyName} misses you slightly with his {enemyWeapon}.'
  ],
  dieEnemy: [
    "You wounded the opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] badly with your {playerWeapon}. He sinks to the ground, mortally wounded, shouting in agony: '{enemyDeathcry}'."
  ],
  lookDifferent: [
    'You look to the {direction}. You see a {close} upclose and a {far} in the distance.',
    'You look in {direction}ern direction. Infront of you there is a {close}, a {far} is further away.',
    'You start looking into the {direction}. You gaze upon a {far} in the distance while standing infront of a {close}.'
  ],
  lookSame: [
    'You look to the {direction}. You see a {close} that continues in the distance.',
    'You look in {direction}ern direction. Infront of you there is a {close}, which continues in the distance.',
    'You start looking into the {direction}. A {close} stretches up to the horizon.'
  ]
}
export default Library;
