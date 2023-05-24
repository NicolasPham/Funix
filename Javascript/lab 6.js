// Lab 6
const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

function printForecast (array) {
    for (let index in array) {
        console.log(`${array[index]}oC in ${index} day(s)`);
    }
}

printForecast(data2)