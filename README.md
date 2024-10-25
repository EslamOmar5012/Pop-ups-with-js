# 🚀 Modal Window Project

This project demonstrates how to create and control a modal window using JavaScript, HTML, and CSS. The modal window can be opened and closed using various triggers such as button clicks and keyboard events.

## ✨ Features

- **🔓 Open Modal:** Click on any button with the `show-modal` class to open the modal window.
- **❌ Close Modal:** Close the modal by:
  - 🖱️ Clicking the close button (`X`).
  - 🖱️ Clicking outside the modal (overlay).
  - ⌨️ Pressing the `Escape` key.

## 📝 Code Overview

### 📜 JavaScript

The JavaScript code handles the modal's functionality:

- **🔍 Selecting Elements:** Uses `querySelector` and `querySelectorAll` to select the modal, overlay, close button, and buttons for showing the modal.
- **🎯 Event Listeners:**
  - Adds click event listeners to each show modal button to open the modal.
  - Adds click event listeners to the close button and overlay to close the modal.
  - Adds a `keydown` event listener to close the modal when the `Escape` key is pressed.
- **⚙️ Functions:**
  - `openModal()`: Removes the `hidden` class from the modal and overlay to display them.
  - `closeModal()`: Adds the `hidden` class back to the modal and overlay to hide them.

### 🎨 CSS

The CSS includes basic styling for the modal, overlay, and hidden class. The `hidden` class is used to hide the modal and overlay by setting `display: none`.

### 📄 HTML

The HTML file contains:
- A modal window structure with content.
- Buttons to trigger the modal.
- Overlay for dimming the background when the modal is open.
