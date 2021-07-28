const brush = document.querySelector('.fa-paint-brush');
const question = document.querySelector('.fa-question');

const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const btnArchive = document.querySelector('.archive');

const timer = document.querySelector('.timer');
const timerStop = document.querySelector('.timer_stop')
const timerList = document.querySelector('.timer_list');

let counter = 0;
let minutes = 0;
let seconds = 0;
let lastTime = [];

const start = () => {
    clearInterval(counter);
    counter = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            timer.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            timer.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            timer.textContent = `${minutes}:00`
        }
    }, 1000);

}

const pauseInterval = () => {
    clearInterval(counter);
}

const handleStop = () => {

    timerStop.textContent = `Ostatni czas: ${timer.textContent}`;

    if(timer.textContent !== '0:00'){
        timerStop.style.visibility = 'visible';
        lastTime.push(timer.textContent);
        console.log(lastTime);
    }

    clearStock();
}

const handleReset = () =>{
    timerStop.style.visibility = 'hidden';
    lastTime = [];
    clearStock();
}

const clearStock = () =>{
    clearInterval(counter);
    timer.textContent = '0:00';
    timerList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const showArchive = () =>{
    let number = 1;
    lastTime.forEach(time =>{
        const newLi = document.createElement('li');
        newLi.innerHTML = `Pomiar ${number}: <span>${time}</span>`;
        timerList.appendChild(newLi);
        number++;
    })
}

btnPlay.addEventListener('click', start);
btnPause.addEventListener('click', pauseInterval);
btnStop.addEventListener('click',handleStop);
btnReset.addEventListener('click', handleReset);
btnArchive.addEventListener('click', showArchive);