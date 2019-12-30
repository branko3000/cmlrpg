/* The player is stored in a variable and is
 * the only entry point to the code.
 * A set of functions is called from the console.
 * All functions, that cannot be called from the console are
 * are marked with a "_" prefix.
 * A avatar object is used to make only the desired functions accessible.
 * The avatar also checks validation and gives back the returns into console.
 */
export default function Player(position,health){
    /* Fields to store information about the player */
    this.position = position;
    this.maxHealth = health;
    this.currentHealth = this.maxHealth;
    this.currentAmmunition = 0;
    this.weapon = {
      name: 'flint lock rifle',
      power: 5,
      deviance: 2,
      capacity: 3,
      sounds: [
        'makes Peng!',
        'does a loud Bauz!',
        'does Ssst Bumm!'
      ]
    }
    this.armor = {
      name: 'light plate armor',
      power: 4,
      sounds: [
        'lets loose a silent Zeeng',
        'aches'
      ]
    }
    /*function*/
    this.move = function(direction){
        this.position.change(direction);
    }
    this.look = function(direction){
        //no statchanges
    }
}
