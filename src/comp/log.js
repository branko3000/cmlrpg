/* LOG
 * The log is storing all happenings and can give a certain happening back.
 */
export default function Log(){
  /*Stores all entrys*/
  this.entrys = [];
  /* makes an entry and returns the newly made one */
  this.makeEntry = function(entry){
    this.entrys.push(entry);
    return this.giveEntry();
  }
  /*gives back a certain entry, countig from newest to oldest, so 0 is the newest entry and so on*/
  this.giveEntry = function(pos){
    let _pos = pos;
    if(!_pos){ //defaults pos to 0 when no parameter is passed
      _pos = 0;
    }
    return this.entrys[this.entrys.length - (_pos + 1)];
  }
}
