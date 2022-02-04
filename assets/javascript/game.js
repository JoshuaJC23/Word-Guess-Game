// create variable with array of nba teams
var teams = ["Celtics", "Bulls", "Hawks", "Nets", "Cavaliers", "Hornets", "Knicks",
    "Pistons", "Heat", "Seventy Sixers", "Pacers", "Magic", "Raptors", "Bucks",
    "Wizards", "Nuggets", "Warriors", "Mavericks", "Timberwolves", "Thunder",
    "Blazers", "Jazz", "Clippers", "Lakers", "Suns", "Kings", "Rockets", "Grizzlies",
    "Pelicans", "Spurs"];

// create variables
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessesSoFar = [];
var userGuess = "";
var NumberofBlanks = [];
var team;
var randTeam;

function random() {
    randTeam = teams[Math.floor(Math.random() * teams.length)].toLowerCase()
    console.log(randTeam);

    // _teamName = document.getElementById("CurrentWord");
    // _teamName.textContent = randTeam.split("");

}

random();

function blanks() {
    NumberofBlanks = [];
    for (var i = 0; i < randTeam.length; i++) {
        NumberofBlanks[i] = "_";
    }
    document.getElementById("CurrentWord").textContent = NumberofBlanks.join(" ");
}
blanks();

console.log(randTeam.length);

var lettersGuessed = document.getElementById("LettersAlreadyGuessed");
var numberOfGuesses = document.getElementById("NumberOfGuessesRemaining");
var fillBlanks = document.getElementById("CurrentWord");
var gamesLost = document.getElementById("Losses");
var gamesWon = document.getElementById("Wins");

document.onkeyup = (function (event) {
    userGuess = event.key;
    console.log(userGuess);

    if (randTeam.indexOf(userGuess) !== -1) {
        for (var i = 0; i < randTeam.length; i++) {
            if (randTeam[i] === userGuess) {
                NumberofBlanks[i] = userGuess;
                guessesRemaining--;
            }
        }
    }
    else {
        guessesSoFar.push(userGuess);
        guessesRemaining--;
    }

    if(guessesRemaining === 0){
        // alert("game over");
        losses++;
    } 
    if(userGuess === randTeam){
        wins++
    }
    
    fillBlanks.textContent = NumberofBlanks.join(" ");
    numberOfGuesses.textContent = guessesRemaining;
    gamesLost.textContent = losses;
    lettersGuessed.textContent = guessesSoFar;
    gamesWon.textContent = wins;
});

