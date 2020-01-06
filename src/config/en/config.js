import Tiles from "./tiles.js"; //imports the object which holds all tiles for the map
import Library from './library.js'; //imports the object which holds all strings for the library
import Enemys from "./enemys.js"; //imports the object that holds all enemyobject for combat
import Player from "./player.js"; //imports the object that holds all enemyobject for combat
import Story from "./story.js";

const Config = { //creates a config object which will store all of the imported fields and will be passed to the main
  language: "en",
  introduction: 'To show yourself worthy of marrying the (currently hungover) teenage daughter of King Henry the Last, you are tasked with clearing the forrests around the kings castle of goblins. Use player.help() for more information.',
  endcredits: 'After you have pretty much wrecked the old man, that was so delusional to call himself king you pick up his still comatose daughter from the bed, which is conveniently placed right next to the throne. She is drowsy and salive is dripping on her pillow. You give her a kiss of true love on her slightly open mouth. Shortly after you are charged with sexual assault, as she did not consent to the kiss.\nMade with CMLRPG',
  story: Story,
  player: Player,
  tiles: Tiles,
  library: Library,
  enemys: Enemys
}
export default Config;
