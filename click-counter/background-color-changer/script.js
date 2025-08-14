let colorbtn = document.getElementById("colorbtn");
let colorvalue = document.getElementById("colorvalue");

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

colorbtn.addEventListener("click", function(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorvalue.textContent = newColor;
});