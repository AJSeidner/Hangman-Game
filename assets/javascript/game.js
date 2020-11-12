//global variables


//array of word options
var hangmanWords = ["goliath", "gargoyles", "xanatos", "demona", "brooklyn", "lexington", "broadway", "elisa", "bronx", "hudson"];

//following global variables will be updated based off gameplay, initial setting defined.
//word that will be chosen from array
var gameWord = "";
//array for letter of game word
var lettersGameWord = [];
//number of blank spaces shown based on lettersGameWord
var numBlanks = 0;
//actual array for blanks and correct letter guesses
var blanksLetters = [];
//array for incorrect guesses
var wrongGuesses = [];

//counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


//game functions

//startGame()
//function for starting/re-starting game

function startGame() {
    // reset numGuesses
    numGuesses = 9;
    // choosing gameWords
    gameWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    // break game word down into individual letters using .split method
    lettersGameWord = gameWord.split("");
    // getting number of blanks from by counting letters using .length
    numBlanks = lettersGameWord.length;
    // test
    console.log(gameWord);

    //reset for blanksLetters array for each game
    blanksLetters = [];
    //reset for wrongGuesses array for each game
    wrongGuesses = [];

    //we push '_' to blanksLetters array based off numBlanks length

    for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_");
    }
    //test to see if initial push of "_" works
    console.log(blanksLetters);
};


// code to run game

startGame();
