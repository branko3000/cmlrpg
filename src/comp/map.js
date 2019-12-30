import {Point, Direction, Information} from '../tools/utils.js';
import MersenneTwister from '../tools/mersenneTwister.js';

export default function Map(seed,tiles){
  this.tiles = tiles;
  this.seed = seed;
  this.giveTile = function(point){
    if(point instanceof Point){
      let mult1 = point.x + 100000; //for unique values with negative numbers
      let mult2 = point.y + 100000; //for unique values with negative numbers
      let seed = this.seed * mult1 * mult2;
      let r = new MersenneTwister(seed).random();
      let max = this.tiles.length - 1;
      let i = Math.round(max * r);
      return this.tiles[i];
    }
  }
  this.giveEnemy = function(tile){
    if(tile.enemys){
      return tile.enemys[Math.floor(Math.random(tile.enemys.length))];
    }
    return null;
  }
}
