import { $form, $noteTitle, $formButtons, $noteText } from "../variables.js";

export default function closeForm() {
    $form.classList.remove('form-open');
    $noteTitle.style.display = "none";
    $formButtons.style.display = "none";

    $noteTitle.value = "";
    $noteText.value = "";
}