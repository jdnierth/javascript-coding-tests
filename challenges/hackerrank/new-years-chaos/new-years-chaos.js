/**
 * For example, if the string 's='abcac' and n=10, the substring we consider is 'abcacabcac', the first 10 characters
 * of her infinite string.
 * There are 4 occurrences of a in the substring.
 *
 * 5 4
 * 1 2 3 4 5 === 5 1 2 3 4
 */
'use strict';
/*
'use strict';

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


function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
*/

// Complete the minimumBribes function below.
function minimumBribes(q) {
    // Step 1: init results variable
    var bribes = 0;

    // Step 2: compare consecutive numbers
    // Substract x1 from x2:
    // If x1 - x2 < 0 - move on
    // If x1 - x2 > 2 - return too chaotic
    // If x1 - x2 < 2 - add to the number of bribes
    for (var i = 0; i < q.length; i++) {
        if (i < q.length - 1) {
            var x1 = q[i];
            var x2 = q[i + 1];
            var diff = x1 - x2;

            if (diff < 0) {
                /*if(diff == -1 && x1 != (i+1)) {
                    bribes = bribes + 1;
                }*/
            } else if (diff > 2) {
                console.log('Too chaotic');
                return;
            } else if (diff <= 2) {
                bribes = bribes + diff;
            }
        }
    }

    console.log(bribes);

    return bribes;
}


//console.log(minimumBribes([], 0)); // 0
console.log(minimumBribes([5,1,2,3,7,8,6,4],0)); // Too chaotic
console.log(minimumBribes([2, 1, 5, 3, 4], 5)); // 3
console.log(minimumBribes([2, 5, 1, 3, 4], 5)); // Too chaotic
console.log(minimumBribes([1,2,5,3,4,7,8,6], 8)); // 4
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4], 0)); // 7
