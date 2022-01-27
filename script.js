const quote = document.querySelector('#quote')
const twitter = document.querySelector('#twitter')
const buttons_container = document.querySelector('.buttons-container')

const generate = document.querySelector('#new-quote')
const author = document.querySelector('#author')
const div = document.createElement('div')



const quotes = []

const get_quotes = async () => {
    const get = await axios.get('https://type.fit/api/quotes')
    const array = get.data
    for (let arr of array) {
        quotes.push(arr)
    }

}
// This function adds a the loading spinner
const loader =()=>{
    
        div.classList.add('loader')
        buttons_container.appendChild(div)
}

// This function removes the loading spinner
const remove =()=>{
    div.classList.remove('loader')
}



generate.addEventListener('click', async () => {
    try {
        loader()
        

        await get_quotes()
        const random = Math.floor(Math.random() * quotes.length)
        quote.innerText = quotes[random].text
        if (quotes[random].author === null) {
            author.innerText = 'Benbouha brahim'

        } else {
            author.innerText = quotes[random].author

        }
        remove()
        

        // author.innerText=quotes[random].author
    }
    catch (error) {
        quote.innerText = 'Something gone wrog,,Maybe it is you internet connection'

    }



})


twitter.addEventListener('click', () => {
    window.open('https://twitter.com/?lang=fr', '_blank')
})

