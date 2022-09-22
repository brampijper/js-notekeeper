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
    notes: []
}

function noteReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE_NOTE":
            const createdNote = action.payload.newNote;
            const notes = [...state.notes, createdNote];
            return { notes };
        default: 
            return state;
    }
}

const store = createStore(noteReducer);

export default store;