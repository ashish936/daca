
// var counter = 0;
// var timeleft = 75;
// var time = document.getElementById('timer');
// console.log(time);

// function convertSeconds(s) {
//     var min = Math.floor(s / 60);
//     var sec = s % 60;
//     return min.toPrecision(2) + ':' + sec.toPrecision(2)
// }

// function timeLeft(){
//     rem = timeleft - counter;
//     time.innerText = convertSeconds(rem);
//     counter++;
// }

// setInterval(timeLeft,1000);
let counter = 0;
let min,hour;


function seconds(counter) {
    // if(counter < 60) return counter;
    // else {
    //     //counter = Math.floor(counter/60); // this is for minutes
    //}
    return (counter % 60) + 1;
    
}
function minutes(counter) {
    // let min = 0;
    // if(counter < 60) return counter =0;
    // else return (Math.floor(counter/60)) % 60;
    return ((Math.floor(counter/60)) % 60);
}

function hours(counter) {
    return ((Math.floor(counter/3600)) % 60);

}

function timeLeft() {
    
    counter++;
    console.log(counter);
    const mainTimer = document.querySelector('.main-timer');
    //mainTimer.innerHTML = counter;
    mainTimer.innerHTML = `${hours(counter)}h  ${minutes(counter)}m  ${seconds(counter)}s`
}

setInterval(timeLeft, 1000);