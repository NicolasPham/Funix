'use strict';

//variables ==================================================
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

//--player 0
const sectionPlayer0 = document.querySelector('.player--0');
const currentPoint0 = document.getElementById('current--0');
const score0 = document.getElementById('score--0');
//--player 1
const sectionPlayer1 = document.querySelector('.player--1');
const currentPoint1 = document.getElementById('current--1');
const score1 = document.getElementById('score--1');

//active player
let activePlayer = 0;
let sectionPlayer = document.querySelector(`.player--${activePlayer}`);
let currentPoint = document.getElementById(`current--${activePlayer}`);
let score = document.getElementById(`score--${activePlayer}`);

//assign function ==================================================
rollBtn.addEventListener('click', handleRoll);
holdBtn.addEventListener('click', handleHold);
newBtn.addEventListener('click', handleNewGame);

//define function ==================================================
function handleRoll() {
  let randNumber = Math.ceil(Math.random() * 6);
  dice.src = `dice-${randNumber}.png`;

  if (randNumber === 1) {
    currentPoint.textContent = 0;
    handleSwitch();
  } else {
    let point = parseInt(currentPoint.textContent);
    point += randNumber;
    currentPoint.textContent = point;
  }
}

function handleHold() {
  let highScore = parseInt(score.textContent);
  let points = parseInt(currentPoint.textContent);
  highScore += points;
  score.textContent = highScore;

  currentPoint.textContent = 0;

  handleSwitch();
}

function handleNewGame() {
  currentPoint0.textContent = 0;
  score0.textContent = 0;
  currentPoint1.textContent = 0;
  score1.textContent = 0;

  activePlayer = 0;
  sectionPlayer = document.querySelector(`.player--${activePlayer}`);
  currentPoint = document.getElementById(`current--${activePlayer}`);
  score = document.getElementById(`score--${activePlayer}`);
}

function handleSwitch() {
  if (activePlayer === 0) {
    activePlayer = 1;

    sectionPlayer0.classList.remove('player--active');
    sectionPlayer1.classList.add('player--active');
  } else {
    activePlayer = 0;
    sectionPlayer1.classList.remove('player--active');
    sectionPlayer0.classList.add('player--active');
  }
  sectionPlayer = document.querySelector(`.player--${activePlayer}`);
  currentPoint = document.getElementById(`current--${activePlayer}`);
  score = document.getElementById(`score--${activePlayer}`);
}
