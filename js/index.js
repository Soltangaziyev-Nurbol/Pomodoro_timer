let workMinutesInput = document.getElementById("work-minutes");
let breakMinutesInput = document.getElementById("break-minutes");
let timer = document.getElementById("timer");
let startButton = document.getElementById("start-button");
let stopWorkButton = document.getElementById("stop-button--work");
let stopBreakButton = document.getElementById("stop-button--break");
let resetButton = document.getElementById("reset-button");
let increaseWorkBtn = document.getElementById("increase-work-btn");
let decreaseWorkBtn = document.getElementById("decrease-work-btn");
let increaseBreakBtn = document.getElementById("increase-break-btn");
let decreaseBreakBtn = document.getElementById("decrease-break-btn");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let timerText = document.getElementById("timer-text");
let work = true;
let intervalId;
let workMinutes = parseInt(workMinutesInput.innerHTML);
let breakMinutes = parseInt(breakMinutesInput.innerHTML);
let tabBtn = document.querySelectorAll(".item");
let tabText = document.querySelectorAll(".content-item");
let greenTab = document.querySelectorAll(".green__tab");
let purpleTab = document.querySelectorAll(".purple__tab");
let blueTab = document.querySelectorAll(".blue__tab");
let body = document.getElementById("body");
let pulse = document.getElementById("pulse");




function startWorkTimer() {
	stopBreakButton.classList.add("disabled");
	stopWorkButton.classList.remove("disabled");
	timerText.innerHTML = "Concentrate on work";
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
	stopWorkButton.classList.add("disabled");
	stopBreakButton.classList.remove("disabled");
	timerText.innerHTML = "Take a break";
  let breakeSeconds = 0;
  clearInterval(intervalId);
  intervalId = setInterval(function () {
    mins.innerHTML = `${addZero(breakMinutes)}`;
		secs.innerHTML = `${addZero(breakeSeconds)}`;
    if (breakeSeconds == 0 && breakMinutes > 0) {
      breakeSeconds = 59;
      breakMinutes--;
    } else if (breakeSeconds == 0 && breakMinutes == 0) {
      clearInterval(intervalId);
			breakMinutes = parseInt(breakMinutesInput.innerHTML);
      startWorkTimer();
    } else {
      breakeSeconds--;
    }
  }, 1);
}

increaseWorkBtn.addEventListener("click", function () {
	if (workMinutes >= 59) {
    increaseWorkBtn.classList.add("vanished");
		workMinutes = 60;
  } else  workMinutes++;
  workMinutesInput.innerHTML = workMinutes;  
	changeNum();
  trigger(decreaseWorkBtn);
});

decreaseWorkBtn.addEventListener("click", function () {
	if (workMinutes <= 16) {
    decreaseWorkBtn.classList.add("vanished");
		workMinutes = 15;
  } else  workMinutes--;
  workMinutesInput.innerHTML = workMinutes;
	changeNum();  
  trigger(increaseWorkBtn);
});

increaseBreakBtn.addEventListener("click", function () {
	if (breakMinutes >= 14) {
    increaseBreakBtn.classList.add("vanished");
		breakMinutes = 15;
  } else  breakMinutes++;
  breakMinutesInput.innerHTML = addZero(breakMinutes);
	
	trigger (decreaseBreakBtn);
});
decreaseBreakBtn.addEventListener("click", function () {
	if (breakMinutes <= 6) {
    decreaseBreakBtn.classList.add("vanished");
		breakMinutes = 5;
  } else  breakMinutes--;
  breakMinutesInput.innerHTML = addZero(breakMinutes);
	
	trigger(increaseBreakBtn);
});

const trigger = function (a) {
  a.classList.remove("vanished");
};

const addZero = function (a) {
  if (a < 10) {
    a = `0${a}`;
    return a;
  } else {
    return a;
  }
};

const changeNum = function () {
	mins.innerHTML=`${addZero(workMinutes)}`;
};

resetButton.addEventListener("click", function () {
	workMinutes = parseInt(workMinutesInput.innerHTML);	
	mins.innerHTML = `${addZero(workMinutes)}`;
	secs.innerHTML = `00`;
	work = true;
	timerText.innerHTML = "Ready?";
});


startButton.addEventListener("click", function() {
	if (work === true) {
		startWorkTimer();
	} else startBreakTimer()
	startButton.classList.add("disabled");
	resetButton.classList.add("disabled");
});

stopWorkButton.addEventListener("click", function () {
	work = true;
  clearInterval(intervalId);
	startButton.classList.remove("disabled");
	stopWorkButton.classList.add("disabled");
	resetButton.classList.remove("disabled");
});

stopBreakButton.addEventListener("click", function () {
	work = false;
  clearInterval(intervalId);
	startButton.classList.remove("disabled");
	stopBreakButton.classList.add("disabled");
	resetButton.classList.remove("disabled");
});

// Tabs code

tabBtn.forEach(function (tab) {
  tab.addEventListener("click", function () {
    let activeTab = tab;    
    tabBtn.forEach(function (tab) {
      tab.classList.remove("active"); 
			body.classList.remove("purple"); 
			body.classList.remove("blue");
			workMinutesInput.classList.remove("purple");
			breakMinutesInput.classList.remove("purple");
    });   
    activeTab.classList.add("active");
  });  
});

purpleTab[0].addEventListener("click", function(){
	body.classList.add("purple");
	workMinutesInput.classList.add("purple");
	breakMinutesInput.classList.add("purple");
	pulse.classList.add("purple");
	timer.classList.add("purple");
	pulse.classList.add("pulse--purple");
});

blueTab[0].addEventListener("click", function(){
  body.classList.add("blue");
});