const Library = {
  errorUnknown: 'Something mysterious happened',
  errorMoveInCombat: 'You are fighting, do not try to flee!',
  errorNoCombat: 'You are currently not in a fight.',
  errorNoValidDirection: 'It seems that the direction you are trying to move to is non existent.',
  errorNoTasks: 'There are currently no tasks available.',
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
    "You move to the {direction} into a {area}. You are immedeatly attacked by a {enemyBehavior} {enemyName} in a {enemyArmor}, wielding a {enemyWeapon}. The enemy shouts: '{enemyBattlecry}' while hurdling at you!",
  ],
  taskFinished: [
    '{taskEpilog} You [{playerLevel} | {playerHealth}/{playerMaxHealth}] have gained {taskXP}XP. {taskProlog}'
  ],
  dodgePlayer: [
    "You [{playerHealth}/{playerMaxHealth}] throw yourself into cover."
  ],
  reloadPlayer: [
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] put a round into your {playerWeapon} [{playerWeaponDamage} | {playerAmmunition}/{playerMaxAmmunition}]."
  ],
  reloadFailedPlayer: [
    'You [{playerLevel} | {playerHealth}/{playerMaxHealth}] try tro cramp another shot into your already full {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}].'
  ],
  shootPlayer: [
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] fire your {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] and it does a {playerWeaponSound}, dealing a whopping {playerDamage} points of damage to your enemy - his {enemyArmor} {enemyArmorSound}s."
  ],
  shotMissedPlayer: [
    "You [[{playerLevel} | {playerHealth}/{playerMaxHealth}] fire your {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}], which {playerWeaponSound}s, but you miss!"
  ],
  noAmmunitionPlayer: [
    'You [{playerLevel} | {playerHealth}/{playerMaxHealth}] try to fire your unloaded {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] and unsurprisingly fail to do so!'
  ],
  diePlayer: [
    "The opposing {enemyName} mortally wounded you. You ache in pain, shout your last: '{playerDeathcry}' and sink to the ground."
  ],
  dodgeEnemy: [
    "The enemy {enemyName} [{enemyHealth}/{enemyMaxHealth}] lunges behind a rock."
  ],
  reloadEnemy: [
    'The enemy {enemyName} [{enemyHealth}/{enemyMaxHealth}] reloads his {enemyWeapon}.'
  ],
  reloadFailedEnemy: [
    'Your enemy [{enemyHealth}/{enemyMaxHealth}] tries to load another shot, but the {enemyWeapon} is already fully loaded.'
  ],
  shootEnemy: [
    'The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] fires his {enemyWeapon}with a load {enemyWeaponSound}, hurting you badly with {enemyDamage} points of damage. Your {playerArmor} makes a {playerArmorSound}.'
  ],
  shotMissedEnemy: [
    'The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] misses you slightly with his {enemyWeapon}.'
  ],
  noAmmunitionEnemy: [
    'Your enemy [{enemyHealth}/{enemyMaxHealth}] has no shots left but still tries to shoot, stupid...'
  ],
  dieEnemy: [
    "You wounded the opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] badly with your {playerWeapon}. He sinks to the ground, mortally wounded, shouting in agony: '{enemyDeathcry}'. You have gained {xpGain}XP"
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
  ],
  task: [
      'Chapter {taskNumber} - {taskTitle}:\n{taskDescription}\n{taskDirections} - {taskXP}XP'
  ],
  info: [
      'Lvl. {playerLevel} | {playerHealth}/{playerMaxHealth}\n{playerWeapon}: {playerWeaponPower} | {playerAmmunition} / {playerMaxAmmunition}\n{playerArmor}: {playerArmorPower}'
  ],
  itemweapon: [
    'You have found a {itemName}[{itemPower} | {itemCapacity}]. Use player.touch() to equip it. Use player.info() to view your current equipment.'
  ],
  itemarmor: [
    'You have found a {itemName}[{itemPower}]. Use player.touch() to equip it. Use player.info() to view your current equipment.'
  ],
  touchnothing: [
    'There is nothing to touch.'
  ],
  toucharmor: [
    'You have now equipped a {itemName}[{itemPower}] as your armor.'
  ],
  touchweapon: [
    'You have now equipped a {itemName}[{itemPower} | {itemCapacity}] as your weapon.'
  ]
}
export default Library;
