let clock = document.getElementById("clock");
let format = document.getElementById("format");

function updateClock(){
    let now = new Date();
    let seconds = now.getSeconds().toString().padStart(2,"0");
    let minutes = now.getMinutes().toString().padStart(2,"0");
    let hours = now.getHours();
    clock.textContent = `${minutes}:${seconds}:${format.textContent}`;
    
    let period = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    hours = hours.toString().padStart(2, "0");

    // Update display
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    format.textContent = period;
};

setInterval(updateClock,1000);

updateClock();