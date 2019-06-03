// Challenge 1.1
// Create a for loop that iterates through an array and returns the sum of the elements of the array.

function sumFunc(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

// Challenge 1.2
// Create a functional iterator for an array that returns each value of the array when called, one element at a
// time.

function returnIterator(arr) {
    var i = 0;

    return function () {
        var elem = arr[i];
        i++;

        return elem;
    }
}

const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'
