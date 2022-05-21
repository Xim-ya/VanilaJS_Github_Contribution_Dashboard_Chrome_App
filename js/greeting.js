const nickNameForm = document.querySelector("[data-nick-name = form]");
const nickNameInput = document.querySelector("input");
const welcomPhrase = document.querySelector("[data-nick-name = phrase]");

const HIDDEN_CLASS = "hidden";
const NICKNAME_LS_KEY = "nickName";

const onNickNameSubmit = (event) => {
  event.preventDefault();
  const nickName = nickNameInput.value;
  paintWelcomePhrase(nickName);
  localStorage.setItem(NICKNAME_LS_KEY, nickName);
  nickNameForm.classList.add(HIDDEN_CLASS);
};

const paintWelcomePhrase = (nickName) => {
  welcomPhrase.innerText = `HI ${nickName}`;
  welcomPhrase.classList.remove(HIDDEN_CLASS);
};

const nickName = localStorage.getItem(NICKNAME_LS_KEY);

if (nickName === null) {
  nickNameForm.addEventListener("submit", onNickNameSubmit);
} else {
  paintWelcomePhrase(nickName);
  nickNameForm.classList.add(HIDDEN_CLASS);
}
