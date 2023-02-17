const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

// modalTrigger.addEventListener('click', openModal)
modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()

modal.onclick = event => event.target === modal ? closeModal : false
modal.onkeydown = event => event.code === 'Escape' ? closeModal : false

//data

const deadLine = '2023-03-08'

function getTimeReamining(deadline) {
    const time = new Date(deadLine) - new Date(),
        days = Math.floor((time / (1000 * 60 * 60 * 24)) )
        hours = Math.floor((time / (1000 * 60 * 60) % 24) ),
        minutes = Math.floor((time / (1000 / 60) % 60 ),
        seconds = Math.floor((time / 1000) % 60) )

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'second': seconds,
    }

}
function setlock(element, deadline) {
    const elem = document.querySelector(element),
        days = element.querySelector('#days')
        hours = elem.querySelector('#hours')
        minutes = elem.querySelector('#minutes')
        seconds = elem.querySelector('#seconds')

    function updateClock() {
        const time = getTimeReamining(deadLine)
        days.innerHTML = makeZero(time.days)
        hours.innerHTML = makeZero(time.hours)
        minutes.innerHTML = makeZero(time.minutes)
        seconds.innerHTML = makeZero(time.second)
    }

    function makeZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

}

setClock('.timer', deadLine)