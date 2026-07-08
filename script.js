setInterval(getTime, 1000);
setInterval(alarm, 60000);

function getTime() {
  const d = new Date();
  const minute = d.getMinutes();
  const hour = d.getHours();
  document.getElementById("time").innerHTML = "The current time is "+ d.toLocaleTimeString();
  document.getElementById("minute").innerHTML = minute;
}

function alarm() {
  const hourMelody = document.getElementById("hourMelody");
  const quarterMelody = document.getElementById("quarterMelody");
  const halfMelody = document.getElementById("halfMelody");
  const threeQuarterMelody = document.getElementById("threeQuarterMelody");
  const minute = 0
  if (minute === 0) {
    hourMelody.play();
  }
  if (minute === 15) {
    quarterMelody.play();
  }
  if (minute === 30) {
    halfMelody.play();
  }
  if (minute === 45) {
    threeQuarterMelody.play();
  }
}