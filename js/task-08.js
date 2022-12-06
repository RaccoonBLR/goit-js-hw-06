const formRef = document.querySelector(".login-form");
const userData = {};

const handleSubmitForm = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert("Все поля должны быть заполнены!");
  }

  userData.email = email.value;
  userData.password = password.value;
  console.log(userData);
  event.currentTarget.reset();

  return userData;
};

formRef.addEventListener("submit", handleSubmitForm);
