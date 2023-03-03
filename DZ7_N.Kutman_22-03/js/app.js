async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}

async function createCards() {
    const posts = await getPosts()
    const cardsContainer = document.querySelector('.cards_container')

    posts.forEach(post => {
        const card = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('h2')
        const body = document.createElement('p')

        card.className = 'card'
        image.src = 'images/anime_wallpaper.jpg'
        title.textContent = post.title
        body.textContent = post.body

        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(body)
        cardsContainer.appendChild(card)
    })
}
createCards().catch(error => console.error(error))


