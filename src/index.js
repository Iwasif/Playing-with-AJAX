import './index.css'

const URL = 'http://localhost:3000/contacts'

let btn = document.querySelector('#loadData')

let p = document.querySelector('#output')


btn.addEventListener('click', () =>{
    const xhr = new  XMLHttpRequest()

    xhr.onreadystatechange = () => {
p.innerHTML =xhr.response;

    }

    xhr.open('GET', URL)
    xhr.send()
})