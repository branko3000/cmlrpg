import {Point, Direction, Information} from '../tools/utils.js';

/* This avatar is used to call functions on the player through the console.
 * The avatar is stored into the player variable
 * and checks for correct input as well as writes the returns to the console.
 */
export default function Webconsole(main){
  this.move = function(direction){
    let line = main.handle("move",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.look = function(direction){
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.touch = function(){
    return main.handle('touch');
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.dodge = function(){
    return main.handle("dodge");
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.shoot = function(){
    return main.handle("shoot");
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.reload = function(){
    return main.handle("reload");
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.help = function(){
    return 'Use player.move(N,E,S,W) to move.\nUse player.look(N,E,S,W) to look around.\nUse player.shoot(), player.reload() and player.dodge() to fight in combat.\nUse player.task() to find out more about your current task.\nUse player.info() to view your current status and equipment.\nUse player.touch() to interact with your enviroment whenever possible.';
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.task = function(){
    return main.handle('task');
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.info = function(){
    return main.handle('info');
    let line = main.handle("look",[direction]);
    let msg = new SpeechSynthesisUtterance(line);
    window.speechSynthesis.speak(msg);
    return line;
  }
  this.log = function(){
    return main.handle('log');
  }
  /* These varibales are used to enable input of
   * direction commands without string escape.
   * Player.move(S) instead of player.move("S")
   */
  window.N = window.n = window.North = window.north = new Direction("N");
  window.E = window.O = window.o = window.East = window.east = new Direction("E");
  window.S = window.s = window.South = window.south = new Direction("S");
  window.W = window.w = window.West = window.west = new Direction("W");

   window.player = this;
   window.p = window.player; //shorthand
     console.log(main.giveConfigValue('introduction')); //writes the introduction
}
