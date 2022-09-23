import { $noteText, $noteTitle, $formCloseButton } from './variables.js';
import handleFormClick from '../form/handleFormClick.js';
import createNote from '../notes/createNote.js';
import closeForm from "../form/closeForm.js";

export default function addEventListeners () {
    document.body.addEventListener('click', event => {
        handleFormClick(event);
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
}