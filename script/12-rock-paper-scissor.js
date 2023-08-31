let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0 
};   // default || or operator used 
updateScoreElement();

let intervalID;
let isAutoPlaying = false;

/* Arrow function style*/
// const autoPlay = ()=>{};

/*Auto Play button add Event Listener*/

const autoBtnHandler = ()=>{
  autoPlay();
}
const autoplayBtn = document.querySelector('.js-auto-btn');
autoplayBtn.addEventListener('click',autoBtnHandler);

/*
1) Easier to Read 
2) Provide Hoisting feature
3) here in this situation we should use regular syntax shown below 
*/
function autoPlay(){
  if(!isAutoPlaying){
  intervalID = setInterval(()=>{
    const playerMove = pickComputerMove();
    playGame(playerMove);
    autoplayBtn.textContent = 'Stop Play';
  },1000);
  isAutoPlaying = true;
  }else{
    clearInterval(intervalID);
    autoplayBtn.textContent = 'Auto Play';

    isAutoPlaying = false;
  }
}

/*Reset Score button*/
const resetBtnElement = document.querySelector('.js-reset-btn');
resetBtnElement.addEventListener('click',()=>{
    score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
  });


/*Play buttons*/
const rockBtn = document.querySelector('.js-rock-btn');

const paperBtn = document.querySelector('.js-paper-btn');

const scissorBtn = document.querySelector('.js-scissors-btn');

  rockBtn.addEventListener('click', () =>{
    playGame('Rock')
  });

  paperBtn.addEventListener('click',()=>{
    playGame('Paper')
  });

  scissorBtn.addEventListener('click',()=>{
    playGame('Scissors')
  });

  document.body.addEventListener('keydown',(event)=>{
    //  console.log(event.key);
    if(event.key === 'r'){
      playGame('Rock');
     console.log(event.key);
    }else if(event.key === 'p'){
      playGame('Paper');
    }else if(event.key === 's'){
      playGame('Scissors');
    }else if(event.key === 'a'){
      autoPlay();
    }
  });


function playGame(playerMove){    /* parameters or arguments which is use to pass value inside function*/
const computerMove = pickComputerMove();
let result = '';
if(playerMove === 'Scissors'){

if(computerMove === 'Rock'){
  result = 'You lose';
}else if(computerMove === 'Paper'){
  result = 'You win';
}else if(computerMove === 'Scissors'){
  result = 'Tie';
}}
else if (playerMove === 'Paper'){

if(computerMove === 'Rock'){
  result = 'You win';
}else if(computerMove === 'Paper'){
  result = 'Tie';
}else if(computerMove === 'Scissors'){
  result = 'You lose';
}}
else if(playerMove === 'Rock'){
if(computerMove === 'Rock'){
  result = 'Tie';
}else if(computerMove === 'Paper'){
  result = 'You lose';
}else if(computerMove === 'Scissors'){
  result = 'You win';
}}

if(result === 'You win'){
score.wins += 1;
}else if(result === 'You lose'){
score.losses += 1;
}else if(result === 'Tie'){
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = ` You
<img src="10-images/${playerMove}-emoji.png" class="move-icon"/> 
<img src="10-images/${computerMove}-emoji.png" class="move-icon"/> 
Computer`;


//  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
// Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `
Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'Rock';
}else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'Paper';
}else if(randomNumber >= 2/3 && randomNumber <= 1){
computerMove = 'Scissors';
}

return computerMove;
}