var computerChoices = ["a", "b", "c", "ɗ", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y"];

var guessesLeft = 9;
// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesleft = 0;
var userPicks = []

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");

// Var function ("start game" looses );
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesleftText.textContent = "guessesleft: " + guessesLeft;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


function reset() {
    guessesLeft = 9;
    wins = 0;
    losses = 0;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userPicks = []
    userChoiceText.textContent = userPicks
    console.log("Please start over");
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();
    guessesLeft--;
    guessesleftText.textContent = guessesLeft
    userPicks.push(userGuess)
    userChoiceText.textContent = userPicks
    // Randomly chooses a choice from the options array. This is the Computer's guess.

    console.log("user guess " + userGuess);
    console.log("computer : " + computerGuess)

    if (userGuess === computerGuess) {
        wins++

        winsText.textContent = "wins: " + wins;
        // alert("you won a point. the new score is" + wins)
        
        console.log(wins);

        // Display the user and computer guesses, and wins/losses/ties.
        // userChoiceText.textContent = "You chose: " + userGuess;
        // // computerChoiceText.textContent = "The computer chose: " + computerGuess;
        // winsText.textContent = "wins:" + wins++;
        // lossesText.textContent = "losses: " + losses;
        // tiesText.textContent = "ties: " + ties;
        reset()
    }

    // alert("reset to =0 once computer ")

    if (guessesLeft === 0) {
        losses++;
        lossesText.textContent = "losses: " + losses;
        reset();
    }
    
};