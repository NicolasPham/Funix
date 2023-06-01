/////////////////////////////////////////////////
// ========= ARRAY METHODS =========
// Difference between SPICE and SLICE:
// SPLICE: chnages the orginial array while SLICE: does not
// REVERSE: reserve the array (mutate the orignial array)
// CONCAT:
const newConcatArray = array1.concat(array2);
const newConcatArray2 = [...array1, ...array2];

// ========= Callback function =========

function upperWord(str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

function transformer(str, fn) {
  console.log(`Orginial string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`By: ${fn.name}`);
}

transformer("Javascript is the best", upperWord);

// ========= Function return a function =========
//option 1
function greeting(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greeting("Hey");
greeterHey("Nicolas");

greeting("Hello")("Ana");

// option 2
const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet2("Good morning")("Nicolas");

//option 3
const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);

// ========= FOREACH =========
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (let movement of movements) {
for (let [i, movement] of movements.entries()) {
  console.log(`Index: ${i}`);
  if (movement >= 0) {
    console.log(`You deposited $${movement}`);
  } else {
    console.log(`You withdraw $${Math.abs(movement)}`);
  }
}

movements.forEach(function (movement, index, array) {
  console.log(`Index: ${index}`);
  if (movement >= 0) {
    console.log(`You deposited $${movement}`);
  } else {
    console.log(`You withdraw $${Math.abs(movement)}`);
  }
  console.log(array);
});

// ========= FILTER =========
const deposit = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposit);

// ========= REDUCE =========
const balance = movements.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  console.log(`Iteration ${currentIndex}: ${accumulator}`);
  return accumulator + currentValue;
},
500); //intial value of accumulator = 500, default = 0

console.log(balance);

const maxValue = movements.reduce((acc, current) => {
  if (current > acc) return current;
  else return acc;
}, movements[0]);

console.log(maxValue);

////////////////////////////////////////////////////////////////////////
// ================= DOM ========================================
//Selecting =============================================
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//Creating =============================================
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for improved functionality and analytics <button class='btn btn--close-cookie'>Got it!</button> ";

//adding element into header
const header = document.querySelector(".header");
header.prepend(message); //add as first child
header.append(message); //add as last child
//only able to add once, cannot be first child and last child at the same time
header.append(message.cloneNode(true)); //add a copy of element for multiple places
//cloneNode(true) to copy all the children inside the node
header.before(message); //add elemnt before the header as an sibling, also have "after"

//deleting =============================================
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

//Styles =============================================
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
//return the inline-style
//to retreive the real styles that displayed on the page
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

//in order to change the height, since it's a string display as 43.55666px
//we have to take the number part out of the string as "NUmber.parseFloat()"
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

//to modify variables in CSS from :root{} which is equivalent to document in JS
document.documentElement.style.setProperty("--color-primary", "red");

//Atributes =============================================
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src); //absolute url
console.log(logo.getAttribute("src")); //relative url
//we can also use getAttribute and setAttribute
logo.setAttribute("alt", "logo of bankist");
//data attribute
// <img data-version-number = '3.0' />
console.log(logo.dataset.versionNumber);

//Atributes =============================================
console.log(
  "Height / Width viewport: ",
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
);

//Smooth Scrolling
window.scrollTo({
  left: s1coords.left + window.pageXOffset,
  top: s1coords.y + window.pageYOffset,
  behavior: "smooth",
}); //ols style
section1.scrollIntoView({ behavior: "smooth" }); //new style
