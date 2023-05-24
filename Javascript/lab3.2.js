//lab 3.2
let numNeighbors =  Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1) {
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log("No borders");
}
// since we use prompt, it will return a string value, we can not use "====" in this case
// or we have to turn numNeighbors into number first

//=========================================================================
//lab 3.3 - Logic
const country = {
    name: "Canada",
    language: "English",
    population: 38.21,
    isIsland: false
}

if (country.language === "English" && country.population < 50 && !country.isIsland) {
    console.log(`You should live in ${country.name}`);
} else {
    console.log(`${country.name} does not meet your criteria`);
}

//=========================================================================
//lab 3.4 - Swtich
const language = "Chinese"

switch (language) {
    case "Chinese":
        console.log('MOST number of native speakers!');
        break;
    case "Spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "English":
        console.log('3rd place');
        break;
    case "Hindi":
        console.log('Number 4');
        break;
    case "Arabic":
        console.log('5th most spoken language');
        break;

    default:
        break;
}

//=========================================================================
//lab 3.5
const portugesePopulation = 40;
const conditionString = `Portugal's population is ${portugesePopulation > 33 ? "above" : "below"} average`
console.log(conditionString);

//=========================================================================
//lab 3.6.1
const dataDolphin = {
    data1: [96, 108, 89],
    bonus1: [97, 112, 101],
    bonus2: [97, 112, 101]
}
const dataKoalas = {
    data1: [88, 91, 110],
    bonus1: [109, 95, 123],
    bonus2: [109, 95, 106]
}


const whoWin = (dolphin, kaolas) => {
    
    const dolphinSum = dolphin.reduce((accumulator, currentValue) => accumulator + currentValue);
    const dolphinAve = dolphinSum / dolphin.length;
    
    const kaolasSum = kaolas.reduce((accumulator, currentValue) => accumulator + currentValue);
    const kaolasAve = kaolasSum / kaolas.length;
    
    console.log(dolphinAve, kaolasAve);
    
    if (dolphinAve > kaolasAve && dolphinAve >= 100) console.log("Dolphin wins the trophy");
    else if (kaolasAve > dolphinAve && kaolasAve >= 100) console.log("Kaolas wins the trophy");
    else {
        if (dolphinAve >= 10) console.log("They both win the trophy")
        else console.log("No one win the trophy");
    };
}

//regular test
whoWin(dataDolphin.data1, dataKoalas.data1);

//bonus test 1:
whoWin(dataDolphin.bonus1, dataKoalas.bonus1);

//bonus test 2:
whoWin(dataDolphin.bonus2, dataKoalas.bonus2)


//=========================================================================
//lab 3.6.2
const tipCalculator = (bill) => {

    if (bill >= 50 && bill <= 300) {
        tip = bill*15/100
    } else {
        tip = bill*0.2
    }
    console.log(tip);
}

tipCalculator(275);
tipCalculator(40);
tipCalculator(430);