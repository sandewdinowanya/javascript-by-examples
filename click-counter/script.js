let value = document.getElementById("counter");
let button = document.getElementById("add");

let count = 0;

button.addEventListener("click", function () {
    count++;
    value.textContent = count;
});
