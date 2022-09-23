import addEventListeners from './utils/addEventListeners.js';

class App {
    constructor() { //in the constructor you can run any function you like.
        addEventListeners();        
        // this.render();
    }

    // render() {
    //     document.getElementById('root')
    // }
}

new App();