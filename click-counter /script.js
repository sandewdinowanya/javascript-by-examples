let count = document.getElementById("count");
let btn = document.getElementById("add");
let increaseCount = 0;

// Add event listner
btn.addEventListener("click",function(){
  increaseCount++;
  count.textContent=increaseCount;
});
