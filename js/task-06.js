const inputRef = document.querySelector("#validation-input");

const isValid = () =>
  inputRef.classList.contains("invalid")
    ? inputRef.classList.replace("invalid", "valid")
    : inputRef.classList.add("valid");

const isInvalid = () =>
  inputRef.classList.contains("valid")
    ? inputRef.classList.replace("valid", "invalid")
    : inputRef.classList.add("invalid");

const validator = function (event) {
  Number(inputRef.dataset.length) === event.currentTarget.value.length
    ? isValid()
    : isInvalid();
};

inputRef.addEventListener("blur", validator);
