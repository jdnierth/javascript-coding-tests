var mergeSort = (function mergeSort() {
    var count = 0,
        inputArray = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

    mergeSort(inputArray);

    ///////////////////////////////

    /**
     * Recursively calls itself to divide the array until its size becomes one.
     */
    function mergeSort(nums) {

        var length = nums.length,
            m,
            left,
            right;

        if (length < 2) {
            return nums;
        }

        m = Math.ceil(length / 2);
        left = nums.slice(0, m);
        right = nums.slice(m, length);

        count = count + 1;

        return mergeLists(mergeSort(left), mergeSort(right));
    }

    /**
     * Merging 2 lists together. Assuming that each list is already sorted.
     *
     * @param {array} a1 Array of numbers to sort.
     * @param {array} a2 Array of numbers to sort.
     */
    function mergeLists(a1, a2) {
        var output = [];

        while(a1.length && a2.length) {
            if (a1[0] <= a2[0]) {
                output.push(Number(a1.splice(0, 1).join()));
            } else {
                output.push(Number(a2.splice(0, 1).join()));
            }
        }

        if (a1.length) {
            for (var k = 0, lena2 = a1.length; k < lena2; k++) {
                output.push(a1[k]);
            }
        }

        if (a2.length) {
            for (var j = 0, lena3 = a2.length; j < lena3; j++) {
                output.push(a2[j]);
            }
        }

        return output;
    }

    return {
        mergeSort: mergeSort,
        mergeLists: mergeLists
    }

}());