(function bubbleSort() {
    var count = 0,
        inputArray = [6, 1, 3, 5, 4, 2],
        result = bubbleSort(inputArray);

    console.log('Input: ', inputArray, ' result: ', result);

    ///////////////////////////////

    function bubbleSort(nums) {

        var outputArray = Object.assign([], nums);

        for (var i = 0, length = nums.length; i < length; i++) {

            var n1 = outputArray[i],
                n2 = outputArray[i + 1];

            // Swap numbers
            if (n1 > n2) {
                outputArray[i] = n2;
                outputArray[i + 1] = n1;
            }

            if ((i + 1) === length) {

                count = count + 1;

                if (!isSorted(outputArray)) {
                    bubbleSort(outputArray);
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