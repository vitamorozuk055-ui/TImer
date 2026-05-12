const mainTitle = document.getElementById("main-title");
const countDownDisplay = document.getElementById("countdown-display");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const countDownMessage = document.getElementById("countdown-message");
const stopwatchDisplay = document.getElementById("stopwatch-display");
const swMinutesSpan= document.getElementById("sw-minutes");
const swSecondSpan = document.getElementById("sw-seconds");
const stopwatchMessage = document.getElementById("stopwatch-message");


let countdownInterval;
let stopwatchInterval;
let stopwatchStartTime;

const formatTime = (time) => String(time).padStart(2,0);


function startCountdown(durationSeconds) {
    const targetDate = new Date().getTime() + durationSeconds * 1000;
    if(countdownInterval) clearInterval(countdownInterval);
    if(stopwatchInterval) clearInterval(stopwatchInterval);

    countDownDisplay.classList.remove("hidden");
    countDownMessage.classList.remove("hidden");
    stopwatchDisplay.classList.add("hidden");
    stopwatchMessage.classList.add("hidden");

    mainTitle.textContent = "timer untill";
    countDownMessage.textContent = "";

    countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeLeft = targetDate - currentTime;

        if(timeLeft < 0) {
            clearInterval(countdownInterval);
            countDownMessage.textContent = "Time's up!";
            hoursSpan.textContent= "00";
            minutesSpan.textContent = "00";
            secondsSpan.textContent = "00";
        } else {
            const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            hoursSpan.textContent = formatTime(hours);
            minutesSpan.textContent = formatTime(minutes);
            secondsSpan.textContent = formatTime(seconds);
        }
    }, 1000);
}


function startStopwatch() {
    stopwatchStartTime = new Date().getTime();

    countDownDisplay.classList.add("hidden");
    countDownMessage.classList.add("hidden");
    stopwatchDisplay.classList.remove("hidden");
    stopwatchMessage.classList.remove("hidden");

    mainTitle.textContent = "the lesson stats in";
    stopwatchMessage.textContent = " started extra time";

    stopwatchInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - stopwatchStartTime;

        const totalSeconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        swMinutesSpan.textContent = formatTime(minutes);
        swSecondSpan.textContent = formatTime(seconds);
    }, 1000);
}

startCountdown(40);