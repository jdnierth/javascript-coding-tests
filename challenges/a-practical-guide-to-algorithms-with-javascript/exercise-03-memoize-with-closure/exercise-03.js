var memoization = (function memoization() {

    var times10 = function (n) {
        return n * 10;
    };

    var memoizedClosureTimes10 = function () {
        var cache = {}; // Isn't being reset everytime the function is being called and not cluttering the global scope.

        return function memoTimes10(n) {
            if (cache[n] || cache[n] === 0) {
                console.log('Fetching from cache');
                return cache[n];
            } else {
                console.log('Calculating');
                return times10(n);
            }
        }
    };

    var memoClosureTimes10 = memoizedClosureTimes10();

    console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
    try {
        console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
        console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
    } catch (e) {
        console.error('Task 3:', e);
    }

    return {}
})();