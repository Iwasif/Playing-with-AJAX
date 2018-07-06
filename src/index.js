import './index.css'

const URL = 'http://localhost:3000/contacts'

let btn = document.querySelector('#loadData')

let p = document.querySelector('#output')

let isShown = false

p.style.visibility='visible'
btn.innerHTML='show'



btn.addEventListener('click', () =>{

if(isShown)
{
     p.style.visibility = 'hidden'
     isShown = false
    btn.innerHTML='show'
    const xhr = new  XMLHttpRequest()

    xhr.onreadystatechange = () => {
p.innerHTML =xhr.response;

    }

    xhr.open('GET', URL)
    xhr.send()
}

else {
    p.style.visibility = 'visible'
 isShown =true
btn.innerHTML='hide'

}

})