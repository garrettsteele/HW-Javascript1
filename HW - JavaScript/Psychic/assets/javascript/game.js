//Create variables that hold references to the places in the HTML where we want to display things.
var winVar = document.getElementById("wins");
var lossVar = document.getElementById("loss");
var guessLeftVar = document.getElementById("guessLeft");
var missedGuess= document.getElementById("guessTry");
var cletter = document.getElementById("correctLetter");
wins = 0;
losses = 0;
guessesRem = 10;
var missedGuessList = '';

// create a random letter
function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
}
var randomLetter = randLetter();
console.log(randomLetter);


// capture a key event

document.onkeyup = function(event) {
//cletter = '';
var userGuess = event.key;
cletter.textContent = '';
console.log(userGuess)
console.log(checkKey(randomLetter, userGuess));
if (guessesRem > 1) {
    if (checkKey(randomLetter, userGuess)) {
        wins++;
        guessesRem = 10;
        cletter.textContent = "Correct Letter was: " + userGuess;
        randomLetter = randLetter();
        missedGuessList = '';
        
        console.log(randomLetter)
        }
    else {
        if (missedGuessList == '') {
            missedGuessList = missedGuessList + userGuess;
        }
        else {
            missedGuessList = missedGuessList + ', ' + userGuess;
        }
        guessesRem--;
        }
winVar.textContent = "Wins: " + wins;
lossVar.textContent = "Losses: " + losses;
guessLeftVar.textContent = "Guesses Left: " + guessesRem;
missedGuess.textContent = "Guesses Attempted: " + missedGuessList;
}
else {
    losses++;
    guessesRem = 10;
    guessLeft.textContent = "Guesses Left: " + guessesRem;
    cletter.textContent = "Correct Letter was: " + randomLetter;
    missedGuessList = '';
    randomLetter = randLetter();
}
}

function checkKey(key, randomKey) {
    if (key == randomKey) {
        return true;
    }
    else {
        return false;
    }
}


console.log(wins)   