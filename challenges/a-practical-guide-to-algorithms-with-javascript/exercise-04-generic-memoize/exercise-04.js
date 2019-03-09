var genericMemoization = (function genericMemoization() {

    var times10 = function (n) {
        return n * 10;
    };

    var memoize = function (cb) {
        var cache = {};

        return function(n) {
            if (cache[n] || cache[n] === 0) {
                console.log('Fetching from cache');
                return cache[n];
            } else {
                var result = cb(n);
                cache[n] = result;
                console.log('Calculating');
                return result;
            }
        }
    };

    // returned function from memoizedAdd
    var memoizedTimes10 = memoize(times10);

    console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
    try {
        console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
        console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
    } catch(e) {
        console.error('Task 4:', e)
    }
})();