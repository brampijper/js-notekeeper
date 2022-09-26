import store from "../store.js";
import displayNote from "./displayNote.js";

export function editNoteColor (color) {
    const action = { type: "EDIT_NOTE_COLOR", payload: { color }}
    store.dispatch(action);
    
    displayNote();
}   

export function setNoteID (id) {
    const action = { type: "SET_NOTE_ID", payload: { id } }
    store.dispatch(action);
}