var timer = document.querySelector("#timer")
var start = document.querySelector("#start")
var pause = document.querySelector("#pause")
var reset = document.querySelector("#reset")

var seconds = 0

start.addEventListener("click", startTime)
pause.addEventListener("click", pauseTime)
reset.addEventListener("click", resetTime)

function startTime(){
  startInterval = window.setInterval(startTimer, 1000);

}

function pauseTime(){
  clearInterval(startInterval)
  timer.innerHTML = "Time Elapsed: " + seconds
}

function resetTime(){
  clearInterval(startInterval)
  seconds = 0
  timer.innerHTML = "Stop Watch";

}

function startTimer(){
  var timeElapsed = "Seconds: " + seconds;
  timer.innerHTML = timeElapsed;
  seconds++
}
