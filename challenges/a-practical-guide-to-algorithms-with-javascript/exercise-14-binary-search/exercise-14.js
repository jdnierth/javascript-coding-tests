var binarySearch = (function binarySearch() {

    function getMiddleIndexOfList(min, max) {
        return Math.floor((min + max) / 2);
    }

    function binarySearch(list, item) {
        var min = 0;
        var max = list.length - 1;

        while (min <= max) {

            // Find the middle of the list (m)
            var m = getMiddleIndexOfList(min, max);

            // If n == m, the element has been found (base condition)
            if (list[m] == item) {
                return m;
            }

            if (item > list[m]) {
                // If n > m, continue the search to the right
                min = m + 1;
            } else {
                // If n < m, continue the search to the left
                max = m - 1;
            }
        }

        throw new Error('Item could not be found.');
    }

    console.log(binarySearch([1, 2, 3, 4, 6, 7], 2));

    /**
     * Traverses through neighbours to find the first item. The moment the neighbour element is a different
     * element, the search can be stopped.
     *
     * Assumption: Sorted list in ascending order with items that can contain duplicates.
     *
     * @param {Array} list containing all elements
     * @param {Number} index of the found item from which the this search should be started from.
     */
    function findFirstItem(list, index) {

        if(!list.length) {
            throw new Error('List is empty');
        }

        for(var i = index; i >= 0; i--) {
            // Once the items are different, take the right hand side element
            if(list[i] !== list[index]) {
                return i + 1;
            }
        }

        throw new Error('Item could not be found');
    }

    return {
        binarySearch: binarySearch,
        findFirstItem: findFirstItem,
        getMiddleIndexOfList: getMiddleIndexOfList
    }
})();