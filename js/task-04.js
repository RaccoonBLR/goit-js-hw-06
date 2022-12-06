let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

const incrementEvent = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decrementEvent = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementEvent);
decrementBtn.addEventListener("click", decrementEvent);
