function mySelectionSort(numbers,sortedPtr) {

    // If numbers array is [] return
    if(numbers.length == 0) {
        return numbers;
    }

    // Create a pointer ptr to the end of the sorted list, initialize with 0;
    // Base case: if the sortedPtr has not reached the end of the array, the array is not sorted yet
    while(sortedPtr != numbers.length - 1) {
        // Loop through the array of numbers and find the smallest number
        var smallestNumber = findSmallestNumberAndReturnValueWithIndex(numbers, sortedPtr);

        // Swap the smallest number with the position of ptr + 1;
        swapValuesByIndex(numbers, sortedPtr, smallestNumber['index']);

        // Increment pointer
        sortedPtr ++;
    }

    return numbers;
}
function swapValuesByIndex(numbers, x,y) {
    var tmp = numbers[x];
    numbers[x] = numbers[y];
    numbers[y] = tmp;
}

function findSmallestNumberAndReturnValueWithIndex(numbers,ptrPos) {
    var smallestNumber = false;

    for(var i = ptrPos; i < numbers.length; i++) {

        if(!smallestNumber.hasOwnProperty('index')) {
            smallestNumber = {
                index: i,
                value: numbers[i]
            }
        }

        if(smallestNumber.value > numbers[i]) {
            smallestNumber = {
                index: i,
                value: numbers[i]
            }
        }
    }

    return smallestNumber;
}

console.log(mySelectionSort([3,2,-1,1,1,0],0));
