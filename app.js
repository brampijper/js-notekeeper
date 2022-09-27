import addEventListeners from './utils/addEventListeners.js';
import render from './notes/displayNote.js';

class App {
    constructor() { //in the constructor you can run any function you like.
        addEventListeners();
        render();        
    }
}

new App();