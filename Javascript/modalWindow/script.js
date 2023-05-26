'use strict';
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const clodeModal = document.querySelector('.close-modal');

const btnShow = document.querySelectorAll('.show-modal');

//-------------------------------------------------------
// define function

function handleShow() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function handleClose() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

//-------------------------------------------------------
//assign function to button

for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click', handleShow);
}

clodeModal.addEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    handleClose();
  }
});
