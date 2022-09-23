import { $noteText, $noteTitle, $formCloseButton, $modalCloseButton } from './variables.js';
import handleFormClick from '../form/handleFormClick.js';
import createNote from '../notes/createNote.js';
import closeForm from "../form/closeForm.js";
import selectNote from '../notes/selectNote.js';
import closeModal from '../modal/closeModal.js';
import openModal from '../modal/openModal.js';

export default function addEventListeners () {
    document.body.addEventListener('click', event => {
        handleFormClick(event);
        selectNote(event);
        openModal(event);
    })

    document.body.addEventListener('submit', event => {
        event.preventDefault(); //prevent auto refresh on submit.
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
        event.stopPropagation();
        closeModal(event);
    })
}