(function () {

    var _ = {};

    function _print(a,b) {
        console.log('[' + a + ',' + b + ']');
    }

    _.curry = function(fn) {
        return function(a) {
            return function(b) {
                fn(a,b);
            }
        };
    };

    var curried = _.curry(_print);

    console.log(curried(1)(2));
})();