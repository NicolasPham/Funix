"use strict";

//import from files
import { getFromStorage } from "./storage.js";

//Define variables
const inputID = document.getElementById("input-id");
const inputName = document.getElementById("input-name");
const inputType = document.getElementById("input-type");
const inputBreed = document.getElementById("input-breed");
const inputVaccinated = document.getElementById("input-vaccinated");
const inputDewormed = document.getElementById("input-dewormed");
const inputSterilized = document.getElementById("input-sterilized");

const findBtn = document.getElementById("find-btn");
//Get Data from local Storage
const petData = getFromStorage("petData");
let result = [];

function searchID(pet) {
  //Guard clause: no input ID input will apply to all ID
  if (inputID.value.length <= 0) {
    return true
  }
    const upperCaseChar = inputID.value.toUpperCase();
  const lowerCaseChar = inputID.value.toLowerCase();
  
  if (pet.id.includes(upperCaseChar) || pet.id.includes(lowerCaseChar)) {
    return true
  } else return false
}

function searchName(pet) {
  //Guard clause: no input name input will apply to all name
  if (inputName.value.length <= 0) return true

  const upperCaseChar = inputName.value.toUpperCase();
  const lowerCaseChar = inputName.value.toLowerCase();
  
  if (pet.name.includes(upperCaseChar) || pet.name.includes(lowerCaseChar)) {
    return true
  } else return false
}

function searchType(pet) {

}
//Render Data
function renderData() {
  document.getElementById("tbody").innerHTML = "";

  //add row
  result.forEach((pet) => {
    const addRow = document.createElement("tr");
    addRow.innerHTML = `<th scope="row">${pet.id}</th>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.type}</td>
        <td>${pet.weight} kg</td>
        <td>${pet.length} cm</td>
        <td>${pet.breed}</td>
  <td>
  <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
  </td>
  <td><i class="bi bi-${pet.vaccinated ? "check" : "x"}-circle-fill"></i></td>
  <td><i class="bi bi-${pet.dewormed ? "check" : "x"}-circle-fill"></i></td>
  <td><i class="bi bi-${pet.sterilized ? "check" : "x"}-circle-fill"></i></td>
  <td>${pet.date}</td>
  <td>
  </td>`;
    document.getElementById("tbody").appendChild(addRow);
  });
}
//We need to render breed data so whenver user choose type, breed will show accordingly
function renderBreed(e) {
  const breedData = getFromStorage('breed')
  const filterBreed = breedData.filter(breed => {
    return breed.type === e.target.value  })

    //clear all privous value
}

// renderBreed()
//==================================================
//The total search function
function searchPet() {
  result = [];
  petData.forEach((pet, i) => {
    
    if (searchID(pet) && searchName(pet)) {
      result.push(pet);
    }
    renderData();
  });
}

//Add Event Listener
findBtn.addEventListener("click", searchPet);
inputType.addEventListener('change', (e) => renderBreed(e))