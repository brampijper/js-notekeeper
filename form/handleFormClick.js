import { $form, $noteText, $noteTitle } from "../utils/variables.js"
import openForm from "./openForm.js";
import closeForm from "./closeForm.js";
import createNote from "../notes/createNote.js";

export default function handleFormClick(e) {
    const isFormClicked = $form.contains(e.target);

    const text = $noteText.value;
    const title = $noteTitle.value;
    const hasNote = text || title;

    if (isFormClicked) {
        openForm();
    } else if (hasNote) {
        createNote({title, text})
    } else {
        closeForm();
    }
}