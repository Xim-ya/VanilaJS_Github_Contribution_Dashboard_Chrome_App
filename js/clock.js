const clock = document.querySelector("[data-clock]");

const setTimeHandler = () => {
  const date = new Date();
  clock.innerText = `${digitFormatter(date.getHours())} : ${digitFormatter(
    date.getMinutes()
  )} : ${digitFormatter(date.getSeconds())}`;
};

// chnage digit, ex) 5 -> 05
const digitFormatter = (date) => {
  return String(date).padStart(2, "0");
};

setTimeHandler();
setInterval(setTimeHandler, 1000);
