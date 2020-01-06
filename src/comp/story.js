export default function Story(story){
  this.chapters = story;
  this.currentChapter = 0; //has to be 1, otherwise 0 will be interpreted as false when asking if(this.currentChapter)
  this.giveSummary = function(position){ //position has to be passed to generate directions
    if(this.currentChapter < this.chapters.length){ //when the current chapter is not a valid number, false for instance
      let chapter = this.chapters[this.currentChapter];
      return {taskProlog: chapter.prolog, taskEpilog: chapter.epilog, taskNumber: (this.currentChapter+1), taskTitle: chapter.title, taskDescription: chapter.description, taskDirections: this.makeDirections(position, chapter.goal), taskXP: chapter.xp};
    }
    else{
      return false;
    }
  }
  this.give = function(property){
    return this.chapters[this.currentChapter][property];
  }
  this.nextChapter = function(position){ //needs position for generating directions
    this.currentChapter++;
    return this.giveSummary((position))
  }
  this.makeDirections = function(from,to){
    let direction = '';
    let _x = to.x - from.x;
    let _y = to.y - from.y;
    _y < 0 ? direction += ('N: ' + Math.abs(_y)) : direction += ('S: ' + Math.abs(_y));
    direction += ' ';
    _x < 0 ? direction += ('W: ' + Math.abs(_x)) : direction += ('E: ' + Math.abs(_x));
    return direction;
  }
  this.giveTile = function(position){
    for(let tile in this.chapters[this.currentChapter].tiles){
      let _tile = this.chapters[this.currentChapter].tiles[tile];
      if(_tile.x == position.x && _tile.y == position.y){
        return _tile;
      }
    }
    return false;
  }
}
