/**
 * Split an array into chunked arrays of specific length
 * ex. chunkArray([1,2,3,4,5,6,7],3) === [[1,2,3],[4,5,6],[7]]
 * ex. chunkArray([1,2,3,4,5,6,7],2) === [[1,2],[3,4],[5,6],[7]]
 *
 */
function chunkArray(numbers, splitLength) {
    var chunks = [];
    var newChunk;

    for(var i = 0, len = numbers.length; i < len; i++) {

        if(i == 0 || i % (splitLength) == 0) {
            newChunk = [];
        }

        newChunk.push(numbers[i]);

        if(i % (splitLength) == 0) {
            chunks.push(newChunk);
        }
    }

    return chunks;
}

console.log(chunkArray([1,2,3,4,5,6,7],3));
console.log(chunkArray([1,2,3,4,5,6,7],2));