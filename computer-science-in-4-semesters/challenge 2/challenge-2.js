(function bubbleSort() {
    var count = 0;
    var inputArray = [6, 1, 3, 5, 4, 2];
    var result = bubbleSort(inputArray);

    console.log('Input: ', inputArray, ' result: ', result);

    ///////////////////////////////

    function bubbleSort(nums) {
        var length = nums.length;
        console.log('BUBBLE SORT: ', nums, ' ',nums.length);

        var outputArray = Object.assign([], nums);

        for (var i = 0; i < length; i++) {
            console.log('1: ');
            var n1 = outputArray[i];

            var n2 = outputArray[i + 1];

            // Swap numbers
            if (n1 > n2) {

                outputArray[i] = n2;
                outputArray[i + 1] = n1;


            }

            if ((i + 1) === length) {

                count = count + 1;
                if (!isSorted(outputArray)) {
                    console.log('is not sorted, call bubblesort again on this: ', outputArray);
                    bubbleSort(outputArray);
                } else {
                    console.log('Break');
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
        console.log('nUMS: ', nums);
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