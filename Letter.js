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
        if (guess === this.char) {
            this.crctGuess = true;
        } else {
            this.crctGuess = false;
        }
    };
};

module.exports = Letter;