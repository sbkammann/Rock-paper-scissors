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
let playerCard;
player.addEventListener('click', selectCard);
go.addEventListener('click', evaluate);

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
  playerCard = event.target.parentElement.getAttribute('value');
  console.log(playerCard);
  return playerCard; // refactor into one line? ^
}

function win(){
    console.log("win");
}
function draw(){
  console.log("draw");
}
function lose(){
  console.log("lose");
}

function flipping(){
    // flipCard.style.transform = 'rotateY(0deg)';
    flipCard.style.transform = 'rotateY(180deg)';

 }
