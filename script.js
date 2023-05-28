let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function display() {
  let date = new Date();
  // Now getting hour, minute and seconds from Date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourRotation = 30 * hh + mm / 2;
  let minuteRotation = 6 * mm;
  let secondsRotation = 6 * ss;

  hr.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minuteRotation}deg)`;
  sec.style.transform = `rotate(${secondsRotation}deg)`;
}
setInterval(display, 1000);
