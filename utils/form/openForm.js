import { $form, $noteTitle, $formButtons } from "../variables.js";

export default function openForm() {
    $form.classList.add('form-open');
    $noteTitle.style.display = "block"; //this one doesn't toggle from block to none
    $formButtons.style.display = "block";
}