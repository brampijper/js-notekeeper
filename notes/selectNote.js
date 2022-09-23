import store from '../store.js';

export default function selectNote (event) {
    const $selectedNote = event.target.closest('.note');
    if (!$selectedNote) return;

    const [$noteTitle, $noteText] = $selectedNote.children;
    
    const selectedNote = {
        title: $noteTitle.innerText,
        text: $noteText.innerText,
        id: $selectedNote.dataset.id
    }
    
    const action = { type: "SELECT_NOTE", payload: { selectedNote } };
    store.dispatch(action);
}