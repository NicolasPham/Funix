const canadaAirLine = {
    airline: "Canada Air Line",
    iataCode: "CAD",
    booking: [],
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.booking.push({
            flight: `${this.iataCode}${flightNumber}`,
            name
        })
    }
}

canadaAirLine.book(163, "Nicolas Pham")
canadaAirLine.book(196, "Ana Nguyen")

const evaAirLine = {
    airline: "EVA Air Line",
    iataCode: "EVA",
    booking: []
}

//assign canadaAirLine.book function to a new variable so we dont have to copy to evaAirline
const book = canadaAirLine.book;

//but when we apply like below, it will give error since "this" does not apply anymore
book(611, "Ryan Pham") //DOES NOT WORK

//we need to specify where do we want "this" to point to:
book.call(evaAirLine, 611, "Ryan Pham")
console.log(evaAirLine);