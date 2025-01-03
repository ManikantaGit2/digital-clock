function updateClock() {
    const clockElement = document.getElementById('clock');
    
    // Get the current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format the time
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Update the clock element
    clockElement.textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock
  updateClock();