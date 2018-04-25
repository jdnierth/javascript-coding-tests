(function () {

    // ES6
    // var ifElse = function (condition, isTrue, isFalse, ...args) {
    //     return (condition) ? isTrue(...args) : isFalse(...args);
    // };

    // ES5
    var ifElse = function (condition, isTrue, isFalse) {
        var args = [].slice.call(arguments,3);
        return (condition) ? isTrue(args.join(' ')) : isFalse(args.join(' '));
    };

    function isTrue(params) {
        console.log('It is true: ', params);
    }

    function isFalse(params) {
        console.log('It is false: ', params);
    }

    ifElse(true,isTrue, isFalse, 'Hi', 'Hello')
})();