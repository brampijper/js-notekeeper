import { $modal, $modalText, $modalTitle } from "../utils/variables.js";
import store from '../store.js';

export default function openModal (event) {
    const { title, text } = store.getState();
    if(event.target.closest('.note')) { 
        $modal.classList.toggle('open-modal');
        $modalTitle.value = title;
        $modalText.value = text;
    }
}