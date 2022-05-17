const loginForm = document.getElementById("user-name-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const onButtonClicked = () => {
  const inputValue = loginInput.value;
  alert(inputValue);
};

loginButton.addEventListener("click", onButtonClicked);
