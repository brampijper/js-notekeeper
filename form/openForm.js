import { $form, $noteTitle, $formButtons } from "../utils/variables.js";

export default function openForm() {
    $form.classList.add('form-open');
    $noteTitle.style.display = "block";
    $formButtons.style.display = "block";
}