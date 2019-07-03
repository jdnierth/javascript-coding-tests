/**
 * Implement QuickSort
 */
function quickSort(arr, left, right) {
    var pivot,
        partitionIndex;

    if (left < right) {
        pivot = arr[right];
        partitionIndex = _partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }

    return arr;

}

// Mutating operation
function _swap(numbers, i, j) {
    var tmp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = tmp;
}

// Move all items smaller than the pivot to the left, others to the right
function _partition(arr, pivot, left, right) {
    var partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivot) {
            _swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    _swap(arr, right, partitionIndex);
    console.log(arr);
    return partitionIndex;
}

console.log(quickSort([16, 11, 9, 7, 6, 5, 3, 2], 0, 7));
//console.log(quickSort([1, 6, 8, 2, 5], 0, 4));

