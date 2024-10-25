'use strict';

// Select the modal, overlay, close button, and buttons to show the modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// Function to open the modal and overlay
const openModal = () => {
  modal.classList.remove('hidden'); // Remove 'hidden' class from modal
  overlay.classList.remove('hidden'); // Remove 'hidden' class from overlay
};

// Loop through all show modal buttons and add click event listener
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal); // Open modal on button click
}

// Function to close the modal and overlay
const closeModal = () => {
  modal.classList.add('hidden'); // Add 'hidden' class to modal
  overlay.classList.add('hidden'); // Add 'hidden' class to overlay
};

// Add click event listener to close button to close the modal
btnCloseModal.addEventListener('click', closeModal);

// Add click event listener to overlay to close the modal
overlay.addEventListener('click', closeModal);

// Add keydown event listener to the document for the Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { // Check if the pressed key is Escape
    console.log('esc was pressed'); // Log message to console
    closeModal(); // Close the modal
  }
});

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    console.log('esc was pressed');
    closeModal();
  }
});
