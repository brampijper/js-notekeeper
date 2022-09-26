import store from '../store.js';
import displayNote from './displayNote.js';

export default function deleteNote(event) {
    event.stopPropagation();
    const $deleteIcon = event.target.matches('.toolbar-delete');
    if (!$deleteIcon) return;

    const id = event.target.dataset.id;
    const action = { type: "DELETE_NOTE", payload: { id }}
    store.dispatch(action);
    displayNote();
}