const inputRef = document.querySelector("#validation-input");
const validationInput = Number(inputRef.dataset.length);

function inputBlur(event) {
  return event.target.value.length === validationInput
    ? inputRef.setAttribute("class", "valid")
    : inputRef.setAttribute("class", "invalid");
}

inputRef.addEventListener("blur", inputBlur);
