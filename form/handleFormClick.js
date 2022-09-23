import { $form } from "../utils/variables.js"
import openForm from "./openForm.js";
import closeForm from "./closeForm.js";

export default function handleFormClick(e) {
    const isFormClicked = $form.contains(e.target);

    if (isFormClicked) {
        openForm();
    } else {
        closeForm();
    }
}