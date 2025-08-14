let value = document.getElementById("counter");
let add = document.getElementById("add");
let reset = document.getElementById("reset");

let count = 0;

add.addEventListener("click", function () {
    count++;
    value.textContent = count;
});

reset.addEventListener("click",function(){
    value.textContent = 0;
});