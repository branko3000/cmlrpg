import Main from './comp/main.js'; //imports the main object
import Config from './config/yd/en/config.js'; //load the config for your language
import Avatar from './avatars/webconsole.js'; //load the avatar for your enviroment

require("babel-core/register");
require("babel-polyfill");


window.CMLRPG = function(){ //creating a new Object of this kind will start the RPG in the command line or whatever avatar you choose
  new Avatar(new Main(Config)); //will call the constructor of the avatar, passing a new main object which will have the config passed to it
}
