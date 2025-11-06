let steps = 0;
const stepCountEl = document.getElementById("step-count");
const resetBtn = document.getElementById("reset");

let NewX = 0, NewY = 0, NewZ = 0;
let threshold = 12; 
function handleMotion(event) {
  const { x, y, z } = event.accelerationIncludingGravity;
  const diff = Math.abs(x - NewX) + Math.abs(y - NewY) + Math.abs(z - NewZ);

  if (diff > threshold) {
    steps++;
    stepCountEl.textContent = `${steps} Steps`;
  }

  NewX = x;
  NewY = y;
  NewZ = z;
}

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", handleMotion, true);
} else {
  alert("Your device doesn't support motion sensor");
}

resetBtn.addEventListener("click", () => {
  steps = 0;
  stepCountEl.textContent = `${steps} Steps`;
});
