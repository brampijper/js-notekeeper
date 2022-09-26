import { $modal, $modalText, $modalTitle } from "../utils/variables.js";
import store from '../store.js';

export default function openModal (event) {
    if(event.target.matches('.toolbar-delete')) return;

    if(event.target.closest('.note')) { 
        const { title, text } = store.getState();
        
        $modal.classList.toggle('open-modal');
        $modalTitle.value = title;
        $modalText.value = text;
    }
}