"use strict";

//Define function
const saveToStorage = function (key, value) {
  localStorage.setItem(key, value);
};


const getFromStorage = function(key = "petData") {
  return JSON.parse(localStorage.getItem(key))
}
