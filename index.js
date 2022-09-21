import getMessage from './utils/getMessage.js';

class App {
    constructor() {
        this.render();
    }

    render() {
        const message = getMessage();
        document.getElementById('root').innerHTML = `
            <div>
                ${message}
            </div>
        `
    }
}

new App();