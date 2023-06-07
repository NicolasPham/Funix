"use strick";

//Import from files
import { saveToStorage, getFromStorage } from "./script/storage.js";
import * as script from './script.js'

//Sidebar Animation ======================================================
const sidebarTitle = document.querySelector("#sidebar-title");
const sidebar = document.querySelector("#sidebar");

sidebarTitle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

//Get and Save Item to storage ======================================================
// In file script.js

//Show breed types in index.html ======================================================
const breedTypes = getFromStorage("breed");

function renderBreed(e) {
  //filter breeds base on type input
  const filterBreed = breedTypes.filter(function (breed) {
    return breed.type === e.target.value;
  });
  //clear all previous options
  script.breedInput.innerHTML = "<option>Select Breed</option>";
  //add options to breed types
  filterBreed.forEach((type) => {
    //add option
    const addOption = document.createElement("option");
    addOption.textContent = type.breed;
    script.breedInput.appendChild(addOption);
  });
}

//Add EventListener
script.typeInput.addEventListener("change", (e) => renderBreed(e));
