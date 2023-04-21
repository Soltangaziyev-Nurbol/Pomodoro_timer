let workMinutesInput = document.getElementById("work-minutes");
let breakMinutesInput = document.getElementById("break-minutes");
let timer = document.getElementById("timer");
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let increaseWorkBtn = document.getElementById("increase-work-btn");
let decreaseWorkBtn = document.getElementById("decrease-work-btn");
let increaseBreakBtn = document.getElementById("increase-break-btn");
let decreaseBreakBtn = document.getElementById("decrease-break-btn");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let intervalId;
let workMinutes = parseInt(workMinutesInput.innerHTML);
let breakMinutes = parseInt(breakMinutesInput.innerHTML);

function startWorkTimer() {
  let seconds = 0;
  clearInterval(intervalId);
  intervalId = setInterval(function () {
    mins.innerHTML = `${addZero(workMinutes)}`
		secs.innerHTML = `${addZero(seconds)}`;
    if (seconds == 0 && workMinutes > 0) {
      seconds = 59;
      workMinutes--;
    } else if (seconds == 0 && workMinutes == 0) {
      clearInterval(intervalId); 
			workMinutes = parseInt(workMinutesInput.innerHTML);     
      startBreakTimer();
    } else {
      seconds--;
    }
  }, 1);
}

function startBreakTimer() {
  let seconds = 0;
  clearInterval(intervalId);
  intervalId = setInterval(function () {
    mins.innerHTML = `${addZero(breakMinutes)}`
		secs.innerHTML = `${addZero(seconds)}`;
    if (seconds == 0 && breakMinutes > 0) {
      seconds = 59;
      breakMinutes--;
    } else if (seconds == 0 && breakMinutes == 0) {
      clearInterval(intervalId);
			breakMinutes = parseInt(breakMinutesInput.innerHTML);
      startWorkTimer();
    } else {
      seconds--;
    }
  }, 1);
}

increaseWorkBtn.addEventListener("click", function () {
  workMinutes++;
  workMinutesInput.innerHTML = workMinutes;
  if (workMinutes == 60) {
    increaseWorkBtn.classList.add("disabled");
  }
  trigger(decreaseWorkBtn);
});

decreaseWorkBtn.addEventListener("click", function () {
  workMinutes--;
  workMinutesInput.innerHTML = workMinutes;
  if (workMinutes == 15) {
    decreaseWorkBtn.classList.add("disabled");
  }
  trigger(increaseWorkBtn);
});

increaseBreakBtn.addEventListener("click", function () {
  breakMinutes++;
  breakMinutesInput.innerHTML = addZero(breakMinutes);
});
decreaseBreakBtn.addEventListener("click", function () {
  breakMinutes--;
  breakMinutesInput.innerHTML = addZero(breakMinutes);
});

const trigger = function (a) {
  a.classList.remove("disabled");
};

const addZero = function (a) {
  if (a < 10) {
    a = `0${a}`;
    return a;
  } else {
    return a;
  }
};


startButton.addEventListener("click", startWorkTimer);
stopButton.addEventListener("click", function () {
  clearInterval(intervalId);
});
