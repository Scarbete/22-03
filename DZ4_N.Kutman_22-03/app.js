const wrapper = document.querySelector('.wrapper')
const rqst = new XMLHttpRequest()
rqst.open('GET', 'peoples.json')
rqst.responseType = 'json'
rqst.send()
rqst.onload = () => {
    const data = rqst.response // новый экземпляр объекта
    data.forEach(people => {
        const box = document.createElement('div')
        box.classList.add('box')
        const name = document.createElement('h2')
        name.textContent = people.name
        box.appendChild(name)
        const age = document.createElement('span')
        age.textContent = `Age : ${people.age}`
        box.appendChild(age)
        wrapper.appendChild(box)
    })
}