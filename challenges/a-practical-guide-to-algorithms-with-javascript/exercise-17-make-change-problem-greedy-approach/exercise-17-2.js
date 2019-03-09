var makeChange2 = (function makeChange2() {

    function makeChange(coins, amount) {
        coins = sortDescending(coins);
        var coinTotal = [];
        var i = 0;

        if(!coins.length) return coinTotal;

        while (amount > 0) {
            if (coins[i] <= amount) {
                amount -= coins[i];
                coinTotal.push(coins[i]);
            } else {
                i++;
            }
        }

        return coinTotal;
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