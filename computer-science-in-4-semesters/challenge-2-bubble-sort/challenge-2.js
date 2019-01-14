(function bubbleSort() {
    var count = 0,
        inputArray = [10,5,3,8,2,6,4,7,9,1],
        result = bubbleSort(inputArray);

    console.log('Input: ', inputArray, ' result: ', result, ' iterations: ', count);

    ///////////////////////////////

    function bubbleSort(nums) {

        var outputArray = Object.assign([], nums);

        for (var i = 0, length = nums.length; i < length; i++) {
            count = count + 1;

            var n1 = outputArray[i],
                n2 = outputArray[i + 1];

            // Swap numbers
            if (n1 > n2) {
                outputArray[i] = n2;
                outputArray[i + 1] = n1;
            }

            if ((i + 1) === length) {

                if (!isSorted(outputArray)) {
                    return bubbleSort(outputArray);
                } else {
                    return outputArray;
                }
            }
        }
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