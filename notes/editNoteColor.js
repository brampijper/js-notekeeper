import store from "../store.js";
import displayNote from "./displayNote.js";

export default function editNoteColor (color) {
    const action = { type: "EDIT_NOTE_COLOR", payload: { color }}
    store.dispatch(action);

    displayNote();
}   