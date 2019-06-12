/*
SELECTION SORT

*** Description

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
- smallest element in unsorted subarray is 4
swap with element at beginning of unsorted subarray
- sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

*** Exercises

- Implement selection sort
- Identify time complexity

Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?

*/
function selectionSort(numbers) {
    var originalInput = numbers.slice();
    console.log("original input: ", originalInput);

    // Step 1: Loop through 0 - n-1 and find the minimum number
    for(var i = 0, len = numbers.length; i < len - 1; i++) {

        var minIndex = i;

        for(var k = i; k < len; k++) {

            // Step 2: Swap the found minimum number with the beginning of the list
            if(numbers[minIndex] > numbers[k + 1]) {
                minIndex = k + 1;
            }
        }

        swap(numbers, i, minIndex);
        console.log(numbers.join(" "));

    }

    console.log(numbers.join(" "));
    return numbers;
}

function swap(numbers, index1, index2) {
    var tmp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = tmp;
}

selectionSort([4,1,5,3,2,7,10]);
selectionSort([]);
selectionSort([1]);
selectionSort([1,-2, 4, 0,6]);