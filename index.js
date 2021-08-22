function increment(){
    let countE1 =document.getElementById("count");
    let currentCount=countE1.innerText;
    let updateCount=parseInt(currentCount)+1;
    countE1.innerHTML=updateCount;
}
function decrement(){
    let countE1 =document.getElementById("count");
    let currentCount=countE1.innerText;
    let updateCount=parseInt(currentCount)-1;
    countE1.innerHTML=updateCount;
}
function reset(){
    let countE1 =document.getElementById("count");
    countE1.innerHTML=0;
}