const startButton = document.getElementById("startbtn");
const video = document.getElementById("myVideo");
const mainMenu = document.getElementById("main-menu");
const wrapper = document.querySelector(".wrapper");
const rulesButton = document.getElementById("rulesbtn");
const taisykles = document.getElementById("taisykles");
const backButton = document.getElementById("backbtn");
const timeValue = document.getElementById("laikas");
const moves = document.getElementById("ejimai");
const spejimas = document.getElementById("skaicius");


let seconds = 0, minutes = 0;
let movesCount = 0;


startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    mainMenu.classList.add("hide");
    video.classList.add("hide");
    wrapper.classList.remove("hide");
    let numeris = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
    console.log(numeris);
    interval = setInterval(timeGenerator, 1000);
    moves.innerHTML = `<span>Spėjimų skaičius:</span> ${movesCount}`;
});


const inputValue = spejimas.value;
console.log(inputValue);

rulesButton.addEventListener("click", () => {
    mainMenu.classList.add("hide");
    video.classList.add("hide");
    taisykles.classList.remove("hide");
    wrapper.classList.remove("wrapper");
    wrapper.classList.add("hide");
});

backButton.addEventListener("click", () =>{
    taisykles.classList.add("hide");
    mainMenu.classList.remove("hide");
    video.classList.remove("hide");
})


const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Laikas:</span>${minutesValue}:${secondsValue}`;
  };
  const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Ejimai:</span>${movesCount}`;
  };

