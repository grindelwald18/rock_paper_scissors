let playerScore = 0
let computerScore = 0
let roundWinner = ''
const winner = document.getElementById('whoWinner')
const modal = document.querySelector('#modal');
// const close = document.querySelector('.close');
const restart = document.getElementById('restart');
restart.addEventListener('click', ()=>{
  playerScore = 0
  computerScore = 0
  roundWinner = ''
  playerSc.textContent='игрок: 0';
  computerSc.textContent='компьютер: 0';
  round.textContent='Первый, кто наберет 5 очков, побеждает в игре'
  modal.style.display = 'none';
})
function playRound(playerSelection, computerSelection) {
  if(playerScore==5 || computerScore==5){
    if(playerScore==5){
      modal.style.display = 'block';
      winner.textContent='Вы первее набрали 5 очков';
    }else{
      winner.textContent='Компьютер первее набрал 5 очков';
      modal.style.display = 'block';
    } 
  }else{
    if (playerSelection == 'rock' &&  computerSelection == 'scissors' || 
        playerSelection == 'paper' &&  computerSelection == 'rock' || 
        playerSelection == 'scissors' &&  computerSelection == 'paper')
      {
        playerScore +=1;
        computerScore +=0;
        roundWinner='player';
        console.log(playerScore, computerScore)
        updateScore(playerScore, computerScore, roundWinner)
      } else if(playerSelection == 'scissors' &&  computerSelection == 'rock' || 
                playerSelection == 'rock' &&  computerSelection == 'paper' || 
                playerSelection == 'paper' &&  computerSelection == 'scissors')
              {
                playerScore +=0;
                computerScore +=1;
                roundWinner='computer';
                console.log(playerScore, computerScore)
                updateScore(playerScore, computerScore, roundWinner)
              }else if (playerSelection == 'scissors' &&  computerSelection == 'scissors' || 
              playerSelection == 'rock' &&  computerSelection == 'rock' || 
              playerSelection == 'paper' &&  computerSelection == 'paper'
              ){
                playerScore +=0;
                computerScore +=0;
                roundWinner='nobody';
                console.log(playerScore, computerScore)
                updateScore(playerScore, computerScore, roundWinner)
              }


              updateChoices(playerSelection, computerSelection);
            }
  }
    
function updateScore(playerScore, computerScore, roundWinner){
      if(roundWinner=='player'){
          playerSc.textContent='игрок: '+ playerScore;
          computerSc.textContent='компьютер: '+computerScore;
          round.textContent='Вы победили'
      }
      else if(roundWinner=='computer'){
          computerSc.textContent='компьютер: '+computerScore;
          playerSc.textContent='игрок: '+ playerScore;
          round.textContent='Компьютер победил'
      }else if(roundWinner=='nobody'){
        computerSc.textContent='компьютер: '+computerScore;
        playerSc.textContent='игрок: '+ playerScore;
        round.textContent='Нет победителя'
      }

}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
var answerPlaer;
function getComputerChoice(){
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
          // console.log("выбор компа rock")
          return 'rock'
        case 1:
          // console.log("выбор компа paper")
          return 'paper'
        case 2:
          // console.log("выбор компа scissors")
          return 'scissors'
    }

  } 


function PlaerChoice(answerPlaer){
    var playerSelection = answerPlaer;
    var computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const playerAnswer = document.getElementById('playerAnswer')
const computerAnswer = document.getElementById('computerAnswer')
const playerSc = document.getElementById('playerScore')
const computerSc = document.getElementById('computerScore')
const round = document.getElementById('point')
rockBtn.addEventListener('click', ()=>{
  PlaerChoice('rock')
})
paperBtn.addEventListener('click', ()=>{
  PlaerChoice('paper')
})
scissorsBtn.addEventListener('click', ()=>{
  PlaerChoice('scissors')
})
// function handleClick(playerSelection) {
//     if (isGameOver()) {
//       openEndgameModal()
//       return
//     }
  
//     const computerSelection = getRandomChoice()
//     playRound(playerSelection, computerSelection)
//     updateChoices(playerSelection, computerSelection)
//     updateScore()
  
//     if (isGameOver()) {
//       openEndgameModal()
//       setFinalMessage()
//     }
//   }

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        playerAnswer.textContent = '✊'
        break
      case 'paper':
        playerAnswer.textContent = '✋'
        break
      case 'scissors':
        playerAnswer.textContent = '✌'
        break
    }
  
    switch (computerSelection) {
      case 'rock':
        computerAnswer.textContent = '✊'
        break
      case 'paper':
        computerAnswer.textContent = '✋'
        break
      case 'scissors':
        computerAnswer.textContent = '✌'
        break
    }
  }