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
  if(x instanceof Point){
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
  this.giveString = function(type,parameters){
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
    if(parameters){
      string = this.replacePlaceholders(string,parameters);
    }
    return string;
  }
  this.selectString = function(array){
    return array[Math.floor(Math.random() * array.length)];
  }
  this.replacePlaceholders = function(string,parameters){
    let _string = string;
    let keys = Object.keys(parameters);
    for(let i = 0; i < keys.length; i++){
    let newString = _string.replace('{' + keys[i] + '}',parameters[keys[i]]);
      _string = newString;
    }
    return _string;
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
  }
}
