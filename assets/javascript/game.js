//global variables


//array of word options
const hangmanWords = ["goliath", "gargoyles", "xanatos", "demona", "brooklyn", "lexington", "broadway", "elisa", "bronx", "hudson"];

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


//declare function for starting/re-starting game
function startGame() {
    // reset numGuesses
    numGuesses = 9;
    // choosing gameWord
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

    //manipulating DOM
    //updating HTML Guesses Left Element info with numGuesses
    document.getElementById("guesses").innerHTML = numGuesses;
    //updating game-word Element with blanksLetters array
    document.getElementById("game-word").innerHTML = blanksLetters;
    //updating Letters Guessed Element info with wrongGuesses
    document.getElementById("letters-guessed").innerHTML = wrongGuesses;

};

//declare function for checking guesses
function checkGuess(letter) {
    //boolean value for guessCorrect, set to false

    var guessCorrect = false;

    //check to see if letter exists in gameWord
    for (var i = 0; i < gameWord.length; i++) {
        if (gameWord[i] === letter) {
            guessCorrect = true;
        }
    }

    //if letter is in word, index must be determined

    if (guessCorrect) {
        //loop through word
        for (var i = 0; i < gameWord.length; i++) {
            if (gameWord[i] === letter) {

                blanksLetters[i] = letter;
            }
        }
        //test
        console.log(blanksLetters);

    } else {
        //push letter to wrongGuesses array and subtrat from remaining guesses
        wrongGuesses.push(letter);
        numGuesses--;
    }

};

//code needed to update DOM after each keystroke

function turnTaken() {
    //update HTML to reflect the effects of turnTaken
    document.getElementById("guesses").innerHTML = numGuesses;
    document.getElementById("game-word").innerHTML = blanksLetters.join(" ");
    document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(" ");

    //if all letters match

    if (lettersGameWord.toString() === blanksLetters.toString()) {
        //increase win counts
        winCounter++;
        alert("You win!");


        //update win counter element, restart game
        document.getElementById("wins").innerHTML = winCounter;
        startGame();
    } else if (numGuesses === 0) {
        lossCounter++;
        alert("You lose");

        document.getElementById("losses").innerHTML = lossCounter;
        startGame();
    }

}



// code to run game
startGame();

//to get users guess

document.onkeyup = function(event)  {
    //converts input to lowercase
    var letterPressed = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if pressed letter is correct
    checkGuess(letterPressed);
    //need to run turnTaken to update DOM
    turnTaken();

};
