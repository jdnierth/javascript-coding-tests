/*
STABLE SORTING ALGORITHM USAGE EXAMPLE

Goal
- Sort bikes by price in ascending order
- Given equal prices, lighter options should be listed first.

The list is already sorted by weight (ascending). I just need to sort it by price. But an unstable sort based on price could "unsort" weights.
*/
var bikes = [
    {
        name: "Fahrrad A",
        price: "600 EUR",
        weight: "20 kg"
    },
    {
        name: "Fahrrad B",
        price: "500 EUR",
        weight: "30 kg"
    },
    {
        name: "Fahrrad C",
        price: "500 EUR",
        weight: "35 kg"
    }
];

function bikeSorter(bikes) {
    console.log("Original input: ", bikes);

    // deep copy original
    var newBikes = bikes.slice();

    var sorted = newBikes.sort(sortByPrice);

    console.log("Bikes: ", sorted);
}

function sortByPrice(a,b) {
    return convertToNumber(a.price) - convertToNumber(b.price);
}

function convertToNumber(value) {
    var reg = /\d+/g;

    return Number(value.match(reg));
}

bikeSorter(bikes);