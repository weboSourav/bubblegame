function makeBubble(){
let clutter = "";
for(var i = 1; i<=160;i++){
    var rn = Math.floor(Math.random()*10)
 clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
function runTimer(){
setInterval(function(){
    if(timer>0){
timer--;
    }
document.querySelector("#timerval").textContent = timer;
},1000);





}
makeBubble();
runTimer();