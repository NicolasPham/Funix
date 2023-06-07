"use strict";

//import from script
import { getFromStorage, saveToStorage } from "./storage.js";
import { renderBreed } from "../script2.js";

const editTableContent = document.getElementById("tbody");
const editForm = document.getElementById("container-form");
console.log('Uploaded');

//Get Form Input as Variables

const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

//get Data from local Storage
const petData = getFromStorage("petData");

function renderEditTable() {
  document.getElementById("tbody").innerHTML = "";

  petData.forEach((pet, index) => {
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
  <button type="button" class="btn btn-warning edit-btn">Edit</button>
  </td>`;

    //add to table
    document.getElementById("tbody").appendChild(addRow);
  });

  const allEditBtn = document.querySelectorAll('.edit-btn')
  allEditBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      editPet(i)
    })
  })
}

function editPet(index) {
  const pet = petData[index];
  editForm.classList.remove("hide");

  idInput.value = pet.id;
  nameInput.value = pet.name;
  weightInput.value = pet.weight;
  lengthInput.value = pet.length;
  colorInput.value = pet.color;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;
}

//Validate Data Function - copy from Script
function validate() {

  if (nameInput.value.length <= 0) return alert("Name cannot be empty");
  else if (
    ageInput.value.length <= 0 ||
    parseInt(ageInput.value) <= 0 ||
    parseInt(ageInput.value) >= 16
  )
    return alert("Age must be between 1 and 15");
  else if (typeInput.value === "Select Type")
    return alert("Please select type");
  else if (
    weightInput.value.length <= 0 ||
    parseInt(weightInput.value) <= 0 ||
    parseInt(weightInput.value) >= 16
  )
    return alert("Weight must be between 1 and 15");
  else if (
    lengthInput.value.length <= 0 ||
    parseInt(lengthInput.value) <= 0 ||
    parseInt(lengthInput.value) >= 100
  )
    return alert("Length must be between 1 and 100");
  else if (breedInput.value === "Select Breed")
    return alert("Please select breed");
  else return true;
}

//Submit the form and save data to localStorage
function handleSubmit(e) {
  e.preventDefault();
  let data;

  let isValidated = validate();
  if (isValidated) {
    data = {
      id: idInput.value,
      name: nameInput.value,
      age: ageInput.value,
      type: typeInput.value,
      weight: parseInt(weightInput.value),
      length: parseInt(lengthInput.value),
      color: colorInput.value,
      breed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
      date: new Date().toLocaleDateString(),
      bmi: "?",
    };
    const pet = petData.filter(p => {
      p.id == data.id
      console.log(pet);
    })
    console.log(pet);
    renderEditTable();
  } else {
    console.log("Data not succesfully validated");
    renderEditTable();
  }

  saveToStorage("petData", JSON.stringify(petArr));
}

renderEditTable();

//Add EventListener
submitBtn.addEventListener('click', handleSubmit)
