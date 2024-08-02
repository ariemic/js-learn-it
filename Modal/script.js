'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

const btnList = document.querySelectorAll('.show-modal');

function close() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function open() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

btnList.forEach(btn => {
  btn.addEventListener('click', open);
});

btnClose.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || !modal.classList.contains('hidden')) {
    close();
  }
});
