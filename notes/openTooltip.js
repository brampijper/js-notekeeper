import { $colorTooltip } from "../utils/variables.js";
import { setNoteID } from '../notes/editNoteColor.js'

export function openTooltip(event) {
    if(!event.target.matches('.toolbar-color')) return;

    const id = event.target.dataset.id;
    setNoteID(id);

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