import store from "../store.js";
import { $modalText, $modalTitle } from "../utils/variables.js";
import render from "./displayNote.js";

export default function editNote() {
    const title = $modalTitle.value;
    const text = $modalText.value;

    const newNote = {
        title,
        text
    }
    
    const action = { type: "EDIT_NOTE", payload: { newNote }}
    store.dispatch(action);

    render();
}