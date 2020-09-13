
var counter = 0;
var timeleft = 75;
var time = document.getElementById('timer');
console.log(time);

function convertSeconds(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min.toPrecision(2) + ':' + sec.toPrecision(2)
}

function timeLeft(){
    rem = timeleft - counter;
    time.innerText = convertSeconds(rem);
    counter++;
}

setInterval(timeLeft,1000);