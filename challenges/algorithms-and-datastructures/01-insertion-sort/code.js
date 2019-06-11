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
    var len = numbers.length;

    for(var y = len - 1; y > 0; y--) {

        // 1. Take the last item
        var cur = numbers[y],
            x = y - 1;

        // TODO: After swap the y coordinate is not correct
        while(x >= 0) {
            var left = numbers[x];
            // 2.1 If last item < previous item, swap in place
            if(cur < left) {
                numbers[x] = cur;
                numbers[y] = left;
                console.log(numbers.join(' '));
            }
            // 2.2 If last item > previous item, keep as is

            x--;
        }
    }

    return numbers;
}

inPlaceInsertionSort([2,3,1,7]);