const inputNumber = document.querySelector("#controls input");
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

renderBtn.addEventListener("click", () => createBoxes(inputNumber.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let result = [];
  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.width = `${30 + i * 10}px`;
    newEl.style.height = `${30 + i * 10}px`;
    newEl.style.backgroundColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    result.push(newEl);
  }
  boxes.append(...result);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
