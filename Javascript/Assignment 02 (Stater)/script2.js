"use strick";
//Sidebar Animation
const sidebarTitle = document.querySelector("#side-title");
const sidebar = document.querySelector("#sidebar");

sidebar.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
