/**
 * Take an array of arrays and flatten them into a single array
 * ex. [[1,2],[3,4],[5,6],[7]] = [1,2,3,4,5,6,7]
 */
function flattenArray(numbers){
    // Solution 1
    return numbers.reduce(reduceToOne, []);

    // Solution 2
    // return [].concat.apply([], numbers);
}

function reduceToOne(acc, number) {
    return acc.concat(number);
}

console.log(flattenArray([[1,2],[3,4],[5,6],[7]]));

