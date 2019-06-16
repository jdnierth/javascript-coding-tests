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
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
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

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
*/

// Complete the rotLeft function below.
function rotLeft(a, d) {
    var head = a.slice(0,d);
    var tail = a.slice(d);

    return tail.concat(head);
}

rotLeft([1,2,3,4,5],4);

