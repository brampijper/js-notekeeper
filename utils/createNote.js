import store from '../store.js';

export default function createNote({ title, text }) {
    const { notes } = store.getState();
    const newNote = {
        title: title,
        text: text,
        color: 'white',
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1 //this needs explaining
    };

    const action = { type: "CREATE_NOTE", payload: { newNote } };
    store.dispatch(action);
    console.log(store.getState());
}