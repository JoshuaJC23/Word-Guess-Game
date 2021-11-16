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
// var currentWord;
var NumberofBlanks = [];
// var lettersInWord = [];
var team;
var randTeam;
// for(var i = 0; i < teams.length; i++) {
//     console.log(teams[i]);
// };
    function random() {
        randTeam = teams[Math.floor(Math.random() * teams.length)];
        console.log(randTeam);
        // randNum.toLowerCase();
        team = teams[randTeam];
        
    _teamName = document.getElementById("CurrentWord");
    _teamName.textContent = randTeam.split("");
    }

random();

function blanks() {
    NumberofBlanks = [];
    for(var i = 0; i < randTeam.length; i++){
        NumberofBlanks[i] = "_";
    }
    document.getElementById("CurrentWord").textContent = NumberofBlanks.join(" ")
}
blanks();