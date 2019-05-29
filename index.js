// bring in inquirer & Word.js
var inquirer = require("inquirer");
var word = require("./Word.js")

// GLOBAL VARIABLES
// ===============================================================================
// possible words to guess
var wordbank = ["freddy","jason", "redrum", "xenomorph", "cenobite", "necronomicon", "tuttifrutti", "elvira", "romero", "pazuzu", "regan", "witch"];
// chances to complete the word
var guesses  = 6;
// counts completed words
var wins = 0;


// MAIN PROCESSES
// ===============================================================================



// FUNCTIONS/SECONDARY PROCESSES
// ===============================================================================
// select random word
var currentWord = wordbank[Math.floor(Math.random() * wordbank.length)];
console.log(currentWord);
// run current word through constructor
