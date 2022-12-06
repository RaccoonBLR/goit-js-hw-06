const baseName = "Anonymous";
const inputRef = document.querySelector("#name-input");
const userNameRef = document.querySelector("#name-output");

const onOutputText = function (event) {
  if (!event.currentTarget.value) {
    return (userNameRef.textContent = baseName);
  }

  return (userNameRef.textContent = event.currentTarget.value);
};

inputRef.addEventListener("input", onOutputText);
