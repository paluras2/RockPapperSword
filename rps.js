const rpsArray = ["rock", "paper", "scissors"];

var tie = 0;
var player = 0;
var computer = 0;

let playerSelection = playerPlay();
let computerSelection = computerPlay()
console.log(tie)

// Computer random pick
function computerPlay() {
   return rpsArray[Math.floor(Math.random() * rpsArray.length)];
} 
const

function playerPlay(){
    return "rock"
}


//Round rules
function playRound(playerSelection,computerSelection){

    if (playerSelection == computerSelection){
        return tie++
    }


}
console.log(playRound("rock","rock"))