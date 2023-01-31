const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
const apdateUI = document.querySelector('.text');

let timerId = null;

startBtn.addEventListener("click", () => {
   
    timerId = setInterval(() => {
      apdateUI.insertAdjacentHTML(
        "afterbegin",
        `I love async JS!  ${Math.random()} <br>`
      );
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
     apdateUI.insertAdjacentHTML(
       "afterbegin",
       `Interval with id ${timerId} has stopped! <br>`
     );
  console.log(`Interval with id ${timerId} has stopped!`);
});
