const $form = document.querySelector('#form');
const $formCloseButton = document.querySelector('#form-close-button');
const $formButtons = document.querySelector('#form-buttons');
const $placeholder = document.querySelector('#placeholder');

const $noteTitle = document.querySelector('#note-title');
const $noteText = document.querySelector('#note-text');
const $notes = document.querySelector('#notes');

const $modal = document.querySelector('.modal');
const $modalTitle = document.querySelector('.modal-title');
const $modalText = document.querySelector('.modal-text');
const $modalCloseButton = document.querySelector('.modal-close-button');

const $colorTooltip = document.querySelector('#color-tooltip');

export { 
    $form, $formButtons, $formCloseButton, 
    $noteTitle, $noteText, $notes, 
    $modal, $modalTitle, $modalText, $modalCloseButton,
    $placeholder,
    $colorTooltip
};