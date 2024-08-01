'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function changeScore() {
  score--;
  scoreMsg.textContent = score;
}

const myNumber = getRandomInt(20);
let scoreMsg = document.querySelector('.score');
let score = Number(scoreMsg.textContent);
let highScoreMsg = document.querySelector('.highscore');
let highscore = Number(highScoreMsg.textContent);

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
  }
});
