let value = document.getElementById("counter");
let add = document.getElementById("add");
let reset = document.getElementById("reset");

let count = 0;

add.addEventListener("click", function () {
    count++;
    value.textContent = count;
    let color = getRandomColor();
    document.body.style.backgroundColor = color;
});

reset.addEventListener("click",function(){
    count = 0;
    value.textContent = count;
    document.body.style.backgroundColor = "#FFFFFF";
});


function getRandomColor(){
    let colorValue = "#";
    let value = "012345678ABCDEF";

    for(let i=0; i<6; i++){
        colorValue += value[Math.floor(Math.random()*16)];
    }
    return colorValue;
}

add.addEventListener("click", function(){
        let color = getRandomColor();
        document.body.style.backgroundColor = color;
});

