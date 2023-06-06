'use strict';

//Breed management ======================================================
const inputBreed = document.getElementById('input-breed')
const typeBreed = document.getElementById('input-type')
const btnBreed = document.getElementById ('submit-btn')
const tableBody = document.getElementById('tbody')
let data;

const breedDefault = [
    {
    breed: 'Tabby',
    type: 'Cat'
},
    {
    breed: 'Domestic Medium Hair',
    type: 'Cat'
},
    {
    breed: 'Mixed Breed',
    type: 'Cat'
},
    {
    breed: 'Mixed Breed',
    type: 'Dog'
},

]

//Render table to show breed
function renderBreedTable() {
    //clear the table content first
     document.getElementById('tbody').innerHTML = ""
    const breeds = getFromStorage('breed')
    
    breeds.forEach((b, i) => {
        const addRow = document.createElement('tr')
        addRow.innerHTML = `<td>${i}</td>
        <td>${b.breed}</td>
        <td>${b.type}</td>
        <td>
        <button type="button" class="btn btn-danger" onClick={deleteBreed(${i})}>Delete</button>
        </td>`
        
        document.getElementById('tbody').appendChild(addRow)
    })
    
}

function submitBreed(e) {
    
    data = {
        breed: inputBreed.value,
        type: typeBreed.value
    }
    
    breedDefault.push(data)
    intialCall()
}

function deleteBreed(breedIndex) {
    breedDefault.splice(breedIndex, 1);
    intialCall()
}

function intialCall() {
    //update and save breedDefault to local storage
    if(getFromStorage('breed').length <=2) {}
    saveToStorage('breed', JSON.stringify(breedDefault))
    renderBreedTable()

}
intialCall()

//Add event Listener
btnBreed.addEventListener('click', submitBreed)