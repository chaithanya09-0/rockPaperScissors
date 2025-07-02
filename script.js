
function getComputerChoice (){
    let num = Math.floor( Math.random() * 10 )
    console.log(num)
    num = num % 3
    console.log(num)
    return (num === 0) ? "rock" :
    (num === 1) ? "paper" : "scissors"
}
let computerChoice=getComputerChoice()
console.log(computerChoice)

function getHumanChoice() {
    userChoice = prompt ("Enter your choice[rock/paper/scissors]")
    userChoice = userChoice.toLowerCase()
    return userChoice
}
getHumanChoice()