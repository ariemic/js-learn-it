'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function changeScore() {
  score--;
  scoreMsg.textContent = score;
}

function again() {
  const tempHighscore = Number(highScoreMsg.textContent);
  document.body.style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  score = 20;
  scoreMsg.textContent = score;
  myNumber = getRandomInt(20);

  highscore = tempHighscore > highscore ? tempHighscore : highscore;
  highScoreMsg.textContent = highscore;
  console.log(myNumber);
}

let myNumber = getRandomInt(20);
let scoreMsg = document.querySelector('.score');
let score = Number(scoreMsg.textContent);

let highScoreMsg = document.querySelector('.highscore');
let highscore = 0;

console.log(myNumber);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  if (guess > myNumber) {
    message.textContent = '📈 Too high!';
    changeScore();
  } else if (guess < myNumber) {
    message.textContent = '📉 Too low!';
    changeScore();
  } else {
    message.textContent = 'Congratulations 🎉';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = myNumber;
    const tempHighscore = score;
    highScoreMsg.textContent = tempHighscore;
  }
});

document.querySelector('.again').addEventListener('click', again);
