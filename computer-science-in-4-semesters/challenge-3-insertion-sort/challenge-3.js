(function insertionSort() {
    var count = 0,
        inputArray = [6, 1, 3, 5, 4, 2],
        result = insertionSort(inputArray);

    console.log('Input: ', inputArray, ' result: ', result, ' iteration: ', count);

    ///////////////////////////////

    function insertionSort(nums) {
        var outputArray = [];

        for (var i = 0, length = nums.length; i < length; i++) {

            if(i === 0) {
                outputArray.push(nums[i]);
            }

            outputArray = insertNewNumber(outputArray, nums[i]);
            count = count + 1;
        }

        return outputArray;
    }

    function insertNewNumber(outputArray, newNumber) {
        for(var i = 0, len = outputArray.length; i < len; i++) {
            if(outputArray[i] > newNumber) {
                outputArray.splice(i,0,newNumber);
                break;
            }
        }

        return outputArray;

    }

    /**
     * Checks if an array is sorted.
     *
     * @param {array} nums array of numbers
     * @returns {boolean} returns true if array is sorted else false.
     */
    function isSorted(nums) {
        var length = nums.length;

        for (var i = 0; i < length; i++) {
            if ((i + 1) <= length) {
                if (nums[i] > nums[i + 1]) {
                    return false;
                }
            }
        }

        return true;
    }

}());