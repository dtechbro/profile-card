// Display current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  timeElement.textContent = Date.now();
}

// Initial render
updateTime();

// Optional: Update every second
setInterval(updateTime, 1000);