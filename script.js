var timer = 10;
var score = 0;
var hitrn = 0;
function increaseScore(){
score += 10;
document.querySelector("#scoreval").textContent = score;





}
function getNewHit(){

hitrn = Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent = hitrn;



}



function makeBubble() {
    let clutter = "";
    for (var i = 1; i <= 160; i++) {
        var rn  = Math.floor(Math.random() * 10); // random 0–9
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}



function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click" , function(details){

var clickedNum = (Number(details.target.textContent));
if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}


})

makeBubble();
runTimer();
getNewHit();