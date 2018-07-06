import './index.css'

const URL = 'http://localhost:3000/contacts'

const xhr = new  XMLHttpRequest()

xhr.onreadystatechange = () => {
    console.log(xhr.response)

}

xhr.open('GET', URL)
xhr.send()