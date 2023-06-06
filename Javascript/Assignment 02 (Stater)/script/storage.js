"use strict";

export const saveToStorage = function (key, value) {
  localStorage.setItem(key, value);
};

saveToStorage("key", "value");
