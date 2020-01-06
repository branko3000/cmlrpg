const Story = [
  {
    title: 'The potion',
    prolog: 'To fight the goblin leader you will need a special toxin. Only then will you be able to hurt with more then just words.',
    epilog: 'The witch hut disappears right in front of you. The witch gave you a small, surprisingly small bottle, containing a shimmering green solution. Will this be enough to hurt the goblin leader?',
    description: 'Go to the old witch hut to receive a AGT (Anti-Goblin-Toxin).',
    xp: 20,
    goal: {x:1,y:1},
    tiles: [
      {
        name: 'witch hut',
        happening: null,
        x: 1,
        y: 1
      },
      {
        name: 'kings castle',
        happening: null,
        x: 0,
        y: 0
      }
    ]
  },
  {
    title: 'The cave',
    prolog: 'After you have recieved the AGT you turn to pay the goblin leader a visit.',
    epilog: 'The goblin leader is now nothing more but a bag of meat, bones and a broken ego.',
    description: 'Find the goblin cave and fight the goblin leader.',
    xp: 50,
    goal: {x:1,y:-1},
    tiles: [
      {
        name: 'goblin cave',
        happening: 'encounter',
        enemys: ['goblin leader'],
        x: 1,
        y: -1
      },
      {
        name: 'kings castle',
        happening: null,
        x: 0,
        y: 0
      }
    ]
  },
  {
    title: 'The return',
    prolog: 'After you have showed the goblins, who is boss you return to the castle to ask the kings daughter out.',
    epilog: 'He sinks to the ground, looks to his daughter and a tear rolls down his face, as he is aware you wont have mercy on her either.',
    description: 'Return to the kings castle.',
    xp: 50,
    goal: {x:0,y:0},
    tiles: [
      {
        name: 'goblin cave',
        happening: null,
        x: 1,
        y: -1
      },
      {
        name: 'kings castle',
        happening: 'encounter',
        enemys: ['King Henry'],
        x: 0,
        y: 0
      }
    ]
  }
]
export default Story;
