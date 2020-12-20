const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const createEl = (ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  return listItem;
};

const listItems = ingredients.map((ingredient) => createEl(ingredient));

listRef.append(...listItems);
