// bring in Letter.js file
var Letter = require("./Letter.js")

function Word(word) {
    // current word
    this.word = word;
    // array of new letter objects representing letters of current word
    this.letterObjArr = [];
    // function to fill array w/ letters of current word
    // this.arrFiller = function() {
    for (let i = 0; i < word.length; i++) {
        var letter = new Letter(word[i]);
        this.letterObjArr.push(letter);
    };
    // };

    // display word to guess
    this.log = function() {
        // variable to log out the word w/ either letters or _ depending if user guesses correctly
        wordLog = "";
        // loop to display word
        for (let i = 0; i < this.letterObjArr.length; i++) {
            // add the items in the array back into a string w/ a space for the dividing line (see below)
            wordLog += this.letterObjArr[i] + " ";
        }
        console.log(wordLog + "\n======================================================\n");
    };

    // function that takes in user guess as argument and calls Letter's guess function
    this.userResp = function(input) {
        for (let i = 0; i < array.length; i++) {
            // call function from letter to update crctGuess thus updating display of the word
            this.letterObjArr[i].letterChecker(input);
            
        }
    };
};

// var test = new Word(test);
// console.log(test);

module.exports = Word;