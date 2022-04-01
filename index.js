var supervillains = require('supervillains');
 
supervillains.all;
//=> ['Abattoir', 'Able Crown', …]
 
var mysupervillain = supervillains.random();
//=> 'Mud Pack'


var superheroes = require('superheroes');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var superheroesname = superheroes.random();
//=> 'Spider-Ham'
console.log("mysupervillain: " + mysupervillain);
console.log("superheroes: " + superheroesname);