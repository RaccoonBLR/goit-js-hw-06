const inputFontSizeControlRef = document.querySelector("#font-size-control");
const convertibleTextRef = document.querySelector("#text");

const fontSizeConverter = (event) => {
  convertibleTextRef.style.fontSize = `${Number(event.currentTarget.value)}px`;
};

inputFontSizeControlRef.addEventListener("input", fontSizeConverter);
