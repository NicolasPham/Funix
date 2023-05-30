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
