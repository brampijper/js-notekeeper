import store from '../store.js';
import { $placeholder, $notes } from '../utils/variables.js';

export default function render() {
    saveNotes();
    displayNote();
}

function saveNotes() {
    const { notes } = store.getState();
    localStorage.setItem('notes', JSON.stringify(notes));
}

function displayNote() {
    const { notes } = store.getState();
    const hasNotes = notes.length > 0;
    $placeholder.style.display = hasNotes ? 'none' : 'flex';

    $notes.innerHTML = notes.map( note => `
        <div style="background: ${note.color};" class="note" data-id="${note.id}">
            <div class="${note.title && 'note-title'}">${note.title}</div>
            <div class="note-text">${note.text}</div>
            <div class="toolbar-container">
                <div class="toolbar">
                    <img class="toolbar-color" data-id="${note.id}" src="https://img.icons8.com/ios-glyphs/60/000000/paint-palette--v1.png"> 
                    <img class="toolbar-delete" data-id="${note.id}" src="https://img.icons8.com/ios-glyphs/60/000000/filled-trash.png">
                </div>
            </div>
        </div>
        `).join("");
}