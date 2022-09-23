import { $form, $noteTitle, $formButtons, $noteText } from "../utils/variables.js";

export default function closeForm() {
    $form.classList.remove('form-open');
    $noteTitle.style.display = "none";
    $formButtons.style.display = "none";

    $noteTitle.value = "";
    $noteText.value = "";
}