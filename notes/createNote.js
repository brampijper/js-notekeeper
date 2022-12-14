import store from '../store.js';
import render from './displayNote.js';
import closeForm from '../form/closeForm.js';

export default function createNote({ title, text }) {
    const { notes } = store.getState();
    const newNote = {
        title,
        text,
        color: 'white',
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1 // Position of first element in array starts at 0, but .length starts at 1: that's why -1 and +1 to match the ID with the corresponding element position. 
    };

    const action = { type: "CREATE_NOTE", payload: { newNote } };
    store.dispatch(action);
    
    render();
    closeForm();
}