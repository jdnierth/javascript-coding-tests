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

    return {
        binarySearch: binarySearch,
        getMiddleIndexOfList: getMiddleIndexOfList
    }
})();