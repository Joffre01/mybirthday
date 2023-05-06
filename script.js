const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl= document.getElementById('seconds');
const newYears ='2 jan 2024';

function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();
    const allSeconds= (newYearsDate - currentDate)/1000;
    const days= Math.floor(allSeconds/3600/24);
    const hours= Math.floor(allSeconds/3600) %24;
    const mins= Math.floor(allSeconds/60) %60;
    const seconds= Math.floor(allSeconds %60);

    daysEl.innerHTML= days;
    hoursEl.innerHTML= hours;
    minsEl.innerHTML= mins;
    secondsEl.innerHTML= seconds;
}
function formatTime(){
    return time < 10 ? '0${time}': time;
}

//initial call
countdown();
setInterval(countdown, 1000);
