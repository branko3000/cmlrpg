import Tiles from "./tiles.js"; //imports the object which holds all tiles for the map
import Library from './library.js'; //imports the object which holds all strings for the library
import Enemys from "./enemys.js"; //imports the object that holds all enemyobject for combat
import Player from "./player.js"; //imports the object that holds all enemyobject for combat
import Story from "./story.js";
import Items from './items.js';

const Config = { //creates a config object which will store all of the imported fields and will be passed to the main
  language: "en",
  introduction: "The year 2030. You have been recently hired by a company called yes!please, which is specialised in developing Turing test websites to keep AI's at bay. One of their older sites is currently down, due to the server still running PHP 7.1. You are tasked with getting it back on track!\nAn enticing bonus will be given, when you recover the CEO`s long lost flashdrives (containg his important 'documents' he says) on the way.\nUse player.help() for more information.",
  endcredits: "You return home to have some sleep. You arive at the yes!please office just in time for the daily stand up. As you tell them about the adventurous task you had to complete yesterday a silent but dedicated 'Ahem' comes from behind you. It is Yoshi telling you that there is a Plug-In for that.\nYou thought was fun? Wanna do that all day? Then drop us a line at jobs@yesdevs.com and add the content of the CEO`s flashdrives as a subject. We hope to hear from you soon!",
  story: Story,
  player: Player,
  tiles: Tiles,
  library: Library,
  enemys: Enemys,
  items: Items
}

export default Config;
