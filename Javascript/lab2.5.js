const country = "VietNam";
const continent = "Asian";
let population = 97470000000;


//lab 2.2
const isIsLand = false;
const language = `Vietnamese`;

console.log("Country : ", country);
console.log("Continent: ", continent);
console.log("Population: ", population);    

//lab 2.3
console.log(population/2);
console.log(population+1);
console.log(population > 6000000000);
console.log(population < 33000000000);

//lab 2.4
let desc = `${country} and its ${population} milion people speak ${language}`
console.log(desc);

//lab 2.5
const average = 33000000000;
let result;

if (population > average) {
 result = `${country} is above average`   
} else {
    result = `${country}'s population is ${average - population} million below average`
}