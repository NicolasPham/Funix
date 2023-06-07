"use strict";

//Import from files
import { saveToStorage, getFromStorage } from "./storage.js";

//Breed management ======================================================
const inputBreed = document.getElementById("input-breed");
const typeBreed = document.getElementById("input-type");
const btnBreed = document.getElementById("submit-btn");
let data;

const breedTypes = [
  {
    breed: "Tabby",
    type: "Cat",
  },
  {
    breed: "Domestic Medium Hair",
    type: "Cat",
  },
  {
    breed: "Mixed Breed",
    type: "Cat",
  },
  {
    breed: "Mixed Breed",
    type: "Dog",
  },
];

//Render table to show breed
function renderBreedTable() {
  //clear the table content first
  document.getElementById("tbody").innerHTML = "";
  const breeds = getFromStorage("breed");

  breeds.forEach((b, i) => {
    const addRow = document.createElement("tr");
    addRow.innerHTML = `<td>${i + 1}</td>
        <td>${b.breed}</td>
        <td>${b.type}</td>
        <td>
        <button type="button" class="btn btn-danger delete-breed">Delete</button>
        </td>`;

    document.getElementById("tbody").appendChild(addRow);
  }
  );
//add delete function to each button
  deleteBreed()
}

function submitBreed(e) {
  data = {
    breed: inputBreed.value,
    type: typeBreed.value,
  };

  breedTypes.push(data);
  saveToStorage("breed", JSON.stringify(breedTypes));
  renderBreedTable();
}

function deleteBreed() {
  const allDelBtn = document.querySelectorAll('.delete-breed');
  allDelBtn.forEach((btn, i) => {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      breedTypes.splice(i, 1);
  saveToStorage("breed", JSON.stringify(breedTypes));
  renderBreedTable();
    })
  })
}

//Initial function - call first time loading the page
function intialCall() {
  //check if localStorage has no breed, then take the default
  if (getFromStorage('breed') === null || getFromStorage('breed').length <= 2) {
    saveToStorage("breed", JSON.stringify(breedTypes));
  }
  renderBreedTable();
}
intialCall();

//Add event Listener
btnBreed.addEventListener("click", submitBreed);

//${deleteBreed(i)}