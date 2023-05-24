//============= Lab 5.1 =============
const myCountry = {
    country: "Canada",
    capital: "Ottawa",
    language: "English",
    population: 30,
    neighbors: ["US", "VietNam", "Nigeria"]
}
//============= Lab 5.2 =============
console.log(`${myCountry.country} has ${myCountry.population} million finish-speaking people, ${myCountry.neighbors.length} countries and a capital called ${myCountry.capital}`)

myCountry.population = myCountry.population - 2
console.log(myCountry.population)

myCountry['population'] = myCountry.population + 2
console.log(myCountry['population']);

//============= Lab 5.3 =============
myCountry = {
    country: "Canada",
    capital: "Ottawa",
    language: "English",
    population: 30,
    neighbors: ["US", "VietNam", "Nigeria"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million finish-speaking people, ${this.neighbors.length} countries and a capital called ${this.capital}`);
    },
}
//============= Lab 5.4 =============
const numberOfVoter = 50;

for (let i = 0; i < numberOfVoter; i++) {
    console.log(`Voter number ${i+1} is currently voting`);
}


//============= Lab 5.5 =============
const percentageOfWorld3 = (population) => {
    return population / 7900 * 100
}

const populations = [97.47, 38.25, 331.9, 1441];

const percentage = [];
for (let i=0; i < populations.length; i++) {
    percentage.push(percentageOfWorld3(i).toFixed(4))
}
console.log(percentage);

//============= Lab 5.6 =============
const listOfNeighbour =  [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
let country;

for (let item in listOfNeighbour) {
    if (listOfNeighbour[item].length < 2) continue;
    country = listOfNeighbour[item]
    for (let i =1; i<country.length; i++) {
        console.log(country[i])
    }
}


//============= Lab 5.7 =============
let i = 0;
while( i < populations.length ) {
    percentage.push(percentageOfWorld3(i).toFixed(4))
    i++;
}
console.log(percentage);


//============= Lab 5.8.1 =============
function calcBMI (mass, height) {
    return mass/(height ** 2).toFixed(0)
}


const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}
mark.bmi = calcBMI(mark.mass, mark.height);
john.bmi = calcBMI(john.mass, john.height);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
}
else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

//============= Lab 5.8.2 =============

const tipCalculator = (amount) => {
    let tip = 0;
    if (amount >= 50 && amount <= 300) {
        tip = amount*15/100
    } else {
        tip = amount*0.2
    }
    return tip
}

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tipArray = []
let totalBill = []

for (let index in bill) {
    let amount = bill[index]
    console.log(amount);
    let tipAmount = tipCalculator(amount)
    console.log(tipAmount);
    tipArray.push(tipAmount)
    totalBill.push(amount+tipAmount)
}

console.log("Tip array: ", tipArray);
console.log("Total bill: ", totalBill);

//calculate average for array
const calcAvg = (array) => {
    let indexAvg = 0;
    let totalsArray = 0;
    while (indexAvg < array.length) {
        totalsArray += array[indexAvg];
        indexAvg++
    }
    avg = totalsArray / array.length
    console.log("Average: ",avg);
    return avg
}

calcAvg(totalBill)

