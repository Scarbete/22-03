const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const convert = (elem, target, target2, ) => {
    elem.oninput = () => {

        const request = new XMLHttpRequest()
        request.open("GET", "currency.json")
        request.setRequestHeader("Content-type", "Application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach(e =>{
                target2 === 'som'?
                    e.value = (elem .value / response [e.id]).toFixed(2) : e === som ?
                        e.value = (elem.value * response[elem.id]).toFixed(2)
                        :e.value = ((elem.value * response[elem.id])/ response[e.id]).toFixed(2)
            } )
            elem.value === '' && (target.forEach(e => e.value = ''))
        }
        request.onerror = () => {
            console.error("Произошла ошибка!")
        }
    }
}
convert(som,[usd,euro])
convert(usd ,[som,euro])
convert(euro,[som,usd])