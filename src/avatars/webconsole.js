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
  this.dodge = function(){
    return main.handle("dodge");
  }
  this.shoot = function(){
    return main.handle("shoot");
  }
  this.reload = function(){
    return main.handle("reload");
  }
  /* These varibales are used to enable input of
   * direction commands without string escape.
   * Player.move(S) instead of player.move("S")
   */
  window.N = window.n = window.North = window.north = new Direction("N");
  window.E = window.O = window.o = window.East = window.east = new Direction("E");
  window.S = window.s = window.South = window.south = new Direction("S");
  window.W = window.w = window.West = window.west = new Direction("W");
  /* These varibales are used to enable input of
   * asnwer commands without string escape.
   * Player.say(Y) instead of player.say("Y")
   */
   window.Y = window.J = window.y = window.j = window.Yes = window.Ja = window.yes = window.ja = true;
   window.No = window.Nein = window.no = window.nein = false;

   window.player = this;
   window.p = window.player; //shorthand
}
