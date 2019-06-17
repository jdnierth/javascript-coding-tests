/*
MERGE SORT

*** Description

- Merge sort employs a divide and conquer strategy
- Merges two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]


================
Pseudocode (of the combine and work)
================
merge(L,R)
Rpr = 0
Lpr = 0
Output array = []

Loop until L.ln === Lpr and R.ln === Rpr
    if L[Lpr] > R[Rpr]
        push R[Rpr] to output
        increment RPR
    else
        push L[Lpr] to output
        increment LPR
Return output

// handle case if any of those 2 lists is empty

================
Pseudocode (full)
================
mergeSort(list)
    base case: if list.length < 2, return
    break the list into halves L & R
    Lsorted = mergeSort(L)
    Rsorted = mergeSort(R)
    merge(L,R)
*/
function mergeSortRecursive(numbers) {

    // Base case: Divide the list into 2 lists until having a list with length of 1
    if (numbers.length == 1) {
        return numbers;
    }

    // Divide and Conquer
    var lists = divideList(numbers);

    var sortedLeftList = mergeSortRecursive(lists.leftList);
    var sortedRightList = mergeSortRecursive(lists.rightList);

    // Merge Subarrays
    return merge(sortedLeftList, sortedRightList);

}

function divideList(numbers) {
    var list = {
        leftList: [],
        rightList: []
    };

    if (!numbers.length) {
        return list;
    }

    var len = numbers.length;
    list.leftList = numbers.slice(0, len / 2);
    list.rightList = numbers.slice(len / 2, len);

    return list;
}

function merge(l, r) {
    var output;

    // Compare the first items of each list and merge them together in a sorted manner
    if (l.length > r.length) {
        output = loopAndMerge(l, r);
    } else {
        output = loopAndMerge(r, l);
    }

    return output;
}

function loopAndMerge(longList, shortList) {
    var result = [];
    var lPtr = 0;
    var sPtr = 0;


    if(lPtr === longList.length) {
        // If all elements on the left have been added, then add remaining elements
        result.concat(shortList.slice(sPtr));
    } else if(sPtr === shortList.length) {
        // If all elements on the right have been added, then add remaining elements
        result.concat(longList.slice(lPtr));
    } else if(longList[lPtr] <= shortList[sPtr]) {
        result.push(longList[lPtr++])
    } else {
        result.push(shortList[sPtr++])
    }


    return result;
}

// Test for list division
// console.log(divideList([1]));
// console.log(divideList([1,2]));
// console.log(divideList([1,2,3]));
// console.log(divideList([1,2,3,4]));
// console.log(divideList([1,2,3,4,5]));

// Loop and merge
// console.log(loopAndMerge([1],[0]));
// console.log(loopAndMerge([],[1]));
// console.log(loopAndMerge([1],[]));
// console.log(loopAndMerge([1,10],[8,9]));
// console.log(loopAndMerge([1,5,10],[3,4,8,9]));
// console.log(loopAndMerge([1,5,10],[3,4,5,8,9]));
var input = [3, 9, 10, 1, 0];
console.log("input: ", input);
console.log(mergeSortRecursive(input));
