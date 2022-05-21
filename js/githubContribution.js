const squares = document.querySelector(".squares");
let boardData;

async function getContributions(username) {
  let data = await (
    await fetch(
      `https://corsanywhere.herokuapp.com/https://github-contributions-api.deno.dev/${username}.json`
    )
  ).json();
  boardData = data;

  //   console.log(data.contributions.length * 7);
}
getContributions("Xim-ya").then(() => {
  insertBoardData();
});

const makeList = () => {};

// Add squares
const insertBoardData = () => {
  const data = boardData.contributions;
  console.log(data);
  let contributionList = [];

  //  Maek Square Unit

  data.map((ele) => {
    for (let i = 0; i < 7; i++) {
      contributionList.push(ele[i]);
      //   contributionList.push(new Contribution(ele[i].color, ele[i].contributionCount, ele[i].contributionLevel, ele[i].date))
    }
  });

  console.dir(contributionList);
  contributionList.map((ele) => {
    squares.insertAdjacentHTML(
      "beforeend",
      `<li data-level="${ele.contributionLevel}">${ele.date.substring(8)}</li>`
    );
  });
};

class Contribution {
  constructor(color, count, level, date) {
    this.color = color;
    this.count = count;
    this.level = level;
    this.date = date;
  }
}

let date = "2022-01-22";
console.log(date.substring(8));
