"use strick";

//Sidebar Animation ======================================================
const sidebarTitle = document.querySelector("#side-title");
const sidebar = document.querySelector("#sidebar");

sidebar.addEventListener("click", function () {
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
  breedInput.innerHTML = "<option>Select Breed</option>";
  //add options to breed types
  filterBreed.forEach((type) => {
    //add option
    const addOption = document.createElement("option");
    addOption.textContent = type.breed;
    breedInput.appendChild(addOption);
  });
}

//Add EventListener
typeInput.addEventListener("change", (e) => renderBreed(e));
