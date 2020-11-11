//global variables
//arrays and variables for holding data

var wordOptions = ["tiny", "doug", "rugrats"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var letterGuessed = "";

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//functions

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
    lettersInWord = selectedWord.length;
    numBlanks = lettersInWord.length;

    guessesleft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanksAndSuccesses

    for (var i = 0; i<numBlanks; i++){
        blanksAndSuccesses[i].push("_");
    }
document.getElementById("gameWord").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("guesses").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = winCount;
document.getElementById("losses").innerHTML = lossCount;
}

function checkLetters(letter){

    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
            console.log("yay");
        }
    }

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }

    else {
        wrongLetters.push(letter);
        guessesLeft--;
        console.log("boo");
        }
    }
}

function roundComplete(){

    document.getElementById("guesses").innerHTML = guessesLeft;
    document.getElementById("gameWord").innerHTML =blanksAndSuccesses.toString();
    document.getElementById("letterGuessed").innerHTML =wrongLetters.toString();
    if (lettersInWord.toString() == blanksAndSuccesses.toString()){
        winCount++;
        alert("You Won!");

        document.getElementById("wins").innerHTML =winCount;

        startGame();
    }
    else if (guessesLeft== 0) {
        lossCount++;
        alert("You lost!");
        document.getElementById("losses").innerHTML =lossCount;

        startGame();

    }

}



startGame();

document.onkeyup = function(event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    console.log(letterGuessed);
}


