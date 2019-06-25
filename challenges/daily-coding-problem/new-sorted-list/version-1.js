/**
 * Task: Return a new sorted merged list from K sorted lists, each with size N.
 *
 * Example input: [[10, 15, 30], [12, 15, 20], [17, 20, 32]]
 * Output: [10,12,15,15,17,20,20,30,32]
 */

function listMerger(nestedArrayOfNumbers) {
    // Step 1: Flatten nested list
    var flattenedList = nestedArrayOfNumbers.reduce(flattenLists, []);

    // Step 2: Sort list - Mutating the
    flattenedList.sort(sortNumbers);

    return flattenedList;
}

function flattenLists(total, currentValue) {
    return total.concat(currentValue);
}

function sortNumbers(a,b) {
    return a - b;
}

console.log(listMerger([[]]));
console.log(listMerger([[],[],[]]));
console.log(listMerger([[],[1],[2]]));
console.log(listMerger([[],[1,2],[]]));
console.log(listMerger([[3,2],[1]]));
console.log(listMerger([[3,2],[1,4,10],[0,-1,9]]));

/*
Time complexity:
- List of length n, nested list items of k
- Flatten list by looping through it once of length k
- Sorting flattened list of length n * k by javaScripts sort implementation (prob. quicksort or mergesort)
 */