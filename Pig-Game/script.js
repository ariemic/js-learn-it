'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currScore0El = document.querySelector('#current--0');
const currScore1El = document.querySelector('#current--1');

let currScore = 0;
let score = 0;
let activePlayer = 0;

function start() {
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;
}

function setCurr(number = 0) {
  document.getElementById(`current--${activePlayer}`).textContent = number;
}

function setScore(number = 0) {
  document.getElementById(`score--${activePlayer}`).textContent = number;
}

function getCurr() {
  return Number(
    document.getElementById(`current--${activePlayer}`).textContent
  );
}

function getScore() {
  return Number(document.getElementById(`score--${activePlayer}`).textContent);
}

function changePlayer() {
  currScore = 0;
  setCurr();
  activePlayer = (activePlayer + 1) % 2;
  score = getScore();
}

start();

btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currScore += dice;
  } else {
    currScore = 0;
    changePlayer();
  }
  setCurr(currScore);
});

btnHold.addEventListener('click', () => {
  score += currScore;
  setScore(score);
  if (score >= 100) {
    console.log(`Congratulations🎉  Player ${activePlayer + 1} win!`);
  }

  changePlayer();
});

btnNew.addEventListener('click', () => {
  start();
});
