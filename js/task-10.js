function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputRef: document.querySelector("#controls [type='number']"),
  createBtnRef: document.querySelector("#controls [data-create]"),
  destroyBtnRef: document.querySelector("#controls [data-destroy]"),
  boxRef: document.querySelector("#boxes"),
};

const createBoxes = function (amount) {
  amount = refs.inputRef.value;
  let baseBoxSize = 30;
  const markup = [];

  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.width = `${baseBoxSize}px`;
    newEl.style.height = `${baseBoxSize}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    markup.push(newEl);
    baseBoxSize += 10;
  }

  refs.boxRef.append(...markup);
};

const destroyBoxes = () => (refs.boxRef.innerHTML = "");

refs.createBtnRef.addEventListener("click", createBoxes);
refs.destroyBtnRef.addEventListener("click", destroyBoxes);
