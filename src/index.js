import './index.css'

const URL = 'http://localhost:3000/contacts'

let btn = document.querySelector('#loadData')

let p = document.querySelector('#output')
//2nd promise

fetch(URL)
     .then(res =>res.json())
     .then(data =>
        {
            data.forEach(user => {

              p.innerHTML = `${p.innerHTML} <br> Name :${user.name}`


            });



        }
    )


     .catch(err => console.log(error))

// fetch(URL)
//   .then(function(response) {
//     console.log(response.json());
//   })

//   .catch(function(error) {
//     console.log(error);
//   })


// btn.addEventListener('click', () =>{
//     const xhr = new  XMLHttpRequest()

//     xhr.onreadystatechange = () => {
// p.innerHTML =xhr.response;

//     }

//     xhr.open('GET', URL)
//     xhr.send()
// })