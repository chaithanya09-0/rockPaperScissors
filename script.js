let humanScore = 0
let computerScore = 0

function getComputerChoice (){
    let num = Math.floor( Math.random() * 10 )
    
    num = num % 3
    
    return (num === 0) ? "rock" :
    (num === 1) ? "paper" : "scissors"
}
let computerChoice;


function getHumanChoice() {
    userChoice = prompt ("Enter your choice[rock/paper/scissors]")
    userChoice = userChoice.toLowerCase()
    return userChoice
}
let humanChoice;

function playRound(humanChoice , computerChoice) {
    if (humanChoice === "rock"){
        if (computerChoice === "rock") {
            console.log("Computer chose rock")
            console.log("tie! no points for both players")
        } else if (computerChoice === "paper") { 
            console.log("Computer chose paper")
            console.log("You lose!");
            computerScore++;
        } else { 
            console.log("Computer chose scissors")
            console.log("You Win!")
            humanScore++ 
        }
    }
    if (humanChoice === "paper"){
        if (computerChoice === "rock") {
            console.log("Computer chose rock")
            console.log("You win!")
            humanScore++
        } else if (computerChoice === "paper") { 
            console.log("Computer chose paper")
            console.log("tie! no points for both players");
        } else { 
            console.log("Computer chose scissors")
            console.log("You lose!")
            computerScore++ 
        }
    }
    if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            console.log("Computer chose rock")
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice === "paper") { 
            console.log("Computer chose paper")
            console.log("You Win!")
            humanScore++ 
        } else { 
            console.log("Computer chose scissors")
            console.log("tie! no points for both players");
        }
    }
}
function playGame(){
    for (let i=0; i <5; i++){
        computerChoice = getComputerChoice()
        humanChoice = getHumanChoice()
        playRound(humanChoice , computerChoice)
    }
    (computerScore > humanScore) ? console.log("Computer won the game") : console.log("You won the game")
}
playGame();