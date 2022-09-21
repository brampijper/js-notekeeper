import getMessage from './utils/getMessage.js';

class App {
    constructor() { //in the constructor you can run any function you like.
        this.render();
    }

    render() {
        const message = getMessage();
        document.getElementById('root').append
        (`
            ${message}
        `)
        }
}

new App();