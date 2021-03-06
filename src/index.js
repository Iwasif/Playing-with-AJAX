import './index.css'
import axios from 'axios'
import { ifError } from 'assert';

const URL = 'http://localhost:3000/contacts'

window.onload = function ()
{
    let tbody = document.querySelector('#tbody')

    axios.get(URL)
     .then(res => {
         res.data.forEach(contact => {
            createTDElement(contact, tbody)
         });

     })
      .catch()

      let addContact = document.querySelector('#addContact')
      addContact.addEventListener('click', function() {
      createNewContact()

      })

}

//Create new contact

function createNewContact() {

 let name = document.querySelector('#nameField')
 let email = document.querySelector('#emailField')
 let  phone = document.querySelector('#phoneNumber')





    let contact = {
         name :name.value,
         email : email.value,
         phone : phone.value
    }


          axios.post(URL,contact)
              .then(res =>{
                let tbody = document.querySelector('#tbody')
               createTDElement(res.data, tbody)

                name.value = '',
                email.value = '',
                phone.value = ''

              })
               .catch(err => console.log(err))



        }


//Creating a TR and  TD element
function createTDElement(contact, parentElement)
{
const TR  = document.createElement('tr')
const tdId = document.createElement('td')

tdId.innerHTML=contact.id
TR.appendChild(tdId)

const tdName = document.createElement('td')

tdName.innerHTML = contact.name
TR.appendChild(tdName)

const tdEmail = document.createElement('td')

tdEmail.innerHTML = contact.email ? contact.email:'N/A'
TR.appendChild(tdEmail)

const tdPhone = document.createElement('td')

tdPhone.innerHTML= contact.phone ? contact.phone:'N/A'
TR.appendChild(tdPhone)

const tdAction = document.createElement('td')

TR.appendChild(tdAction)


const editBtn= document.createElement('button')

editBtn.className = 'btn btn-warning'
editBtn.innerHTML ='Edit'

editBtn.addEventListener('click', function() {
  let mainModal = $('#editModal')
  mainModal.modal('toggle')

  let editName = document.querySelector('#editName')
  let editEmail = document.querySelector('#editEmail')
  let editNumber = document.querySelector('#editNumber')


 editName.value = contact.name ? contact.name : 'N/A'
 editEmail.value = contact.email ? contact.email : 'N/A'
 editNumber.value = contact.phone ? contact.phone : 'N/A'

 let editSave = document.querySelector('#editSave')

 editSave.addEventListener('click',()=> {

    axios.put(`${URL}/${contact.id}`,
    {
        name:editName.value,
        email:editEmail.value,
        phone:editNumber.value
    })
.then(res => {
tdName.innerHTML=res.data.name
tdEmail.innerHTML=res.data.email
tdPhone.innerHTML=res.data.phone
mainModal.modal('hide')


})
.catch(err => console.log(err))



 })






})

tdAction.appendChild(editBtn)

const deleteBtn = document.createElement('button')
deleteBtn.className = 'btn btn-danger mx-2'
deleteBtn.innerHTML = 'Delete'
deleteBtn.addEventListener('click', function() {

    axios.delete(`${URL}/${contact.id}`)
.then(res =>{
    parentElement.removeChild(TR)

})
.catch(err => {
    console.log(err)

})

})


tdAction.appendChild(deleteBtn)
parentElement.appendChild(TR)


}