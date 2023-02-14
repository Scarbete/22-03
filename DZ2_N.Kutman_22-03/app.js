// Задание - 1
const box = document.querySelector('.box')
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX <= 446 && positionY <= 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 446 && positionY <= 446) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 446) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()

// Задание - 2
let timer = document.querySelector('#timer');
let start = document.querySelector('#startButton');
let stop = document.querySelector('#stopButton');
let timeId;

start.addEventListener('click', () => {
    timeId = setInterval(() => {
        let currentNumber = Number(timer.innerHTML);
        timer.innerHTML = currentNumber + 1;
    }, 1000)
});

stop.addEventListener('click', () => {
    clearInterval(timeId);
});