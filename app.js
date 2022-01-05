// let sign = prompt("Please enter your name");


// Declaring values of all elements
    const computerChoicediv = document.getElementById('computer-choice')
    const playerChoicediv = document.getElementById('player-choice')
    const outcomediv = document.getElementById('outcome')
    const rockBtn =document.getElementById('rock')
    const paperBtn =document.getElementById('paper')
    const scissorsBtn =document.getElementById('scissors')
    

//  Computer Choices
function getComputerChoice (){
    const randomNumber = Math.floor(Math.random()*3) +1

let computerChoice;
    if(randomNumber === 1) {
        computerChoice ='rock'
    }
    else if(randomNumber === 2) {
        computerChoice ='paper'
    } 
    else if(randomNumber === 3) {
        computerChoice ='scissors'
    }
  return computerChoice  
}
const computerChoice= getComputerChoice()
console.log(computerChoice);

let playerChoice;

function getPlayerChoice(e){
playerChoice= e.target.value
computerChoicediv.textContent=computerChoice
outcomediv.textContent=getOutcome(playerChoice,computerChoice)
}      





function getOutcome(playerChoice,computerChoice){
    let outcome;
    if (playerChoice === computerChoice){
        outcome = 'Tie'
    }
   else if (playerChoice === 'rock' && computerChoice==='paper'){
        outcome = 'You Lost'
    }
   else if (playerChoice === 'rock' && computerChoice==='scissors'){
        outcome = 'You Win'
    }
    else if (playerChoice === 'paper' && computerChoice==='rock'){
        outcome = 'You Win'
    }
    else if (playerChoice === 'paper' && computerChoice==='scissors'){
        outcome = 'You Lost'
    }
   else if (playerChoice === 'scissors' && computerChoice==='paper'){
        outcome = 'You Win'
    }
   else if (playerChoice === 'scissors' && computerChoice==='rock'){
        outcome = 'You Lost'
    }
    return outcome
}

// getOutcome(playerChoice,computerChoice)
// console.log(outcome);



rockBtn.addEventListener('click', getPlayerChoice)
paperBtn.addEventListener('click', getPlayerChoice)
scissorsBtn.addEventListener('click', getPlayerChoice)




// const displayRock = ()=>{
//     div.append('Rock')
// }
// const displaypaper = ()=>{
//     div.append('Paper')
// }


// div.append('Scissors');
// setTimeout(displayPaper,1000)
// setTimeout(displayScissors,2000)
// setTimeout(displayShoot,3000)