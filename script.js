'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    console.log('esc was pressed');
    closeModal();
  }
});
