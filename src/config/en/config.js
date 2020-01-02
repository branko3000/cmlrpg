import Tiles from "./tiles.js"; //imports the object which holds all tiles for the map
import Library from './library.js'; //imports the object which holds all strings for the library
import Enemys from "./enemys.js"; //imports the object that holds all enemyobject for combat
import Player from "./player.js"; //imports the object that holds all enemyobject for combat
import Story from "./story.js";

const Config = { //creates a config object which will store all of the imported fields and will be passed to the main
  language: "en",
  introduction: 'Here you could read some fancy introduction. Use player.help() for more information.',
  endcredits: 'So this is how the story ends.\nMade with CMLRPG',
  story: Story,
  player: Player,
  tiles: Tiles,
  library: Library,
  enemys: Enemys
}
export default Config;
