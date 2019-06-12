/*'use strict';

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
*/

function readLine() {
    return inputString[currentLine++];
}

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {

    // Step 1: Start with the 2nd item and compare it to its left neighbour
    for (var i = 0; i < n; i++) {

        var left = arr[i],
            tailIndex = (i + 1 == n) ? n - 1 : i + 1;

        while (tailIndex < n) {

            var right = arr[tailIndex];

            // Step 2: If the left neighbour is > current value, swap
            if (left > right) {
                arr[i] = right;
                arr[tailIndex] = left;
                console.log(arr.join(' '));
            } else {
                console.log(arr.join(' '));
                break;
            }


            tailIndex++;
        }
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}

// Sample input
// 6
// 1 4 3 5 6 2

// Example 1:
// 1 4 3 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 2 3 4 5 6
//insertionSort2(6, [1, 4, 3, 5, 6, 2]);

// Sample input
// 7
// 3 4 7 5 6 2 1

// Example 2:
// 3 4 7 5 6 2 1
// 3 4 7 5 6 2 1
// 3 4 5 7 6 2 1
// 3 4 5 6 7 2 1
// 2 3 4 5 6 7 1
// 1 2 3 4 5 6 7
insertionSort2(3, [1,2,0]);
