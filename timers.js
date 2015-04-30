var timer = document.querySelector("#timer")
var start = document.querySelector("#start")
var pause = document.querySelector("#pause")
var reset = document.querySelector("#reset")

var seconds = 0

start.addEventListener("click", startTime)
pause.addEventListener("click", pauseTime)
reset.addEventListener("click", resetTime)

function startTime(){
  window.setInterval(startTimer, 1000);
  // timer.change the text in to 1 s ...
  // i = 0
  // time = i + 1
  // console.log(time)
  // will it start at 0 everytime!?
  // there has to be an arguement, the currentTime
}

function pauseTime(){
  console.log("heyooo")

  clearInterval(intervalID)
}

function resetTime(){
  console.log("heyooo")

  window.clearInterval(startTime);
  timer.innerHTML = "Stop Watch";
  seconds = 0

}

function startTimer(){
  console.log("heyooo")

  var timeElapsed = "Time elapsed: " + seconds;
  timer.innerHTML = timeElapsed;
  seconds++
}
