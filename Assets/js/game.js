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
gameStart();
function gameStart () {
    randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    individualLetters = randomWord.split("");
    wordBlanks = individualLetters.length;


    //allows for the right number of blanks
    for (var i=0; i<wordBlanks; i++){
        blankAndRightLetters.push("_");
    }
    console.log(randomWord);
    console.log(individualLetters);
    console.log(wordBlanks);
    console.log(blankAndRightLetters);

    //Resets game
    wrongGuesses = [];
    guessesLeft = 10;
    blankAndRightLetters = [];
    
    //Populates the word to guess with the correct number of blank spaces
    document.getElementById("word").innerHTML = blankAndRightLetters.join(" ");

}
