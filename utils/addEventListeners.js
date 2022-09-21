import handleFormClick from './form/handleFormClick.js';

export default function addEventListeners () {
    document.body.addEventListener('click', event => {
        handleFormClick(event);
    })
}