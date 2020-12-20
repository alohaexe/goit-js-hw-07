const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

function inputChange(event) {
  const value = event.target.value;
  outputRef.textContent = value || "незнакомец";
}

inputRef.addEventListener("input", inputChange);
