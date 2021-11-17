// create variable with array of nba teams
var teams = ["Celtics", "Bulls", "Hawks", "Nets", "Cavaliers", "Hornets", "Knicks",
                "Pistons", "Heat", "Seventy Sixers", "Pacers", "Magic", "Raptors", "Bucks",
                "Wizards", "Nuggets", "Warriors", "Mavericks", "Timberwolves", "Thunder",
                "Blazers", "Jazz", "Clippers", "Lakers", "Suns", "Kings", "Rockets", "Grizzlies",
                "Pelicans", "Spurs"];
 
// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
//                 "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// create variables
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessesSoFar = [];
var userGuess = "";
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
        // team = teams[randTeam];
        
    _teamName = document.getElementById("CurrentWord");
    _teamName.textContent = randTeam.split("");
    }

random();

function blanks() {
    NumberofBlanks = [];
    for(var i = 0; i < randTeam.length; i++){
        NumberofBlanks[i] = "_";
    }
    document.getElementById("CurrentWord").textContent = NumberofBlanks.join(" ");
}
blanks();

console.log(randTeam.length);

var lettersGuessed = document.getElementById("LettersAlreadyGuessed");
var numberOfGuesses = document.getElementById("NumberOfGuessesRemaining");
numberOfGuesses.textContent = guessesRemaining;
var fillBlanks = document.getElementById("CurrentWord")

document.onkeyup = (function(event){
    userGuess = event.key.toLowerCase();
    console.log(userGuess);

   if(randTeam.indexOf(userGuess) !== -1){
    for(var i = 0; i < randTeam.length; i++){
        if(randTeam[i] === userGuess){
            NumberofBlanks[i] = userGuess;
        } 
    }
   }
   if(randTeam[i] !== userGuess){
    guessesSoFar.push(userGuess);
}
   fillBlanks.textContent = NumberofBlanks.join(" ");

    // else{
    //     for(var i = 0; i < randTeam.length; i++){
    //         if(randTeam)
    //     }
    // }
    lettersGuessed.textContent = guessesSoFar;
});
    // checkLetter();


// function checkLetter(){
//     if(guessesSoFar.indexOf(randTeam) === -1){
//         guessesSoFar.push(randTeam);
//         if(randTeam.indexOf(randTeam) === -1){
//             numberOfGuesses--;
//         }
//     }

// }
// checkLetter();