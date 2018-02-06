//An array to hold the avaliable words for hangman
    var listOfWords = ["mozzarella", "dough", "pizza", "pepperoni", "margherita", "knead", "neapolitan", "tomatoes", "sauce", "flour", "hawaiian", "toppings"];
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

//Allows for the right number of blanks
    for (var i=0; i<wordBlanks; i++){
        blankAndRightLetters.push("_");
    }
    
//Populates the word to guess with the correct number of blank spaces
    document.getElementById("wordToGuess").innerHTML = blankAndRightLetters.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lossCounter").innerHTML = losses;
    document.getElementById("winCounter").innerHTML = wins;

    //Debugging in console
    console.log(randomWord);
    console.log(individualLetters);
    console.log(wordBlanks);
    console.log(blankAndRightLetters);
}

//Check letter exist in word
    function checkLetters (letter) {
// Check if letter exists in code at all

    var isLetterInWord = false;
    for (var i=0; i<wordBlanks; i++){
    if (randomWord[i] == letter){
        isLetterInWord = true;
        // alert("letter");
    }
}
//Check where in the word letter exist - Populate blank and successes array
if(isLetterInWord) {
  for (var i=0; i<wordBlanks; i++) {
    if(randomWord[i] == letter) {
        blankAndRightLetters[i] = letter;
        }
    }  
}
//Letter wasnt found
else {
    wrongGuesses.push(letter);
    guessesLeft--
}
//Debugging
console.log(blankAndRightLetters);
}
//Function for completing the round
function roundComplete() {
    console.log("Win Count: " + wins + " | Loss Count: " + losses + " | Guesses Left" + guessesLeft);
    //Update the HTML to add correct letters to the spaces
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blankAndRightLetters.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
//Check if user won - Add to wins - Wait a second, show alert, and reset game
    if (individualLetters.toString() == blankAndRightLetters.toString()){
        wins++
        document.getElementById("winCounter").innerHTML = wins;
        setTimeout(function(){gameStart();}, 1000);
        setTimeout(function(){alert("You Won!");;}, 1000);
        
    }
//Check if user lost - wait a second, show alert, and reset game
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
//Debugging
    console.log(letterGuessed);
}