import { HIDDEN_CLASS } from "./constants.js";

const squares = document.querySelector(".squares");
const contributeBoard = document.querySelector("[data-board]");

// 인자로 전달 받은 User `Nickname`으로 Contribution 데이터 조회
export async function loadUserContribution(username) {
  let data = await (
    await fetch(
      `https://corsanywhere.herokuapp.com/https://github-contributions-api.deno.dev/${username}.json`
    )
  ).json();
  insertSquareData(data);
  contributeBoard.classList.remove(HIDDEN_CLASS);
}

// Contribue Board의 `Square` 컴포넌트생성 및 데이터 삽입
const insertSquareData = (source) => {
  let contributionList = [];

  // Filter,  주(7일)로 나누어진 오브젝트를 꺼내서 배열에 저장
  source.contributions.map((ele) => {
    for (let i = 0; i < 7; i++) {
      contributionList.push(ele[i]);
    }
  });

  // 필터링된 배열 데이터를 기준으로 `Square` 컴포넌트 생성
  contributionList.map((ele) => {
    squares.insertAdjacentHTML(
      "beforeend",
      `<li data-level="${ele.contributionLevel}"></li>`
    );
  });
};

// squares.insertAdjacentHTML(
//     "beforeend",
//     `<li data-level="${ele.contributionLevel}">${ele.date.substring(8)}</li>`
//   );
