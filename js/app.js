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
const containerOne = document.getElementById('one');
const containerTwo = document.getElementById('two');
const containerThree = document.getElementById('three');
const containerArr = [containerOne, containerTwo, containerThree];
const winSpan = document.getElementById('winSpan');
const drawSpan = document.getElementById('drawSpan');
const loseSpan = document.getElementById('loseSpan');
let winCount = 0; //counts wins
let drawCount = 0; //counts draws
let loseCount = 0; //counts losses
let isReset = true;
//place opponent cards
let picWidth = 100;
let spaceTop = 12;
let spaceLeft = 15; //8
// if (window.innerWidth < 530){
//   picWidth = 65;
//   spaceTop = 0;
//   spaceLeft = 0;
// }
//create addEventListener for changing window size
const margin = (window.innerWidth - (picWidth*4))/2;
for (let i=0; i<containerArr.length; i++){
  containerArr[i].style.left = (i * (picWidth + spaceLeft) + margin + 25).toString() + 'px';
}

let playerCard;
let previousSelection = document.getElementById('one'); //random assignment so it doesn't throw error on first run
player.addEventListener('click', selectCard);
go.addEventListener('click', evaluate);
newGame.addEventListener('click', reset);

function evaluate(){
  if (isReset){
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
    isReset = false;
  }
}

function selectCard(){
  if(event.target.getAttribute('class') === "clickable"){
    console.log(event.target.getAttribute('class'));
    previousSelection.style.boxShadow = "0px 0px 0px white";
    playerCard = event.target.parentElement.getAttribute('value');
    previousSelection = document.getElementById(event.target.parentElement.id);
    document.getElementById(String(event.target.parentElement.id)).style.boxShadow = "5px 5px 5px red";
    console.log(playerCard);
    return playerCard; // refactor into one line? ^
  }
}

function win(){
  winCount++;
  winSpan.innerText = `Win: ${winCount}`;
//combine top two lines?
  message.classList.toggle("win");
  message.innerText ="You win!";
}
function draw(){
  drawCount++;
  drawSpan.innerText = `Draw: ${drawCount}`;
  message.classList.toggle("draw");
  message.innerText ="Draw";
}
function lose(){
  loseCount++;
  loseSpan.innerText =`Lose: ${loseCount}`;
  message.classList.toggle("lose");
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
   message.classList.remove("win");
   message.classList.remove("lose");
   message.classList.remove("draw");
   isReset = true;
 }
