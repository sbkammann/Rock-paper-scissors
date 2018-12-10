//event listeners for player card and then go button
// win draw lose function

//determines whether the player has won or not
const arr = [ [draw, lose, win],
              [win, draw, lose],
              [lose, win, draw]];

//random number generator to select opponent card
function selectOpponentCard(){
   const opponentCard = Math.floor((Math.random() * 3));
   console.log(opponentCard);
}
const player = document.getElementById('player');
player.addEventListener('click', print);
function print(){
  console.log(event.target.parentElement.getAttribute('value'));
  //need to grab a number based on card chosed and plug it in arr
  //random number generator to select opponent card
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
