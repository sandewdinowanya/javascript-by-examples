// let colorbtn = document.getElementById("colorbtn");
let colorvalue = document.getElementById("colorvalue");

let startbutton = document.getElementById("startbutton");
let endbutton = document.getElementById("endbutton"); 

let intervalId = null;

function getRandomColor (){
    let letters = "012345678ABCDEF";
    let color = "#"; 
    
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
        let ranval = Math.floor(Math.random()*16);
        console.log(ranval);
    }
    return color;
};

startbutton.addEventListener("click",function(){
    if(intervalId === null){
        intervalId = setInterval(function(){
            let newColor=getRandomColor();
            document.body.style.backgroundColor = newColor;
            colorvalue.textContent = newColor;
        }, 1000)
    }
});

endbutton.addEventListener("click",function(){
    clearInterval(intervalId);
    intervalId = null;
});

colorbtn.addEventListener("click", function(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorvalue.textContent = newColor;
});