var uniqeSortWithCache = (function uniqeSortWithCache() {

    function uniqSort(arr) {
        var cache = {},
            // Space complexity: A new array is being created here.
            result = [arr[0]];// The first element can never be a duplicate, hence it'll be part of the result.

        if (!arr || arr.length < 1) return [];

        // Add the first number to the cache.
        cache[arr[0]] = true;

        // If there are 2 numbers succeeding directly after each other, delete the 2nd one.
        // Start loop at index 1 as the first element can never be a duplicate
        for (var i = 1, len = arr.length; i < len; i++) {

            // If number is not part of the cache, it is no duplicate and can be added to the result
            if (!cache[arr[i]]) {
                result.push(arr[i]);
                cache[arr[i]] = true;
            }
        }

        return result.sort(sortAscending);
    }

    function sortAscending(a, b) {

        if (typeof (Number(a)) !== 'NaN' || typeof (Number(b)) != 'NaN') {
            console.log('Your input does only allow numbers but characters given');

            return false;
        }

        return a - b;
    }

    uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]

    return {
        uniqSort: uniqSort,
        sortAscending: sortAscending
    }
})();