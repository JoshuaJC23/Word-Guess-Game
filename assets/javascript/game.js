// create variable with array of nba teams
var teams = ["Celtics", "Bulls", "Hawks", "Nets", "Cavaliers", "Hornets", "Knicks",
                "Pistons", "Heat", "SeventySixers", "Pacers", "Magic", "Raptors", "Bucks",
                "Wizards", "Nuggets", "Warriors", "Mavericks", "Timberwolves", "Thunder",
                "Blazers", "Jazz", "Clippers", "Lakers", "Suns", "Kings", "Rockets", "Grizzlies",
                "Pelicans", "Spurs"];

// create variables
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessesSoFar = "";
var currentWord;
var NumberofBlanks = [];
var lettersInWord = [];
var team;

// for(var i = 0; i < teams.length; i++) {
//     console.log(teams[i]);
// };

var randNum = teams[Math.floor(Math.random() * teams.length)];
console.log(randNum);

_teamName = document.getElementById("CurrentWord");
_teamName.textContent = randNum.split("");
