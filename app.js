// console.log("hello world");


let mainTimer = document.querySelector("#display")
let secondsDisplay = document.querySelector("#secondsDisplay") 
let minutesDisplay = document.querySelector("#minutesDisplay") 
let hoursDisplay = document.querySelector("#hoursDisplay") 

let seconds = 0;
let minutes = 0;
let hours = 0;

let checkTimer;



// Start Interval

function startTheInterval(){

    checkTimer = setInterval(function (){
        secondsDisplay.innerHTML = seconds;
        timer()
    } , 1000); 
    
}

// Add Plus One Every Time It Reaches 60 Seconds


function timer(){
    seconds += 1;
    if(seconds === 60){
        minutes += 1;
        seconds = 0;
    
    if(minutes === 60){
        hours += 1;
        minutes = 0;
    }
}

// Zero Logic Function 

let addZeroHours = hours < 10 ? "0" + hours : hours;
let addZeroMinute = minutes < 10 ? "0" + minutes : minutes;
let addZeroSecond = seconds < 10 ? "0" + seconds : seconds;
    secondsDisplay.innerHTML = addZeroSecond;
    minutesDisplay.innerHTML = addZeroMinute;
    hoursDisplay.innerHTML = addZeroHours; 

}







// Stop Interval

function stopTheInterval(){

    clearInterval(checkTimer)

}


// Reset Interval


function resetTheInterval() {
    
    clearInterval(checkTimer);
    seconds = 0
    hours = 0
    minutes = 0
    secondsDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    hoursDisplay.innerHTML = "00";

}
