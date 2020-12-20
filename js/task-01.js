const categoryRef = document.querySelectorAll(".item");
console.log(`  В списке ${categoryRef.length} категории.`);

categoryRef.forEach((item) => {
  const catTitleRef = item.querySelector("h2");
  const catElRef = item.querySelectorAll("li");
  return console.log(
    `\u2022 Категория: ${catTitleRef.textContent}\r\n\u2022 Количество элементов: ${catElRef.length}`
  );
});
