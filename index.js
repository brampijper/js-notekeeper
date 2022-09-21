import addEventListeners from './utils/addEventListeners.js';

class App {
    constructor() { //in the constructor you can run any function you like.
        this.render();
        addEventListeners();
    }

    render() {
        document.getElementById('root').append
        (`
            hello world
        `)
        }
}

new App();