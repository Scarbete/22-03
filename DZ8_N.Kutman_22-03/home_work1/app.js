const wrapper = document.querySelector('.wrapper')
async function getImages() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=200')
    return await response.json()
}
async function createImages() {
    try {
        const images = await getImages()

        images.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            wrapper.appendChild(img);
        })
    } catch {
        console.log('ERROR!')
    }
}
createImages()