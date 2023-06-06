"use strict";

//Breed management ======================================================
const inputBreed = document.getElementById("input-breed");
const typeBreed = document.getElementById("input-type");
const btnBreed = document.getElementById("submit-btn");
const tableBody = document.getElementById("tbody");
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
        <button type="button" class="btn btn-danger" onClick={deleteBreed(${i})}>Delete</button>
        </td>`;

    document.getElementById("tbody").appendChild(addRow);
  });
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

function deleteBreed(breedIndex) {
  breedTypes.splice(breedIndex, 1);
  saveToStorage("breed", JSON.stringify(breedTypes));
  renderBreedTable();
}

//Initial function - call first time loading the page
function intialCall() {
  saveToStorage("breed", JSON.stringify(breedTypes));
  renderBreedTable();
}
intialCall();

//Add event Listener
btnBreed.addEventListener("click", submitBreed);
