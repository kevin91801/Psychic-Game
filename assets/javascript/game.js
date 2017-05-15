var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var GuessesLeft = 9;


document.onkeyup = function(event) {

var userGuess = event.key;

var guesses = userGuess;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if ((userGuess == computerChoices)) {
	wins++;
}

else if ((userGuess != computerChoices)) {
	GuessesLeft--;

// else if ((GuessesLeft = 0)) {
// 	losses++;
// }
}

var html = "<p>Guess what letter I'm thinking of</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>Guesses Left: " + GuessesLeft + "</p>" +
"<p>Your Guesses so far: " + guesses + "</p>";

document.querySelector("#game").innerHTML = html;
}