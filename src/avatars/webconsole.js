import {Point, Direction, Information} from '../tools/utils.js';

/* This avatar is used to call functions on the player through the console.
 * The avatar is stored into the player variable
 * and checks for correct input as well as writes the returns to the console.
 */
export default function Webconsole(main){
  this.move = function(direction){
    return main.handle("move",[direction]);
  }
  this.look = function(direction){
    return main.handle("look",[direction]);
  }
  this.touch = function(){
    return main.handle('touch');
  }
  this.dodge = function(){
    return main.handle("dodge");
  }
  this.shoot = function(){
    return main.handle("shoot");
  }
  this.reload = function(){
    return main.handle("reload");
  }
  this.help = function(){
    return 'Use player.move(N,E,S,W) to move.\nUse player.look(N,E,S,W) to look around.\nUse player.shoot(), player.reload() and player.dodge() to fight in combat.\nUse player.task() to find out more about your current task.\nUse player.info() to view your current status and equipment.\nUse player.touch() to interact with your enviroment whenever possible.';
  }
  this.task = function(){
    return main.handle('task');
  }
  this.info = function(){
    return main.handle('info');
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
