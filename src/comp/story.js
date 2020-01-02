export default function Story(story){
  this.chapters = story;
  this.currentChapter = 0;
  this.giveSummary = function(position){
    if(this.currentChapter){
      let chapter = this.chapters[this.currentChapter];
      let title = chapter.title;
      let description = chapter.description;
      let goal = this.makeDirections(position, chapter.goal);
      let xp = chapter.xp;
      return (this.currentChapter + 1) + ' - ' + title + ':\n' + description + '\n' + goal + ' | ' + xp + 'XP';
    }
    else{
      return false;
    }
  }
  this.give = function(property){
    return this.chapters[this.currentChapter][property];
  }
  this.nextChapter = function(){
    if(this.currentChapter < (this.chapters.length -1)){
      this.currentChapter++;
    }
    else{
      this.currentChapter = false;
    }
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
