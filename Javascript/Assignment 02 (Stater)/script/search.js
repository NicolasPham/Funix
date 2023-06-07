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
console.log(petData);

function searchID(pet) {
  if (pet.id.includes(inputID.value)) {
    result.push(pet);
    return true;
  } else return false;
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
//==================================================
//The total search function
function searchPet() {
  result = [];
  petData.forEach((pet, i) => {
    searchID(pet);
    renderData();
  });
}

//Add Event Listener
findBtn.addEventListener("click", searchPet);
