//Create variables that hold references to the places in the HTML where we want to display things.
var winVar = document.getElementById("wins");
var wordVar = document.getElementById("current-word");
var guessNum = document.getElementById("guess-num");
var guessedLetters= document.getElementById("guess-word");
var cardHeader = document.getElementById("card-header")

wins = 0;
losses = 0;
guessesRem = 15;
var missedGuessList = '';
//gotList -> intialized in other js file
var randomWord = '';
randomPick();
createBlanks(randomWord);
var spaceIndex = '_';

//function to assign a random word to randomWord
function randomPick() {
    var randomIndex = Math.floor(Math.random() * gotList.length);
    randomWord = gotList[randomIndex];
}
console.log(randomWord)


function createBlanks(randWord) {
    for (index = 1; index < randWord.length; index++) {
        spaceIndex = spaceIndex  + ' '+ '_';
    }
    
}
createBlanks(randomWord)
wordVar.textContent = spaceIndex;

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var continuePlay = true;

function checkWord() {
    var playcheck = 0;
    for (index = 0; index < randomWord.length; index++) {
        if (randomWord[index] == '_') {
            playcheck++;
        }
    return playcheck;
    }
}

function checkLetter(letter) {
    
    for (index = 0; index < randomWord.length; index++) {
        if (randomWord[index] == letter) {
            index2 = index * 2
            spaceIndex = spaceIndex.replaceAt(index2, letter)
        }
    }
    console.log("new space:" + spaceIndex)
    wordVar.textContent = spaceIndex;
}



// capture a key event

document.onkeyup = function(event) {
//cletter = '';
console.log(checkWord())
    if (checkWord() == 0) {
        missedGuessList = ''
        guessesRem = 15
        wins++
        }

var userGuess = event.key;
console.log(userGuess)
checkLetter(userGuess)

    if (missedGuessList === '') {
        missedGuessList = missedGuessList + userGuess;
    }
    else {
        console.log(missedGuessList)
        missedGuessList = missedGuessList + ', ' + userGuess;
    }

    cardHeader.textContent = '';
    guessedLetters.textContent = "Guesses Attempted: " + missedGuessList;
    winVar.textContent = "Wins: " + wins;
    guessNum.textContent = "Guesses Left: " + guessesRem;
    }

