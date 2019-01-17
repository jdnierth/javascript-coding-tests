var bubbleSort = (function bubbleSort() {
    var count = 0,
        inputArray = [10,5,3,8,2,6,4,7,9,1];

    bubbleSort(inputArray);

    ///////////////////////////////

    function bubbleSort(nums) {

        var outputArray = nums.slice();

        for (var i = 0, len = nums.length; i < len; i++) {
            count = count + 1;

            var n1 = outputArray[i],
                n2 = outputArray[i + 1];

            // Swap numbers
            if (n1 > n2) {
                outputArray[i] = n2;
                outputArray[i + 1] = n1;
            }

            if ((i + 1) === len) {

                if (!isSorted(outputArray)) {
                    return bubbleSort(outputArray);
                } else {
                    return outputArray;
                }
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

    return {
        bubbleSort: bubbleSort,
        isSorted: isSorted
    }
}());