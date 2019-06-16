/**
 * For example, if the string 's='abcac' and n=10, the substring we consider is 'abcacabcac', the first 10 characters
 * of her infinite string.
 * There are 4 occurrences of a in the substring.
 *
 * Example 1: repeatedString(aba, 10) > abaabaabaa > 7
 */
'use strict';
/*
const fs = require('fs');

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
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
*/

// Complete the repeatedString function below.
function repeatedString(s, n) {

    // Base case
    if (n <= 0 || s.length == 0) {
        return 0;
    }

    // Step 1: get string length
    var initLength = s.length;

    if (n >= initLength) {
        // Step 2: find the positions of character 'a' in the input string
        var indecesOfAsInOriginalString = s.split('').map(function find(element, index) {
            if (element == 'a' || element == 'A') {
                return index;
            }
        }).filter(function filterUndefined(element) {
            return (element != undefined)
        });

        // Step 3: how many a's are within a full string
        var numberOfAs = indecesOfAsInOriginalString.reduce(function(total,currentValue, index) {
            return total += 1;
        },0);

        // Step 4: how often does the item fit into n?
        var fullTimes = Math.floor(n / initLength);
        var totalAs = numberOfAs * fullTimes;
        var rest = n - initLength * fullTimes;

        return repeatedString(s.slice(0,rest), rest) + totalAs;

    } else {
        s = s.slice(0,n);

        return repeatedString(s,n);
    }

}

//console.log(repeatedString('', 10));
console.log(repeatedString('ababa', 3));
//console.log(repeatedString('aba', 10));
//console.log(repeatedString('a', 1000000000000));