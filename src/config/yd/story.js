const Story = {
  tiles: [
    ,
    {
      name: 'garbage dumb',
      x: 2,
      y: -2,
      happening: 'interaction',
      options: "You`ve found a flashdrive, it has the word 'totally' written on it."
    },
    {
      name: 'garbage dumb',
      x: 2,
      y: -6,
      happening: 'interaction',
      options: "You`ve found a flashdrive, it has the word 'not' written on it."
    },
    {
      name: 'garbage dumb',
      x: 0,
      y: 1,
      happening: 'interaction',
      options: "You`ve found a flashdrive, it has the word 'midget' written on it."
    },
    {
      name: 'garbage dumb',
      x: -4,
      y: 0,
      happening: 'interaction',
      options: "You`ve found a flashdrive, it has the word 'porn' written on it."
    }
  ],
  chapters: [
    {
      title: 'Get some tools',
      prolog: "After the site went down, an AI, only known as 'gunter.js', has escaped from it's Docker container. It is now protecting the server room with hacked Vroombas (and a Sumsang smart fridge)! Walk down to Cornad and get yourself some tools!",
      epilog: 'You pay at self check-out and remember to bring the recipe. You are now ready to face any challenge to come!',
      description: 'Go to your local Cornad store and pick up some guns.',
      xp: 20,
      goal: {x: 3, y: -2},
      tiles: [
        {
          name: 'Cornad',
          x: 3,
          y: -2,
          happening: 'item',
          options: [
            'shotgun','assault rifle','revolver'
          ]
        }
      ]
    },
    {
      title: "Where's Starto?",
      prolog: 'To find out where the server is actually located you need to get some internet! You decide to visit an Internet cafe.',
      epilog: 'You sit down with a freshly brewed coffee. In the isle next to you a loud discussion about the best Legend of the Liga champion builds up.',
      description: 'Find the nearest Internet cafe.',
      xp: 50,
      goal: {x: 2, y: 0},
      tiles: [
        {
          name: 'Cornad',
          x: 3,
          y: -2,
          happening: null
        },
        {
          name: '3W Cafe',
          x: 2,
          y: 0,
          happening: null
        }
      ]
    },
    {
      title: 'The real champion',
      prolog: 'A pretty nasty looking dude is absolutely sure, that Teemo is the only valid anwser. You, a Master Yi main, beg to differ. The two of you take the fight outside. You are pretty sure he is just as incompetent on the street as he is on the keyboard.',
      epilog: 'After smashing that dudes face and spreading some more of the everlasting glory of being a Yi main you return to your place. After a quick Bing search you find the address of the Starto headquarter.',
      description: 'Beat the stupid dude from the Internet cafe.',
      xp: 50,
      goal: {x: 3, y: 0},
      tiles: [
        {
          name: 'Cornad',
          x: 3,
          y: -2,
          happening: null
        },
        {
          name: '3W Cafe',
          x: 2,
          y: 0,
          happening: null
        },
        {
          name: 'parking lot',
          x: 3,
          y: 0,
          happening: 'encounter',
          options: ['stupid dude from the Internet cafe']
        }
      ]
    },
    {
      title: 'The Starto HQ',
      prolog: 'As updating the PHP version from remote failed you will need physical access to the actual server.',
      epilog: "After your narrow win over the Starto Firewall you enter the HQ from the front door. The desk lady is in awe over your manly behaviour. You give here a wink, whispering 'I`m in' before heading to the elevator. You update the PHP version manually and reload the page. But nothing happens!",
      description: 'Reach the Starto HQ and get past the (actual) Firewall.',
      xp: 50,
      goal: {x: 2, y: -7},
      tiles: [
        {
          name: 'Cornad',
          x: 3,
          y: -2,
          happening: null
        },
        {
          name: '3W Cafe',
          x: 2,
          y: 0,
          happening: null
        },
        {
          name: 'parking lot',
          x: 3,
          y: 0,
          happening: null
        },
        {
          name: 'Starto HQ',
          x: 2,
          y: -7,
          happening: 'encounter',
          options: ['Sumsang smart fridge']
        }
      ]
    },
    {
      title: 'Redis the new black',
      prolog: "There is only one possible answer to this: Redis! You flush the cash, but still. Even after deinstalling the plug-in the site remains unchanged. It seems that Redis has learnt to cash itself. After having a quick look at the docs of 'gunter.js' online you realise that this was his plan all along! But you quickly come up with a back-up plan.",
      epilog: "You rip out the old RAM and quickly chuck in a new one. That was to fast, even for Redis. You press F5 nervously and rapidly, when a broken voice comes out of the speaker above the counter: 'Hallo, ich bin der Gunter.'",
      description: 'Head back to Cornad and get some new RAM.',
      xp: 100,
      goal: {x: 3, y: -2},
      tiles: [
        {
          name: 'Cornad',
          x: 3,
          y: -2,
          happening: 'item',
          options: ['sawed-off shotgun','heavy armor']
        },
        {
          name: 'military zone',
          x: 3,
          y: -1,
          happening: 'item',
          options: ['exosuite']
        },
        {
          name: '3W Cafe',
          x: 2,
          y: 0,
          happening: null
        },
        {
          name: 'parking lot',
          x: 3,
          y: 0,
          happening: null
        },
        {
          name: 'Starto HQ',
          x: 2,
          y: -7,
          happening: null
        }
      ]
    },
    {
      title: 'Gunter',
      prolog: 'Damn it, gunter.js is still running in the background. You see no other option but to destroy the mainframe itself.',
      epilog: 'After an insane fight with the transformable Tesla Model G, that gunter.js hacked into, you sink to the ground, covered in nothing but the pride of having saved humanity once again.',
      description: 'Head over to Startos Mainframe and delete gunter.js.',
      xp: 1000,
      goal: {x: 2, y: -7},
      tiles: [
        {
          name: 'Cornad',
          x: 3,
          y: -2,
          happening: 'item',
          options: ['exosuite','railgun']
        },
        {
          name: '3W Cafe',
          x: 2,
          y: 0,
          happening: null
        },
        {
          name: 'parking lot',
          x: 3,
          y: 0,
          happening: null
        },
        {
          name: 'ultra secret lab',
          x: 3,
          y: -7,
          happening: 'item',
          options: ['railgun']
        },
        {
          name: 'Starto HQ',
          x: 2,
          y: -7,
          happening: 'encounter',
          options: ['Tesla Model G that was hacked by gunter.js']
        }
      ]
    }
  ]
}
export default Story;
