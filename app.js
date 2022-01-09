// Declaring values of all elements
    const computerChoicediv = document.getElementById('computer-choice')
    const playerChoicediv = document.getElementById('player-choice')
    const computerScorediv = document.getElementById('computerScore')
    const playerScorediv = document.getElementById('playerScore')
    const outcomediv = document.getElementById('outcome')
    const rockBtn =document.getElementById('rock')
    const paperBtn =document.getElementById('paper')
    const scissorsBtn =document.getElementById('scissors')
    const sign=document.getElementById('sign')
    let computerScore=0;
    let playerScore=0;
    let playerChoice;
    let computerChoice;
    let playerPicked = false;
   
//  Computer Choices
function getComputerChoice (){
    const randomNumber = Math.floor(Math.random()*3)+1
    retun =randomNumber;
    
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

function getPlayerChoice(e){
playerChoice= e.target.value
computerChoicediv.textContent=computerChoice.toUpperCase()
playerChoicediv.textContent=playerChoice.toUpperCase()
playerPicked=true;
outcomediv.textContent=getOutcome(playerChoice,computerChoice).toUpperCase()  

}      

function getOutcome(playerChoice,computerChoice){
    let outcome;
    if (playerChoice === computerChoice){
        outcome = 'Tie'
    }
   else if (playerChoice === 'rock' && computerChoice==='paper'){
        outcome = 'Player Lost Computer Wins';
        computerScore ++
        computerScorediv.textContent = computerScore;
    }
   else if (playerChoice === 'rock' && computerChoice==='scissors'){
        outcome = 'Player Win Computer Lost';
        playerScore ++
        playerScorediv.textContent = playerScore;
    }
    else if (playerChoice === 'paper' && computerChoice==='rock'){
        outcome = 'Player Win Computer Lost';
        playerScore ++
        playerScorediv.textContent = playerScore;
    }
    else if (playerChoice === 'paper' && computerChoice==='scissors'){
        outcome = 'Player Lost Computer Win';
        computerScore ++
        computerScorediv.textContent = computerScore;
    }
   else if (playerChoice === 'scissors' && computerChoice==='paper'){
        outcome = 'Player Win Computer Lost';
        playerScore ++
        playerScorediv.textContent = playerScore;
    }
   else if (playerChoice === 'scissors' && computerChoice==='rock'){
        outcome = 'Player Lost Computer Win';
        computerScore ++
        computerScorediv.textContent = computerScore;
    }
    return outcome
}

 rockBtn.addEventListener('click', getPlayerChoice)
 paperBtn.addEventListener('click', getPlayerChoice)
 scissorsBtn.addEventListener('click', getPlayerChoice)


 function win (player, computer){
     playerScore++;
     playerScore_span.innerHTML = playerScore;
     computerScore_span.innerHTML = computerScore
         
     }

function lose (player ,computer){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        playerScore_span.innerHTML = playerScore
      
        }


// // while (computerScore <=2 || playerScore<=2){
    computerChoice= getComputerChoice()
//     console.log(computerChoice);
//     if (playerPicked){
      
    // }
// }


const displayRock = ()=>{
    sign.textContent='Rock  '
}
const displayPaper = ()=>{
    sign.append('Paper   ')
}
const displayScissors =()=>{
    sign.append('Scissors    ')
}
const displayShoot =()=>{
    sign.append('     Shoot')
}
setTimeout(displayRock,1000);
setTimeout(displayPaper,2000)
setTimeout(displayScissors,3000)
setTimeout(displayShoot,4000)


if(playerScore>= 2){
    console.log('Player Wins')
}
if(computerScore>= 2){
    console.log('Computer Wins')
}


// const myMusic= document.getElementById("music");
// function play() {
//     myMusic.play();
// }
// function pause() {
//     myMusic.pause();
//     }

// function myAudioObject().play(){
// audio-controls id="music";
// }


// // button onclick="play()" type="button">Play</button;
// // button onclick="pause()" type="button">Pause</button;

