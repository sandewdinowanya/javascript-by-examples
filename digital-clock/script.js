let clock = document.getElementById("clock");

function updateClock(){
    let now = new Date();
    let seconds = now.getSeconds().toString().padStart(2,"0");
    let minutes = now.getMinutes().toString().padStart(2,"0");
    let hours = now.getHours().toString().padStart(2,"0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(updateClock,1000);

updateClock();