function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const colorIndicatorRef = document.querySelector(".color");

const showColorValue = (currentBackgroundColor) =>
  (colorIndicatorRef.textContent = currentBackgroundColor);

const pageBackgroundChanger = () =>
  showColorValue((document.body.style.backgroundColor = getRandomHexColor()));

buttonRef.addEventListener("click", pageBackgroundChanger);
