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

function changePlayer() {
  activePlayer = (activePlayer + 1) % 2;
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
  document.getElementById(`current--${activePlayer}`).textContent = currScore;
});

btnHold.addEventListener('click', () => {
  score += currScore;
  document.getElementById(`score--${activePlayer}`).textContent = score;
  changePlayer();
});
