/**
 * Take an array of arrays and flatten them into a single array
 * ex. [[1,2],[3,4],[5,6],[7]] = [1,2,3,4,5,6,7]
 */
function flattenArray(numbers){
    return numbers.reduce(reduceToOne, []);
}

function reduceToOne(acc, number) {
    for(var i = 0; i < number.length; i++) {
        acc.push(number[i]);
    }

    return acc;
}

console.log(flattenArray([[1,2],[3,4],[5,6],[7]]));