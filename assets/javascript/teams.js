// create variable with array of nba teams
var teams = ["LAKERS", "WARRIORS", "CELTICS", "RAPTORS", "CAVALIERS", "ROCKETS", "SPURS", "THUNDER", "BULLS", "KNICKS", "TIMBERWOLVES",
    "76ERS", "BUCKS", "MAVERICKS", "HEAT", "BLAZERS", "PELICANS", "JAZZ", "SUNS", "CLIPPERS", "NUGGETS", "KINGS", "PACERS",
    "NETS", "PISTONS", "WIZARDS", "HAWKS", "HORNETS", "HORNETS", "GRIZZLIES", "MAGIC"];
// create variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessesSoFar = "";
var computerChoice = "";
var NumberofBlanks = 0;
var lettersInWord = [];
for (var i = 0; i < getRandomTeam.length; i++) {
    NumberofBlanks[i] = "_";
}
// var remainingLetter = getRandomTeam.length;
// function getRandomTeam(){
//     computerChoice = teams[Math.floor(Math.random() * teams.length)];
//     console.log(computerChoice);
//     return computerChoice;
// };
// function calculateNumberofBlanks(){
//     NumberofBlanks = computerChoice;
//     console.log(NumberofBlanks);
//     return NumberofBlanks;
// };
// function getLettersInWord(){
//     lettersInWord = getRandomTeam.split("");
//     console.log(lettersInWord);
//     return lettersInWord;
// }
var states = ["Utah", "Idaho", "Colorado", "Wyoming", "Nevada", "California"];
function getRandomState() {
    computerChoice = states[Math.floor(Math.random() * states.length)];
    console.log(computerChoice);
    return computerChoice;
}
function calculateNumberofBlanks() {
    NumberofBlanks = computerChoice.length();
    console.log(NumberofBlanks);
}
function getLettersInWord() {
    var states = "California";
    lettersInWord = computerChoice.split("");
    console.log(states);
}