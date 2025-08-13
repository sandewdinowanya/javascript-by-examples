let value = document.getElementById("counter");
let button = document.getElementById("button");

let count = 0;

button.addEventListener("click", function(){
    count++;
    value.textContent = count;
});
