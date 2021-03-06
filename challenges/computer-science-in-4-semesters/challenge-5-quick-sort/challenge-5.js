var quickSort = (function quickSort() {
    var inputArray = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

    quickSort(inputArray);

    ///////////////////////////////

    /**
     * Recursively calls itself to divide the array until its size becomes one.
     */
    function quickSort(nums) {
        var len = nums.length;

        if (len <= 1) {
            return nums;
        } else {
            var pivot = nums[len - 1]; // Not using pop to not mutate the nums array.
            var left = [];
            var right = [];

            for (var i = 0; i < len - 1; i++) {

                if (nums[i] < pivot) {
                    left.push(nums[i]);
                } else {
                    right.push(nums[i]);
                }
            }

            return quickSort(left).concat(pivot, quickSort(right));

        }
    }

    return {
        quickSort: quickSort
    }

}());