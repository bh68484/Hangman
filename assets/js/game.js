//An array to hold the avaliable words for hangman
const listOfWords = [
  "mozzarella",
  "dough",
  "pizza",
  "pepperoni",
  "margherita",
  "knead",
  "neapolitan",
  "tomatoes",
  "sauce",
  "flour",
  "hawaiian",
  "toppings",
  "marinara",
  "oven",
  "peel",
  "cheese",
  "pesto",
  "garlic",
  "parmesan",
  "cheddar",
  "supreme"
];
let randomWord = "";
let wordLetters = [];
let wordBlanks = 0;
let blankAndRightLetters = [];
let wrongGuesses = [];
//Win and Lose counter, along with the number of guesses left
let wins = 0;
let losses = 0;
let guessesLeft = 10;

//Functions
function gameStart() {
  randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  individualLetters = randomWord.split("");
  wordBlanks = individualLetters.length;

  //Resets game
  wrongGuesses = [];
  guessesLeft = 10;
  blankAndRightLetters = [];
  document.getElementById("wrongGuesses").innerHTML = "";

  //Allows for the right number of blanks
  for (var i = 0; i < wordBlanks; i++) {
    blankAndRightLetters.push("_");
  }

  //Populates the word to guess with the correct number of blank spaces
  document.getElementById("wordToGuess").innerHTML = blankAndRightLetters.join(
    " "
  );
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
function checkLetters(letter) {
  // Check if letter exists in code at all

  var isLetterInWord = false;
  for (var i = 0; i < wordBlanks; i++) {
    if (randomWord[i] == letter) {
      isLetterInWord = true;
      // alert("letter");
    }
  }
  //Check where in the word letter exist - Populate blank and successes array
  if (isLetterInWord) {
    for (var i = 0; i < wordBlanks; i++) {
      if (randomWord[i] == letter) {
        blankAndRightLetters[i] = letter;
      }
    }
  } else {
    //Letter was not found
    wrongGuesses.push(letter);
    guessesLeft--;
  }
  //Debugging
  console.log(blankAndRightLetters);
}
//Function for completing the round
function roundComplete() {
  console.log(
    "Win Count: " +
      wins +
      " | Loss Count: " +
      losses +
      " | Guesses Left: " +
      guessesLeft
  );
  //Update the HTML to add correct letters to the spaces
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blankAndRightLetters.join(
    " "
  );
  document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
  //Check if user won - Add to wins - Wait a second, show alert, and reset game
  if (individualLetters.toString() == blankAndRightLetters.toString()) {
    wins++;
    document.getElementById("winCounter").innerHTML = wins;
    alert("You Won!  The word to guess was " + randomWord);
    gameStart();
  } else if (guessesLeft == 0) {
    //Check if user lost - wait a second, show alert, and reset game
    losses++;
    document.getElementById("lossCounter").innerHTML = losses;
    alert("You Lost!  The word to guess was " + randomWord);
    gameStart();
  }
}
//Main Process
//Initiates the code
gameStart();
document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
  //Debugging
  console.log(letterGuessed);
};
