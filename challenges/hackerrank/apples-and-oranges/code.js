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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    // Step 1.1: Distances of apples compared to a
    var appleDistances = apples.map(calcPos, a);

    // Step 1.2: Count how many positions are within the distance range
    console.log(appleDistances.filter(withinRangeApples, {s: s, t: t}).length);

    // Step 2: Distances of oranges compared to b
    var orangeDistances = oranges.map(calcPos, b);

    // Step 2.1: Count how many positions are within the distance range
    console.log(orangeDistances.filter(withinRangeOranges, { s: s, t: t }).length);
}

function calcPos(value) {
    return value + this;
}

function withinRangeApples(a) {
    return (a > this.s && a < this.t);
}


function withinRangeOranges(a) {
    return (a < this.s && a > this.t);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
