setInterval(getTime, 1000);
setInterval(alarm, 1000);
setInterval(hourAlarm, 1000);

function getTime() {
  const d = new Date();
  const minute = d.getMinutes();
  const hour = d.getHours();
  const second = d.getSeconds();
  document.getElementById("time").innerHTML = "The current time is "+ d.toLocaleTimeString();
  document.getElementById("second").innerHTML = second;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("title").innerHTML = "Time Chimes ("+ d.toLocaleTimeString()+")";
}

function alarm() {
  const hourMelody = document.getElementById("hourMelody");
  const quarterMelody = document.getElementById("quarterMelody");
  const halfMelody = document.getElementById("halfMelody");
  const threeQuarterMelody = document.getElementById("threeQuarterMelody");
  const hourChime = document.getElementById("hourChime");
  const hourFinal = document.getElementById("hourFinal");
  const d = new Date();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  if (minute === 0 && second === 0) {
    hourMelody.play();
  } 
  if (minute === 15 && second === 0) { 
    quarterMelody.play();
  }
  if (minute === 30 && second === 0) {
    halfMelody.play();
  }
  if (minute === 45 && second === 0) {
    threeQuarterMelody.play();
  }
}

//Really stupid harcoded way to do the hour chimes.
function hourAlarm() {
  const hourChimeAudio = document.getElementById("hourChime");
  const hourFinal = document.getElementById("hourFinal");
  const d = new Date();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  const hour = d.getHours();
    if (minute === 0 && second === 30 && ((hour >= 1 && hour <= 12) || (hour >= 13 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 33 && ((hour >= 2 && hour <= 13) || (hour >= 14 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 36 && ((hour >= 3 && hour <= 14) || (hour >= 15 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 39 && ((hour >= 4 && hour <= 12) || (hour >= 16 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 42 && ((hour >= 5 && hour <= 17) || (hour >= 18 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 45 && ((hour >= 6 && hour <= 18) || (hour >= 19 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 48 && ((hour >= 7 && hour <= 19) || (hour >= 20 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 51 && ((hour >= 8 && hour <= 12) || (hour >= 21 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 54 && ((hour >= 9 && hour <= 22) || (hour >= 22 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 57 && ((hour >= 10 && hour <= 23) || (hour >= 23 && hour <= 24))) {
    hourChime.play();
  }
    if (minute === 0 && second === 60 && ((hour >= 11 && hour <= 24) || (hour >= 0 && hour <= 12))) {
    hourChime.play();
  }
    if (minute === 1 && second === 2 && (hour === 12 || hour === 0)) {
    hourFinal.play();
  }
  console.log("Hour: " + hour + " Minute: " + minute + " Second: " + second);
}