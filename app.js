import addEventListeners from './utils/addEventListeners.js';

class App {
    constructor() { //in the constructor you can run any function you like.
        addEventListeners();        
        this.render();
    }

    render() {
        document.getElementById('root').append
        (`
            hello world
        `)
        }
}

new App();