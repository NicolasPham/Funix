'use strict';

//lab 4.1 - Function
// /'Finland has 6 million people and its capital city is Helsinki'.
function describeCountry(country, population, capitalCity) {
    const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`
}

//===============================================================
//lab4.2 - function expression
function percentageOfWorld1(population) {
    return population / 7900 * 100
}

const canada = percentageOfWorld1(38.25);
const vietNam = percentageOfWorld1(97.47);
const unitedStates = percentageOfWorld1(331.9);

console.log(canada, vietNam, unitedStates);

//create an expression funciton
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100
}

const canada2 = percentageOfWorld1(38.25);
const vietNam2 = percentageOfWorld1(97.47);
const unitedStates2 = percentageOfWorld1(331.9);

console.log(canada2, vietNam2, unitedStates2);


//===============================================================
//lab4.3 - arrow funciton
const percentageOfWorld3 = (population) => {
    return population / 7900 * 100
}


//===============================================================
//lab4.4
const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population).toFixed(2);
    const result = `${country} has ${population} million people, which is about ${percentage} of the world`
    return result
}
console.log(describePopulation("China", 1441));

//===============================================================
//lab4.5
const populations = [97.47, 38.25, 331.9, 1441];
console.log(populations.length == 4);

const percentage = [];
for (let i=0; i < populations.length; i++) {
    percentage.push(percentageOfWorld3(populations[i]).toFixed(4))
}
console.log(percentage);

//===============================================================
//lab4.6
const vietNameNeighbour = ["Laos", "Campodia", "China"]
const newCountry = "Utopia"

//add 'Utopia' to array
vietNameNeighbour.push(newCountry)
console.log(vietNameNeighbour);

//Remove 'Utopia' from an array
vietNameNeighbour.pop()
console.log(vietNameNeighbour);

let newVietNam  = vietNameNeighbour.filter(name => name != "Utopia")
console.log(newVietNam);

//===============================================================
//lab4.7.1 - Who win?

function calcAvg (teamScore) {
    let total = 0;
    for (let score in teamScore) {
        total += teamScore[score]
    }
    let avg = total/teamScore.length
    return avg
}

function checkWinner (avgDolphins, avgKoalas) {
    console.log(avgDolphins, avgKoalas);
    if (avgDolphins >= 2*avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgDolphins*2 <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log("We have no winner");
    }
}

const dolphins1 = [44,23,71];
const koalas1 = [65,54,49];
let avgDolphins = calcAvg(dolphins1)
let avgKoalas = calcAvg(koalas1)
checkWinner(avgDolphins, avgKoalas)

const dolphins2 = [85,51,41];
const koalas2 = [23,34,27];
avgDolphins = calcAvg(dolphins2)
avgKoalas = calcAvg(koalas2)
checkWinner(avgDolphins, avgKoalas)

//===============================================================
//lab4.7.2 - tip calculation
const tipCalculator = (amount) => {
    let tip = 0;
    if (amount >= 50 && amount <= 300) {
        tip = amount*15/100
    } else {
        tip = amount*0.2
    }
    return tip
}

const bill = [125, 555, 44]
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
