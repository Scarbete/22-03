// // Задание - 1
window.onload = function() {
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    let count = 1
    function getData() {
        fetch(`https://jsonplaceholder.typicode.com/todos?_page=${count}`)
            .then(response => response.json())
            .then(data => {
                const block = document.querySelector('.block')
                const task = data[0]

                const card = document.createElement('div')
                const title = document.createElement('h2')
                const status = document.createElement('h3')

                card.className = 'card'
                title.innerText = task.title
                status.className = 'status'
                status.innerText = task.completed ? 'true' : 'false'

                card.appendChild(title)
                card.appendChild(status)
                block.innerHTML = ''
                block.appendChild(card)
            })
            .catch(error => {
                console.error('error!', error)
            })
    }
    getData()

    prev.onclick = () => {
        count--
        if (count < 0) {
            count = 0
        }
        getData()
    }

    next.onclick = () => {
        count++
        getData()
    }
}

// Задание - 2
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))