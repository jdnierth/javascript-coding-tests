/**
 * SOME DESCRIPTION
 *
 * @author: Jessica Nierth
 * @date: 15.03.2019
 */
var fibiter = (function fibiter() {

    function fibiter(n) {
        var result = [];

        for (var i = 0; i <= n; i++) {

            // could be written in if (n < 2) result.push(n);
            if (i === 0) {
                result.push(0);
            }
            if (i === 1) {
                result.push(1);
            }

            if (i > 1) {
                result.push(result[i - 2] + result[i - 1]);
            }
        }

        return result[n];
    }

    return {
        fibiter: fibiter
    }

});