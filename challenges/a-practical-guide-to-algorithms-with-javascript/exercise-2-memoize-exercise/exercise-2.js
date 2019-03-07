var memoization = (function memoization() {

    var times10 = function(n) {
        return n * 10;
    };

    console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
    console.log('times10 returns:', times10(9));

    var cache = {};

    var memoTimes10 = function(n) {
        cache[n] = (!checkMemo(n)) ? times10(n) : checkMemo(n);

        return cache[n];
    };

    /**
     * Checks if the memo had already been calculated before.
     * If so, it'll return the number otherwise it'll return false.
     *
     * @param {Number} n to check for if it had been calculated before
     * @returns {Number | false} returns the result of memoTimes10(n) from the cache or false if it hadn't been
     * calculated before.
     */
    function checkMemo(n) {
        if(cache[n] || cache[n] === 0) {
            console.log('return cache');
            return cache[n];
        }
        return false;
    }

    console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
    console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
    console.log('Task 2 cached value:', memoTimes10(9));	// cached

    return {
    }
})();