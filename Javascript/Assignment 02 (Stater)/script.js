"use strict";

//Variables
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

const healthyBtn = document.getElementById("healthy-btn");
// const bmiBtn = document.getElementById("bmi-btn");

const petArrDefault = [
  {
    age: "12",
    breed: "Tabby",
    color: "#000000",
    date: "5/22/2023",
    dewormed: false,
    id: "12",
    length: 12,
    name: "12",
    sterilized: false,
    type: "Dog",
    vaccinated: false,
    weight: 12,
    bmi: "?",
  },
  {
    age: "11",
    breed: "Aloha",
    color: "#000000",
    date: "5/22/2023",
    dewormed: true,
    id: "11",
    length: 12,
    name: "11",
    sterilized: true,
    type: "Cat",
    vaccinated: true,
    weight: 12,
    bmi: "?",
  },
  {
    age: "10",
    breed: "Aloha",
    color: "#000000",
    date: "5/22/2023",
    dewormed: false,
    id: "10",
    length: 12,
    name: "11",
    sterilized: true,
    type: "Cat",
    vaccinated: false,
    weight: 12,
    bmi: "?",
  },
];

console.log(localStorage.getItem("petData"));

// Get inital data
function getData(key) {
  if (
    localStorage.getItem(key) == null ||
    localStorage.getItem("petData").length <= 2
  ) {
    //check if there is any value in local storage
    // 2 stand for brackets []
    return petArrDefault;
  } else return getFromStorage(key);
}

const petArr = getData("petData");

// saveToStorage('petData', JSON.stringify(petArrDefault))

let healthyCheck = false;
let healthyPets = petArr;
let isUnique = false;

renderTable();
//Assign function ==================================================
submitBtn.addEventListener("click", handleSubmit);
healthyBtn.addEventListener("click", handleHealthyPets);
// bmiBtn.addEventListener("click", calculateBMI);

//define function ==================================================
//submit:
function handleSubmit(e) {
  e.preventDefault();
  let data;

  let validatedData = validate();
  uniqueIDValidation(idInput.value);
  if (validatedData && isUnique) {
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
    petArr.push(data);
    renderTable();
    clearInput();
  } else {
    console.log("Data not succesfully validated");
    renderTable();
    clearInput();
  }

  saveToStorage("petData", JSON.stringify(petArr));
}

//validate data
function validate() {
  if (idInput.value.length <= 0) return alert("ID cannot be empty");
  else if (nameInput.value.length <= 0) return alert("Name cannot be empty");
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

//unique ID pet validation:
function uniqueIDValidation(petID) {
  //loop over the petArr to validate whether ID is unique
  for (let index in petArr) {
    let pet = petArr[index];

    if (petID == pet.id) {
      alert("ID must be unique");
      isUnique = false;
    } else {
      isUnique = true;
    }
  }
}

//clear Input
function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

//render table PetArr
function renderTable() {
  document.getElementById("tbody").innerHTML = "";

  let renderPets = healthyCheck ? healthyPets : petArr;

  for (let i = 0; i < renderPets.length; i++) {
    let pet = renderPets[i];
    //create an Element to render into the table
    const addRow = document.createElement("tr");
    addRow.classList.add("pet__data");

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
  <td>${pet.bmi}</td>
  <td>${pet.date}</td>
  <td>
  <button type="button" class="btn btn-danger" onClick={deletePet(${
    pet.id
  })}>Delete</button>
  </td>`;
    document.getElementById("tbody").appendChild(addRow);

    //save to local Stoage to use other site
    saveToStorage("petData", JSON.stringify(petArr));
  }
}

//delete a pet
function deletePet(petId) {
  const petIndex = (pet) => pet.id == petId;
  const index = petArr.findIndex(petIndex);
  petArr.splice(index, 1);
  saveToStorage("petData", JSON.stringify(petArr));
  renderTable();
}

//show healthy Pets

function handleHealthyPets() {
  healthyCheck = !healthyCheck;
  if (healthyCheck) {
    healthyPets = petArr.filter(
      (pet) =>
        pet.dewormed === true &&
        pet.sterilized === true &&
        pet.vaccinated === true
    );
    healthyBtn.textContent = "Show All Pets";
  } else {
    healthyPets = petArr;
    healthyBtn.textContent = "Show Healthy Pets";
  }
  renderTable();
}

//calculate BMI
function calculateBMI() {
  // console.log("Click");
  let bmi;
  for (let index in petArr) {
    let pet = petArr[index];

    if (pet.type === "Dog") {
      bmi = (pet.weight * 703) / pet.length ** 2;
    } else {
      bmi = (pet.weight * 886) / pet.length ** 2;
    }

    pet.bmi = bmi.toFixed(2);
  }
  renderTable();
}
