import { $form, $noteTitle, $formButtons } from "../variables.js";

export default function openForm() {
    $form.classList.add('form-open');
    $noteTitle.style.display = "block";
    $formButtons.style.display = "block";
}