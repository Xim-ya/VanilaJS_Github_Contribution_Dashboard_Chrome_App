import { HIDDEN_CLASS, NICKNAME_LS_KEY } from "./constants.js";
import { loadUserContribution } from "./contributionBoard.js";

const nickNameForm = document.querySelector("[data-nick-name = form]");
const nickNameInput = document.querySelector("input");
const welcomPhrase = document.querySelector("[data-nick-name = phrase]");
const nickName = localStorage.getItem(NICKNAME_LS_KEY);

// script 로드 시 nickName 존재 여부에 따라 예외처리
if (nickName === null) {
  nickNameForm.addEventListener("submit", onNickNameSubmit);
} else {
  paintWelcomePhrase(nickName);
  nickNameForm.classList.add(HIDDEN_CLASS);
  loadUserContribution(nickName);
}

// TextFiled에 닉네임이 Submit 되었을 때
const onNickNameSubmit = (event) => {
  event.preventDefault();

  const nickName = nickNameInput.value;
  paintWelcomePhrase(nickName);
  loadUserContribution(nickName);
  localStorage.setItem(NICKNAME_LS_KEY, nickName);

  nickNameForm.classList.add(HIDDEN_CLASS);
};

// 환영문구에 텍스트 삽입 및 display 변경
const paintWelcomePhrase = (nickName) => {
  welcomPhrase.innerText = `HI ${nickName}`;
  welcomPhrase.classList.remove(HIDDEN_CLASS);
};
