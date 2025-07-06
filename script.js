let humanScore = 0
let computerScore = 0
let humanChoice;
let computerChoice;
let msg = "";

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const display = document.querySelector('.display')

rock.addEventListener('click', () => playRound("rock", getComputerChoice()))
paper.addEventListener('click', () => playRound("paper", getComputerChoice()))
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()))

function getComputerChoice (){
    let num = Math.floor( Math.random() * 10 )
    
    num = num % 3
    
    return (num === 0) ? "rock" :
    (num === 1) ? "paper" : "scissors"
}

function playRound(humanChoice , computerChoice) {
    if (humanChoice === "rock"){
        if (computerChoice === "rock") {
            msg = "Both chose rock! Neither wins!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        } else if (computerChoice === "paper") { 
            computerScore++;
            msg = "You chose rock, Computer chose paper. Computer wins!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        } else { 
            humanScore++;
            msg = "You chose rock, Computer chose scissors. You win!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        }
    }
    if (humanChoice === "paper"){
        if (computerChoice === "rock") {
            humanScore++;
            msg = "You chose paper, Computer chose rock. You win!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        } else if (computerChoice === "paper") { 
            msg = "Both chose paper! Neither wins!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        } else { 
            computerScore++;
            msg = "You chose paper, Computer chose scissors. Computer wins!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        }
    }
    if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            computerScore++;
            msg = "You chose scissors, Computer chose rock. Computer wins!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        } else if (computerChoice === "paper") { 
            humanScore++;
            msg = "You chose scissors, Computer chose paper. You win!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        } else { 
            msg = "Both chose scissors! Neither wins!"
            display.innerHTML= `<p>${msg}</p>
                                <p>Computer Score : ${computerScore}</p>
                                <p>Your Score : ${humanScore}</p>`
        }
    }
    if(humanScore === 5 || computerScore === 5){
        (humanScore > computerScore) ? display.innerHTML += "<p>You won the game</p>" : display.innerHTML += "<p>Computer won the game</p>";
    }
}