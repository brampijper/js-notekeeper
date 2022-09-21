import { $form, $noteTitle, $formButtons } from "../variables.js";

export default function openForm() {
    $form.classList.add('form-open');
    $noteTitle.style.dipslay = "block";
    $formButtons.style.display = "block";
}