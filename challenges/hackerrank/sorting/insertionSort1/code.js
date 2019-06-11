'use strict';
/*
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/

// Complete the insertionSort1 function below.
/**
 *
 * @param {number} n size of array
 * @param {array} arr of numbers whereas the last one is the unsorted element to be sorted into the elements of the
 * left, which are already sorted.
 */
function insertionSort1(n, arr) {

    for (var r = n - 1; r >= 0; r--) {

        // Step 1: take the last item in the array
        var lastVal = arr[r];

        // Step 2: Set the first index of the sorted array, starting from one index next to the right index
        var l = r - 1;


        while (l >= 0) {

            // Step 3: Check the first value next to the unsorted element
            var left = arr[l];

            if (lastVal < left) {
                arr[l + 1] = left;
                console.log(arr.join(" "));

                if(l == 0) {
                    arr[l] = lastVal;
                    console.log(arr.join(" "));
                }

            } else {
                arr[l + 1] = lastVal;
                lastVal = null;
                console.log(arr.join(" "));
                break;
            }

            l--;
        }

        break;
    }

    return arr;
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}

// Example 1
// insertionSort1(5, [2,4,6,8,3]);
// Expected output
// 2 4 6 8 8
// 2 4 6 6 8
// 2 4 4 6 8
// 2 3 4 6 8

// Example 2
insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);
// 2 3 4 5 6 7 8 9 10 10
// 2 3 4 5 6 7 8 9 9 10
// 2 3 4 5 6 7 8 8 9 10
// 2 3 4 5 6 7 7 8 9 10
// 2 3 4 5 6 6 7 8 9 10
// 2 3 4 5 5 6 7 8 9 10
// 2 3 4 4 5 6 7 8 9 10
// 2 3 3 4 5 6 7 8 9 10
// 2 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10