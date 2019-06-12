/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/
/**
 *
 * @param  {Array} numbers array of numbers to sort
 */
function inPlaceInsertionSort(numbers) {

    for (var i = 1, len = numbers.length; i < len; i++) {

        var rightValue = numbers[i];
        var j = i - 1;

        // Move elements of arr[0..u-1], that are greater than the rightValue, to one position ahead of their current position
        while (j >= 0 && numbers[j] > rightValue) {
            numbers[j + 1] = numbers[j];
            console.log(numbers.join(" "));
            j--;
        }

        numbers[j + 1] = rightValue;
        console.log(numbers.join(" "));
    }

    return numbers;
}

inPlaceInsertionSort([4, 5, 1, 2, 3]);