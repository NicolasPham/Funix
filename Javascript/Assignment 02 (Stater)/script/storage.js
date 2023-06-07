"use strict";

//Define function
export const saveToStorage = function (key, value) {
  localStorage.setItem(key, value);
};


export const getFromStorage = function(key = "petData") {
  return JSON.parse(localStorage.getItem(key))
}
