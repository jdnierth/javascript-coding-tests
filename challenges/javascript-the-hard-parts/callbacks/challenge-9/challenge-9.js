"use strict";

(function () {
    function multiMap(arrVals, arrCallbacks) {
        var res = {};

        arrVals.map(function(el) {
            res[el] = arrCallbacks.map(function(cb) {
                return cb(el);
            });
        });

        return res;
    }

    multiMap(['catfood', 'glue', 'beer'], [function (str) {
        return str.toUpperCase();
    }, function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }, function (str) {
        return str + str;
    }]);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
})();