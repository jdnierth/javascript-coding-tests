var bubbleSort = (function bubbleSort() {

    /**
     * BubbleSort, naive sorting algorithm which loops through a list and swaps adjacent numbers if the bigger number
     * is on the left and the lower number is on the right.
     *
     * @param {Array} list of numbers to be sorted in ascending order.
     * @param {Number} index the index to start with.
     * @returns {Array} the sorted list
     */
    function bubbleSort(list,index) {
        for (var i = index, len = list.length; i < len; i++) {

            if ((i < len - 1) && (list[i] > list[i + 1])) {
                swapElement(list, i, i + 1);
            }
        }

        return checkIfSorter(list);
    }

    /**
     * Loops through the list to check if it is sorted, if not, starts with bubbleSort again.
     *
     * @param {Array} list of unsorted elements.
     * @returns {Array} of sorted elements.
     */
    function checkIfSorter(list) {
        for(var i = 0, len = list.length; i < len; i++) {
            if ((i < len - 1) && (list[i] > list[i + 1])) {
                bubbleSort(list, i);
            }
        }

        return list;
    }

    /**
     * Swap 2 elements depending on the given indices.
     *
     * @param {Array} list of numbers
     * @param {Number} x to swap with y
     * @param {Number} y to swap with x
     */
    function swapElement(list, x, y) {
        var tmplarger = list[x];

        list[x] = list[y];
        list[y] = tmplarger;
    }

    console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8], 0));

    return {
        bubbleSort: bubbleSort
    }
})();