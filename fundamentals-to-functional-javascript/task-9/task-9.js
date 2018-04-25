(function () {

    var _ = {};

    _.reduce = function(collection, cb, acc) {
        for(var i = 0; i < collection.length; i++) {
            acc = cb(collection[i], acc);
        }

        return acc;
    };

    function add(a,b) {
        return a + b;
    }

    var res = _.reduce([1,5,6],add,0);

    console.log('res: ', res);

})();