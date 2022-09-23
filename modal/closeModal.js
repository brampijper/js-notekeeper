import editNote from "../notes/editNote.js";
import { $modal } from "../utils/variables.js";

export default function closeModal(event) {
    editNote();
    $modal.classList.toggle('open-modal');
}