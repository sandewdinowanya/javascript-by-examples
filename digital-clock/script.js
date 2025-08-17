let clock = document.getElementById("clock");
let format = document.getElementById("format");
let date = document.getElementById("day-and-date");

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

function changeColor(){
    let color = "#"
    let value = "012345678ABCDEF";

    for(let i = 0; i < 6; i++){
        color += value[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
};

function getDate(){
    let dayAndDate = new Date();
    date.textContent = dayAndDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};

setInterval(updateClock,1000);
setInterval(changeColor, 5000);

updateClock();
getDate();