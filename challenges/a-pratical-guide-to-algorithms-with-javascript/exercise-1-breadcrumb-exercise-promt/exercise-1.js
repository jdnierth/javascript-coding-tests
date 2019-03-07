(function() {

    function uniqSort(arr) {
        var cache = {},
            result = [arr[0]];// The first element can never be a duplicate, hence it'll be part of the result.

        // If there are 2 numbers succeeding directly after each other, delete the 2nd one.
        // Start loop at index 1 as the first element can never be a duplicate
        for(var i = 1, len = arr.length; i < len; i++) {

            // If number is not part of the cache, it is no duplicate and can be added to the result
            if(!cache[arr[i]]) {
                result.push(arr[i]);
                cache[arr[i]] = true;
            }

            // If it is the last item, return the result
        }

        return result.sort(sortAscending);
    }

    function sortAscending(a,b) {
       return a - b;
    }

    uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
})();