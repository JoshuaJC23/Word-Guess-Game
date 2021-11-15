// create variable with array of nba teams
var letters = ["Celtics", "Bulls", "Hawks", "Nets", "Cavaliers", "Hornets", "Knicks",
                "Pistons", "Heat", "SeventySixers", "Pacers", "Magic", "Raptors", "Bucks",
                "Wizards", "Nuggets", "Warriors", "Mavericks", "Timberwolves", "Thunder",
                "Blazers", "Jazz", "Clippers", "Lakers", "Suns", "Kings", "Rockets", "Grizzlies",
                "Pelicans", "Spurs"];

// create variables
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessesSoFar = "";
var computerChoice = "";
// var NumberofBlanks = 0;
// var lettersInWord = [];
for (var i = 0; i < computerChoice.length; i++){
        computerChoice.push("_");
}
document.getElementById("NumberofBlanks").innerHTML = "Number of Guesses Remaining" + lettersInWord;
// var remainingLetter = getRandomTeam.length;
console.log(computerChoice.push("_"))

// while (remainingLetter > 0){
    
// }


// // create functions to run the variables.

function getRandomTeam(){
    computerChoice = teams[Math.floor(Math.random() * teams.length)];
    console.log(computerChoice);
    return computerChoice;
};

function calculateNumberofBlanks(){
    NumberofBlanks = computerChoice;
    console.log(NumberofBlanks);
    return NumberofBlanks;

};

function getLettersInWord(){
    lettersInWord = computerChoice.split("");

}
