let steps = 0;
const stepCountEl = document.getElementById("step-count");
const resetBtn = document.getElementById("reset");

let lastX = 0, lastY = 0, lastZ = 0;
let threshold = 12; 
function handleMotion(event) {
  const { x, y, z } = event.accelerationIncludingGravity;
  const diff = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);

  if (diff > threshold) {
    steps++;
    stepCountEl.textContent = `${steps} Steps`;
  }

  lastX = x;
  lastY = y;
  lastZ = z;
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
