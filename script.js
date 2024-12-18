let timer;
let isRunning = false;
let elapsedTime = 0;

const homeCounter = document.querySelector("#home-counter")
const guestCounter = document.querySelector("#guest-counter")
const btn1 = document.querySelector("#add1")
const btn2 = document.querySelector("#add2")
const btn3 = document.querySelector("#add3")
const btn4 = document.querySelector("#add1-g")
const btn5 = document.querySelector("#add2-g")
const btn6 = document.querySelector("#add3-g")
const newGame = document.querySelector("#new-game")
const display = document.querySelector("#display")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")
const addFoul = document.querySelector("#foulAdd")
const removeFoul = document.querySelector("#foulRemove")
const addPeriod = document.querySelector("#periodAdd")
const removePeriod = document.querySelector("#periodRemove")
const foulCounter = document.querySelector("#foul")
const periodCounter = document.querySelector("#period")

const formatTime = (time) => {
// const hours = String(Math.floor(time / 3600)).padStart(2, "0"); Optional code (Note: if you want to uncomment it make sure to also add ${hours} in the return.)
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0")
    return `${minutes} ${seconds}`;
}

const updateTime = () => {
    display.textContent = formatTime(elapsedTime)
}

startButton.addEventListener('click', () => {
    if(!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime++;
            updateTime();
        }, 1000)
    }
});

stopButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
});

resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateTime();
});

updateTime();

let count1 = 0
let count2 = 0
let foul = 0
let period = 0

// btn1.addEventListener('click', function() {
//     count1 += 1
//     homeCounter.textContent = count1
// })

// btn2.addEventListener("click", function() {
//     count1 += 2
//     homeCounter.textContent = count1
// })

function add1() {
    btn1.addEventListener('click', () => {
        count1 += 1
        homeCounter.textContent = count1
    })
}

function add2() {
    btn2.addEventListener('click', () => {
        count1 += 2
        homeCounter.textContent = count1
    })
}

function add3() {
    btn3.addEventListener('click', () => {
        count1 += 3
        homeCounter.textContent = count1
    })
}

function add1g() {
    btn4.addEventListener('click', () => {
        count2 += 1
        guestCounter.textContent = count2
    })
}

function add2g() {
    btn5.addEventListener('click', () => {
        count2 += 2
        guestCounter.textContent = count2
    })
}

function add3g() {
    btn6.addEventListener('click', () => {
        count2 += 3
        guestCounter.textContent = count2
    })
}

function newGameCounter() {
    newGame.addEventListener('click', () => {
        count1 = 0
        count2 = 0
        homeCounter.textContent = count1
        guestCounter.textContent = count2
        foul = 0
        period = 0
        foulCounter.textContent = foul
        periodCounter.textContent = period
    })
}

function foulAdd() {
    addFoul.addEventListener('click', () => {
        foul += 1
        foulCounter.textContent = foul
    })
}

function foulRemove() {
    removeFoul.addEventListener('click', () => {
        foul -= 1
        foulCounter.textContent = foul
    })
}

function periodAdd() {
    addPeriod.addEventListener('click', () => {
        period += 1
        periodCounter.textContent = period
    })
}

function periodRemove() {
    removePeriod.addEventListener('click', () => {
        period -= 1
        periodCounter.textContent = period
    })
}


foulAdd();
foulRemove();
periodAdd();
periodRemove();
add1();
add2();
add3();

add1g();
add2g();
add3g();

newGameCounter();