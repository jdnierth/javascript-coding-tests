(function () {

    var _ = {};

    _.from = function(arr) {
        return Array.prototype.slice.call(arr);
    };


    var arr = _.from({'0': 'hello', '1':'you'});

    console.log('Array: ', arr);
})();