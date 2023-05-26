const canadaAirLine = {
  airline: "Canada Air Line",
  iataCode: "CAD",
  booking: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNumber}`,
      name,
    });
  },
};

canadaAirLine.book(163, "Nicolas Pham");
canadaAirLine.book(196, "Ana Nguyen");

const evaAirLine = {
  airline: "EVA Air Line",
  iataCode: "EVA",
  booking: [],
};

//assign canadaAirLine.book function to a new variable so we dont have to copy to evaAirline
const book = canadaAirLine.book;

//but when we apply like below, it will give error since "this" does not apply anymore
book(611, "Ryan Pham"); //DOES NOT WORK

//========= Call Method ==============
//we need to specify where do we want "this" to point to:
book.call(evaAirLine, 611, "Ryan Pham");
console.log(evaAirLine);

//========= Apply Method ==============
//take an array of arguments instead of individual argument
const flightData = [163, "Nicolas"];
book.apply(evaAirLine, flightData);
//not use "appy" anymore, instead we use as :
book.call(canadaAirLine, ...flightData);

//========= Bind Method ==============
const bookEVA = book.bind(evaAirLine); //bind the book function with evaAirLine to create new function
bookEVA(199, "Ana Nguyen");
//pass more argument in
const bookEva163 = book.bind(evaAirLine, 163);
bookEva163("Nicolas");
bookEva163("Ana");

//apply in event listener
canadaAirLine.planes = 300;
canadaAirLine.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", canadaAirLine.buyPlanes); //Does not work as "this" indicate to the button
document
  .querySelector(".buy")
  .addEventListener("click", canadaAirLine.buyPlanes.bind(canadaAirLine));

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.13, 200))

const applyTax = addTax.bind(null, 0.13)
console.log(applyTax(200))