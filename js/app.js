//event listeners for player card and then go button
// win draw lose function

//determines whether the player has won or not
const arr = [ [draw, lose, win],
              [win, draw, lose],
              [lose, win, draw]];

//random number generator to select opponent card
const go = document.getElementById('go');
const newGame = document.getElementById('newGame');
const flipCardOne = document.getElementById('one').firstElementChild;
const flipCardTwo = document.getElementById('two').firstElementChild;
const flipCardThree = document.getElementById('three').firstElementChild;
const player = document.getElementById('player');
const message = document.getElementById('message');

let playerCard;
let previousSelection = document.getElementById('one'); //random assignment so it doesn't throw error on first run
player.addEventListener('click', selectCard);
go.addEventListener('click', evaluate);
newGame.addEventListener('click', reset);

function evaluate(){
  const opponentCard = Math.floor((Math.random() * 3));
  console.log(opponentCard);
  switch (opponentCard) {
    case 0:
    flipCardOne.style.transform = 'rotateY(180deg)';
    break;
    case 1:
    flipCardTwo.style.transform = 'rotateY(180deg)';
    break;
    case 2:
    flipCardThree.style.transform = 'rotateY(180deg)';
    break;
  }
  arr[playerCard][opponentCard]();
}

function selectCard(){
  previousSelection.style.boxShadow = "0px 0px 0px white";
  playerCard = event.target.parentElement.getAttribute('value');
  previousSelection = document.getElementById(event.target.parentElement.id);
  document.getElementById(String(event.target.parentElement.id)).style.boxShadow = "5px 5px 5px red";
//need to null the previous selection
  console.log(playerCard);
  return playerCard; // refactor into one line? ^
}

function win(){
    message.style.color = "green";
    message.innerText ="You win!";
}
function draw(){
  message.style.color = "black";
  message.innerText ="Draw";
}
function lose(){
  message.style.color = "red";
  message.innerText ="You lose...";
}

function flipping(){
    // flipCard.style.transform = 'rotateY(0deg)';
    flipCard.style.transform = 'rotateY(180deg)';
 }
 function reset(){
   flipCardOne.style.transform = 'rotateY(0deg)';
   flipCardTwo.style.transform = 'rotateY(0deg)';
   flipCardThree.style.transform = 'rotateY(0deg)';
   previousSelection.style.boxShadow = "0px 0px 0px white";
   message.innerText = '';
 }
