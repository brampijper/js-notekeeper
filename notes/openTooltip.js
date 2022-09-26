import { $colorTooltip } from "../utils/variables.js";
import store from '../store.js';

export function openTooltip(event) {
    console.log(event.target);
    if(!event.target.matches('.toolbar-color')) return; //bugfix here

    const noteID = event.target.dataset.id;
    const action = { type: "SET_NOTE_ID", payload: { noteID } }
    store.dispatch(action);

    //explain this
    const noteCoords = event.target.getBoundingClientRect();
    const horizontal = noteCoords.left + window.scrollX;
    const vertical = noteCoords.top + window.scrollY;
    $colorTooltip.style.transform = `translate(${horizontal}px, ${vertical}px)`;
    $colorTooltip.style.display = 'flex'
}

export function closeTooltip(event) {
    if(!event.target.matches('.toolbar-color')) return;
    $colorTooltip.style.display = 'none';
}