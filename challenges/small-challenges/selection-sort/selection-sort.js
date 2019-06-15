function mySelectionSort(numbers, results) {

    // Base case: if original array is empty, return results
    if (!numbers.length) {
        return results;
    }

    // Recursion
    while (numbers.length > 0) {

        var smallestNumber = getNextLowestNumber(numbers);

        if (smallestNumber.hasOwnProperty('index')) {

            // Add smallestNumberValue to result array
            results.push(smallestNumber.value);

            // Remove number from input array
            removeFromInput(numbers, smallestNumber.index);

            mySelectionSort(numbers, results);
        }
    }

    return results;
}

// Mutates the input array by removing a number
function removeFromInput(numbers, i) {
    numbers.splice(i, 1);
}

function getNextLowestNumber(numbers) {
    var smallestNumber = false;

    // Find the smallest number in numbers
    for (var i = 0; i < numbers.length; i++) {
        if (!smallestNumber) {
            smallestNumber = {
                index: i,
                value: numbers[i]
            }
        }

        if (smallestNumber.value > numbers[i]) {
            smallestNumber = {
                index: i,
                value: numbers[i]
            };
        }
    }

    return smallestNumber;
}

console.log(mySelectionSort([3, 8, 2, -1, 2, 1], []));