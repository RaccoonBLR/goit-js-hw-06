const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListElems = ingredients.map((ingredient) => {
  const newElem = document.createElement("li");
  newElem.textContent = ingredient;
  newElem.classList.add("item");

  return newElem;
});

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingredientsListElems);
