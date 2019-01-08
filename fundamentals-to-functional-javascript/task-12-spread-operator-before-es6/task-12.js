(function () {

    var ifElse = function(condition, isTrue, isFalse) {
        // Slice off the first 3 parameters and keep the rest.
        var args = [].slice.call(arguments,3);
        return condition? isTrue.apply(this,args) : isFalse.apply(this,args);
    };

    var logTrue = function(msg) {
        console.log(msg);
    };

    var logFalse = function(msg) {
        console.log(msg);
    };

    ifElse(true, logTrue, logFalse, 'Hi', 'Bye', 'Hola');

})();