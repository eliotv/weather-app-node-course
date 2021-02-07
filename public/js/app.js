const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Hello'
messageTwo.textContent = 'World'

//Event Listener
weatherForm.addEventListener('submit', (e) => {
    // stop server from refreshing page
    e.preventDefault()

    const location = search.value
    
    messageOne.textContent = 'Loading weather forecast'

    fetch('localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})