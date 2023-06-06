"use strict";

const editTableContent = document.getElementById("tbody");
const editForm = document.getElementById("container-form");
const editBtn = document.getElementById("submit-btn");

//Get Form Input as Variables
const editID = document.getElementById("input-id");
const editName = document.getElementById("input-name");
const editAge = document.getElementById("input-age");
const editType = document.getElementById("input-type");
const editWeight = document.getElementById("input-weight");
const editLength = document.getElementById("input-length");
const editColor = document.getElementById("input-color-1");
const editBreed = document.getElementById("input-breed");
const editVaccinated = document.getElementById("input-vaccinated");
const editDewormed = document.getElementById("input-dewormed");
const editSterilized = document.getElementById("input-sterilized");

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
  <button type="button" class="btn btn-warning" onClick={editPet(${index})}>Edit</button>
  </td>`;

    //add to table
    document.getElementById("tbody").appendChild(addRow);
  });
}

function editPet(index) {
  const pet = petData[index];
  editForm.classList.remove("hide");

  editID.value = pet.id;
  editName.value = pet.name;
  editWeight.value = pet.weight;
  editLength.value = pet.length;
  editColor.value = pet.color;
  editAge.value = pet.age;
  editType.value = pet.type;
  editVaccinated.checked = pet.vaccinated;
  editDewormed.checked = pet.dewormed;
  editSterilized.checked = pet.sterilized;
}

function saveEditPet(e) {
  e.preventDefault();
}

renderEditTable();

//Add EventListener
editBtn.addEventListener("click", saveEditPet);
