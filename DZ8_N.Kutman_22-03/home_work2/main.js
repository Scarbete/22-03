const url = 'https://jsonplaceholder.typicode.com/photos?_limit=200'
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const image = document.querySelector('.image')
let count = 0

async function fetchPhotos() {
    const response = await fetch(url)
    const data = await response.json()
    image.src = data[count].url
    async function btnClick() {
        await fetchPhotos()

        next.onclick = () => {
            count++
            if (count >= data.length) {
                count = 0
            }
            fetchPhotos()
        }
        prev.onclick = () => {
            count--
            if (count < 0) {
                count = data.length - 1
            }
            fetchPhotos()
        }
    }
    btnClick().catch(error => console.error(error))
}
fetchPhotos().catch(error => console.error(error))