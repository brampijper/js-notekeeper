function createStore(reducer) {
    let currentState = reducer(undefined, {}); //the first time the app runs it sets an initial state (empty array) and provides an empty object to the reducer.

    return { //An object with methods available to the app.
        getState: () => currentState,
        dispatch: ( action ) => {
            currentState = reducer(currentState, action);
        }
    }
}

const initialState = {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    title: '',
    text: '',
    id: ''
}

function noteReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE_NOTE": {
            const createdNote = action.payload.newNote;
            const notes = [...state.notes, createdNote];
            return { notes }
        }
        case "SELECT_NOTE": {
            const selectedNote = action.payload.selectedNote;
            const title = selectedNote.title;
            const text = selectedNote.text;
            const id = selectedNote.id; 
            return { ...state, title, text, id } // always return something to update state. This is object shorthand for (initialState.title:title)
        }
        case "SET_NOTE_ID": {
            const id = action.payload.id;
            return { ...state, id }
        }
        case "EDIT_NOTE": {
            const { title, text } = action.payload.newNote;
            const notes = state.notes.map( note => 
                note.id === Number(state.id) ? { ...note, title, text } : note )
            return { notes };
        }
        case "EDIT_NOTE_COLOR": {
            const color = action.payload.color;
            const notes = state.notes.map( note => 
                note.id === Number(state.id) ? { ...note, color } : note )
            return { ...state, notes };
        }
        case "DELETE_NOTE": {
            const id = action.payload.id;
            const notes = state.notes.filter( note => note.id !== Number(id) )
            return { ...state, notes };
        }
        default: 
            return state;
    }
}

const store = createStore(noteReducer);

export default store;