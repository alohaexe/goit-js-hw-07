const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

function changeFontSize() {
  textRef.setAttribute("style", `font-size: ${inputRef.value}px`);
}

inputRef.addEventListener("input", changeFontSize);
