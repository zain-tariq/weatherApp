console.log('JavaScript is running!')


fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if(data.error)
            console.log(data.error)
        else
            console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (event) => {
    document.getElementById('1').innerHTML = 'Loading...'
    event.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error)
            document.getElementById('1').innerHTML = data.error
        else
            document.getElementById('1').innerHTML = data.temperature +'\t'+data.location

    })
})
})
