//Global Variables

    //An array to hold the avaliable words for hangman
var listOfWords = ["mozzarella", "dough", "pizza", "pepperoni", "margherita", "knead", "neapolitan", "tomatoes", "sauce", "deep-dish", "flour", "hawaiian", "toppings"];
var randomWord = "";
var wordLetters = [];
var wordBlanks = 0;
var blankAndRightLetters = [];
var wrongGuesses = [];
    //Win and Lose counter, along with the number of guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;


//Functions
function gameStart () {
    randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    individualLetters = randomWord.split("");
    wordBlanks = individualLetters.length;

    //Resets game
    wrongGuesses = [];
    guessesLeft = 10;
    blankAndRightLetters = [];



    //allows for the right number of blanks
    for (var i=0; i<wordBlanks; i++){
        blankAndRightLetters.push("_");
    }
    
    //Populates the word to guess with the correct number of blank spaces
    document.getElementById("wordToGuess").innerHTML = blankAndRightLetters.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lossCounter").innerHTML = losses;
    document.getElementById("winCounter").innerHTML = wins;


    console.log(randomWord);
    console.log(individualLetters);
    console.log(wordBlanks);
    console.log(blankAndRightLetters);
}
//check letter exist in word
function checkLetters (letter) {
// check if letter exists in code at all

var isLetterInWord = false;
for (var i=0; i<wordBlanks; i++){
    if (randomWord[i] == letter){
        isLetterInWord = true;
        // alert("letter");
    }
}
//check where in the word letter exist - populate blank and success array
if(isLetterInWord) {
  for (var i=0; i<wordBlanks; i++) {
    if(randomWord[i] == letter) {
        blankAndRightLetters[i] = letter;
        }
    }  
}

//letter wasnt found
else {
    wrongGuesses.push(letter);
    guessesLeft--
}

console.log(blankAndRightLetters);


}

function roundComplete() {
    console.log("Win Count: " + wins + " | Loss Count: " + losses + " | Guesses Left" + guessesLeft);
    //Update the HTML to add correct letters to the spaces
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blankAndRightLetters.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
    
    //check if user won
    if (individualLetters.toString() == blankAndRightLetters.toString()){
        wins++
        alert("You Won!");
        document.getElementById("winCounter").innerHTML = wins;
        gameStart();
    }
    //check if user lost
    else if(guessesLeft == 0) {
        losses++
        alert("You Lost!");
        document.getElementById("lossCounter").innerHTML = losses;
        gameStart();
    }
}


//Main Process
//Initates the code


gameStart();
    document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
// debugging
    console.log(letterGuessed);
}