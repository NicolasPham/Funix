// ========= CALLBACK function =========

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

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// ========= ARRAY METHODS =========
// Difference between SPICE and SLICE:
// SPLICE: chnages the orginial array while SLICE: does not
// REVERSE: reserve the array (mutate the orignial array)
// CONCAT:
const newConcatArray = array1.concat(array2);
const newConcatArray2 = [...array1, ...array2];
