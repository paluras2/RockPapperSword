const playerText = document.querySelector("#playerText");
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll('.choiceBtn')

let playerVar;
let computerVar;
let resultVar;

choiceBtn.forEach(button => button.addEventListener("click", ()=>
{
    playerVar=button.textContent;
    computerTurn();
    playerText.textContent= `Player :  ${playerVar}`;
    computerText.textContent= `Computer :  ${computerVar}`;
    resultText.textContent= winners()
}))

function computerTurn(){
    const choice = (Math.floor(Math.random() * 3)+ 1) ;
    switch(choice){
        case 1:
            computerVar= "Rock";
            break;
        case 2:
            computerVar= "Paper";
            break;  
        case 3:
            computerVar= "Scissor";      
    }


}

function winners(){
    if (playerVar === computerVar){
        return "Tie, Nobody wins.";
    }else if (playerVar == "Rock" && computerVar == "Paper"){
        return "Bad move, You lost";
    }else if (playerVar == "Scissor" && computerVar == "Rock"){
            return "Bad move, You lost";
    }else if (playerVar == "Paper" && computerVar == "Scissor"){
            return "Bad move, You lost";
    }else if (playerVar == "Scissor" && computerVar == "Paper"){
            return "Congrats, you won";
    }else if (playerVar == "Rock" && computerVar == "Scissor"){
            return "Congrats, you won";
    }else if (playerVar == "Paper" && computerVar == "Rock"){
            return "Congrats, you won";
}
}