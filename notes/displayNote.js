import store from '../store.js';
import { $placeholder, $notes } from '../utils/variables.js';

export default function displayNote() {
    const { notes } = store.getState();
    const hasNotes = notes.length > 0;
    $placeholder.style.display = hasNotes ? 'none' : 'flex';

    $notes.innerHTML = notes.map( note => `
        <div style="background: ${note.color};" class="note" data-id="${note.id}">
            <div class="${note.title && 'note-title'}">${note.title}</div>
            <div class="note-text">${note.text}</div>
            <div class="toolbar-container">
                <div class="toolbar">
                    <img class="toolbar-color" src="https://icon.now.sh/palette">
                    <img class="toolbar-delete" src="https://icon.now.sh/delete">
                </div>
            </div>
        </div>
        `).join("");
    }
