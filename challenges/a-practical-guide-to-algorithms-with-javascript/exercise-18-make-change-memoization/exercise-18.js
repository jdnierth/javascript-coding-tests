var makeChange2 = (function makeChange2() {
    var cache = {};
    var coins = [10, 6, 1];

    function makeChange(c) {

        // Return the value if it's in the cache
        if(cache[c]) return cache[c];

        var minCoins = -1;

        // Find the best coin
        coins.forEach(function(coin) {
           if(c - coin >= 0) {
               var currMinCoins = makeChange(c - coin);

               if(minCoins === -1 || currMinCoins < minCoins) {
                   minCoins = currMinCoins;
               }
           }
        });

        // Save the value into the cache
        cache[c] = minCoins + 1;

        return cache[c];
    }

    function sortDescending(list) {
        if (!list.length) return [];
        return list.sort(_makeDescending);
    }

    function _makeDescending(n, m) {
        return m - n;
    }

    console.log(makeChange([5, 10, 25], 40));

    return {
        sortDescending: sortDescending,
        makeChange: makeChange
    }
})();