// constructor that displays correctly guessed characters & placeholders
function Letter(char) {
    // stores characters
    this.char = char;
    // stores if letter guessed correctly
    this.crctGuess = false;
    // function that display letter or placeholder depending on crctGuess
    this.displayChar = function () {
        if (this.crctGuess === false) {
            return "_";
        } else {
            return this.char;
        }
    };
    // function that takes user guess as argument, checks against correct letters, &  updates crctGuess to true if correct
    this.letterChecker = function (guess) {
        console.log("guess:", guess);
        console.log("this.char:", this.char)
        if (guess === this.char) {
            this.crctGuess = true;
        } else {
            this.crctGuess = false;
        };
        
        console.log(guess)
    };
};

module.exports = Letter;

// testing
var test = new Letter("t");
console.log(test);
test.letterChecker("f");
console.log(test);
test.letterChecker("t");
console.log(test);