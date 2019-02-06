"use strict";

(function () {

    function objOfMatches(array1, array2, callback) {
        var res =  {};

        for(var i = 0; i < array1.length; i++) {
            var upper = callback(array1[i]);

            if(array2 && upper === array2[i]) {
                res[array1[i]] = array2[i];
            }
        }

        return res;
    }

    function transform(str) {
        return str.toUpperCase();
    }

    objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], transform);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

})();