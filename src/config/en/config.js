import Tiles from "./tiles.js"; //imports the object which holds all tiles for the map
import Library from './library.js'; //imports the object which holds all strings for the library
import Enemys from "./enemys.js"; //imports the object that holds all enemyobject for combat

const Config = { //creates a config object which will store all of the imported fields and will be passed to the main
  language: "en",
  tiles: Tiles,
  library: Library,
  enemys: Enemys
}
export default Config;
