/* A direction stores a change of coordinates.
 * it can be created using a string or two ints.
 */
export function Direction(directionStringorX,y){
    this.name = "";
    this.x = 0; //fallback and declaration
    this.y = 0; //fallback and declaration
    if(y){ //when a second parameter is passed
        if(Number(directionStringorX) && Number(y)){ //when both parameters are valid numbers
            this.x = directionStringorX;
            this.y = y;
        }
    }
    else{ //when only one parameter is passed
        switch(directionStringorX){
            case "N":
                this.name = "north";
                this.y = -1;
                break;
            case "E":
                this.name = "east";
                this.x = 1;
                break;
            case "S":
                this.name = "south";
                this.y = 1;
                break;
            case "W":
                this.name = "west";
                this.x = -1;
                break;
        }
    }
}
/* The point is used to store all kinds of grid data.
 * A direction can be passed to change()
 * to change a point by a direction.
 * constructor can be called with another point instead of x to create a duplicate of it.
 */
export function Point(x,y){
  if(x instanceof Object){
    this.x = x.x;
    this.y = x.y;
  }
  else{
    this.x = x;
    this.y = y;
  }
  this.change = function(direction,multiplier){
    if(!multiplier){
      multiplier = 1;
    }
    if(direction instanceof Direction){
        this.x += (direction.x * multiplier);
        this.y += (direction.y * multiplier);
    }
  }
  this.equals = function(point){
      return (this.x == point.x && this.y == point.y);
  }
}
/* A information is used to pass text based information around
 * @param type - string: the type of this information, what is it about?
 * @param infos - Array: a array of all variables that should be in this information
 */
export function Information(type,infos){
  this.type = type;
  this.infos = infos;
}

export function Library(books){
  this.books = books;
  this.informations = {};
  this.addInformation = function(object){
    this.informations = Finder.addKeysFromTo(object,this.informations);
  }
  this.giveString = function(type){
    let string;
    if(!this.books[type]){ //when there is no parameter for this
      string ="There are no words to express what just happened!"
    }
    else if(this.books[type] instanceof Array){ //when there is a set of strings
      string = this.selectString(this.books[type]);
    }
    else{ //whe there is only one string
      string = this.books[type];
    }
    string = this.replacePlaceholders(string);
    string = this.replaceOptions(string);
    string = this.replaceEmojis(string);
    return string;
  }
  this.selectString = function(array){
    return array[Math.floor(Math.random() * array.length)];
  }
  this.replaceEmojis = function(string){
    let amount = (string.split('{:').length - 1);
    while(amount > 0){
      let start = string.indexOf('{:');
      let end = string.indexOf('}',start);
      let substring = string.substring(start,end+1);
      let code = substring.substring(substring.indexOf(':') + 1,substring.indexOf('}'));
      let emoji = String.fromCodePoint('0x' + code);
      string = string.replace(substring,emoji);
      amount--;
    }
    return string;
  }
  this.replacePlaceholders = function(string){
    let informations = Object.keys(this.informations);
    for(let information of informations){
      string = string.replace('{' + information + '}',this.informations[information]);
    }
    return string;
  }
  this.replaceOptions = function(string){
    let informations = Object.keys(this.informations);
    for(let information of informations){
      let key = '[' + information + ':';
      let amount = (string.split(key).length - 1);
      while(amount > 0){
        let start = string.indexOf(key);
        let end = string.indexOf(']',start);
        let substring = string.substring(start,end+1);
        let optionslist = substring.substring(substring.indexOf(':') + 1,substring.indexOf(']'));
        let options = optionslist.split(',');
        let selected = null;
        for(let option of options){
          if(option.includes(this.informations[information] + '->')){
            selected = option.substring(option.indexOf('->') + 2);
          }
        }
        if(!selected){
          selected = options[0].substring(options[0].indexOf('->') + 2);
        }
        string = string.replace(substring,selected);
        amount--;
      }
    }
    return string;
  }
}

export let Finder = {
  /* Will return a object with a given value for a certain property from an array that contains objects */
  getObjectInArray: function(array,property,value){
    for(let entry = 0; entry < array.length; entry++){
      if(array[entry][property] == value){
        return array[entry];
      }
    }
    return null;
  },
  /* Will return a random entry from an array*/
  getRandomEntryInArray: function(array){
    return array[Math.floor(Math.random() * array.length)];
  },
  /* Will add the keys of the one object to the other and returns the object, the keys were added to*/
  addKeysFromTo: function(from,to){
    let keys = Object.keys(from);
    for(let key of keys){
      to[key] = from[key];
    }
    return to;
  },
  getEntryFromChancedObject: function(object){
    let keys = Object.keys(object).map(Number);
    let total = keys.reduce((pv, cv) => pv + cv, 0);
    let position = Math.round(Math.random() * total);
    let entry = 0;
    let i = -1;
    while(entry <= position){
      i++;
      entry += keys[i];
    }
    if(object[keys[i]]){
      return object[keys[i]];
    }
    else{
      return object[keys[0]];
    }
  }
}
