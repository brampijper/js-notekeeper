import { $noteText, $noteTitle, $formCloseButton, $modalCloseButton, $colorTooltip } from './variables.js';
import handleFormClick from '../form/handleFormClick.js';
import createNote from '../notes/createNote.js';
import closeForm from "../form/closeForm.js";
import selectNote from '../notes/selectNote.js';
import closeModal from '../modal/closeModal.js';
import openModal from '../modal/openModal.js';
import { openTooltip, closeTooltip } from '../notes/openTooltip.js';
import { editNoteColor } from '../notes/editNoteColor.js';
import deleteNote from '../notes/deleteNote.js';

export default function addEventListeners () {
    document.body.addEventListener('click', event => {
        handleFormClick(event);
        selectNote(event);
        openModal(event);
        deleteNote(event);
    })

    document.body.addEventListener('mouseover', event => {
        openTooltip(event);
    })

    document.body.addEventListener('mouseout', event => {
        closeTooltip(event);
    })

    $colorTooltip.addEventListener('mouseover', function() {
        this.style.display = 'flex'; 
    })

    $colorTooltip.addEventListener('mouseout', function() {
        this.style.display = 'none'; 
    })

    $colorTooltip.addEventListener('click', event => {
        const color = event.target.dataset.color;
        if (color) {
            editNoteColor(color)
        }
     })

    document.body.addEventListener('submit', event => {
        event.preventDefault(); 
        const text = $noteText.value;
        const title = $noteTitle.value;
        const hasNote = text || title;
        
        if (hasNote) {
            createNote( { text, title } )
            closeForm();
        }
    })

    $formCloseButton.addEventListener('click', event => {
        event.stopPropagation();
        closeForm();
    })

    $modalCloseButton.addEventListener('click', event => {
        closeModal(event);
    })
}