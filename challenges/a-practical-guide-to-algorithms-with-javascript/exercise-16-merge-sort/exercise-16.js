var mergeSort = (function mergeSort() {

    function mergeSort(list) {

        if (list.length < 2) return list;

        // Cut list in half
        var lists = cutListInHalf(list);
        var leftList = lists.left || [];
        var rightList = lists.right || [];

        var leftSorted = mergeSort(leftList);
        var rightSorted = mergeSort(rightList);

        return mergeLists(leftSorted, rightSorted);

    }

    function cutListInHalf(list) {
        var m = Math.floor(list.length / 2);

        return {
            left: list.splice(0, m),
            right: list
        }
    }

    function mergeLists(leftList, rightList) {
        var result;
        var leftListLength = leftList.length;
        var rightListLength = rightList.length;

        if (leftListLength >= rightListLength) {
            result = mergeList(leftList, rightList, leftListLength);
        } else {
            result = mergeList(rightList, leftList, rightListLength);
        }

        return result;
    }

    /**
     *
     * @param {Array} list1 longer array
     * @param {Array} list2 shorter array
     * @param {Number} len length of the longer array.
     */
    function mergeList(list1, list2, len) {
        var result = [];

        for (var i = 0; i < len; i++) {

            if (list2[i] && (list1[i] > list2[i])) {

                result.push(list2[i]);

            } else if (list2[i] && (list1[i] < list2[i])) {

                result.push(list1[i]);

                // If list1 is longer than list2 add the residing item
            } else {
                result.push(list1[i]);
            }
        }

        console.log('result: ', result, ' list1: ', list1, ' list2: ', list2);

        return result;
    }

    console.log(mergeSort([2, 4, 1, 3]));

    return {
        cutListInHalf: cutListInHalf,
        mergeLists: mergeLists,
        mergeSort: mergeSort
    }
})();