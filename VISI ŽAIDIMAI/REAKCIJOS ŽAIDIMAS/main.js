const mainMenu = document.querySelector(".main-menu");
const clickableArea = document.querySelector(".clickable-area");
const message = document.querySelector(".clickable-area .message");
const endscreen = document.querySelector(".end-screen");
const reactionTimeText = document.querySelector(".end-screen .reaction-time-text");
const playAgainBtn = document.querySelector(".end-screen .play-again-btn");



let timer;
let greenDisplayed;
let timeNow;
let waitingForStart;
let waitingForGreen;
let scores;

const init = () => {
    greenDisplayed = false;
    waitingForStart = false;
    waitingForGreen = false;
    scores = [];
}

init();

const setGreenColor = () => {
    clickableArea.style.backgroundColor = "#00ff4c";
    message.innerHTML = "Spauskite dabar!";
    message.style.color = "#111";
    greenDisplayed = true;
    timeNow = Date.now();
}
const startGame = () =>  {
    clickableArea.style.backgroundColor = "#c1121f";
    message.innerHTML = "Laukite žalios spalvos.";
    message.style.color = "#fff";

    let randomNumber = Math.floor(Math.random() *3000 + 3000);
    timer = setTimeout (setGreenColor, randomNumber);

    waitingForStart = false;
    waitingForGreen = true;
}
timer = setTimeout (setGreenColor, 4000);
mainMenu.addEventListener("click", () => {
mainMenu.classList.remove("active");
startGame();
})

const endGame = () => {
    endscreen.classList.add("active");
    clearTimeout(timer);

    let total = 0;

    scores.forEach( (s) => {
        total += s;
    })

    let averageScore = Math.round(total / scores.length);

    reactionTimeText.innerHTML = `${averageScore} ms`;
}

const displayReactionTime = (rt) => {
    clickableArea.style.backgroundColor = "#faf0ca";
    message.innerHTML = `<div class='reaction-time-text'>${rt} ms</div>Paspauskite, kad tęstumėte.`;
    greenDisplayed = false;
    waitingForStart = true;
    scores.push(rt);
    if (scores.length >= 3){
        endGame();
    }
}

const displayTooSoon = () => {
    clickableArea.style.backgroundColor = "#faf0ca";
    message.innerHTML = "Palaukite žalios spalvos. Paspauskite, norėdami bandyti dar kartą."
    message.style.color = "#111";
    waitingForStart = true;
    clearTimeout (timer);
}

clickableArea.addEventListener("click", () => {
    if (greenDisplayed) {
        let clickTime = Date.now();
        let reactionTime = clickTime - timeNow;
        displayReactionTime(reactionTime);
        return;
    }
    if (waitingForStart){
        startGame();
        return;
    }
    if (waitingForGreen){
        displayTooSoon();
    }
})

playAgainBtn.addEventListener("click", () => {
    endscreen.classList.remove("active");
    init();
    startGame();
})