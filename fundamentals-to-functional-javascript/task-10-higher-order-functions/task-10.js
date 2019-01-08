(function () {

    function increment(a) {
        return a + 1;
    }

    function square(n) {
        return n * n;
    }

    function callFunc(n, func) {
        return func(n);
    }

    console.log('INCREMENT 4: ', callFunc(4, increment));
    console.log('SQUARE OF 2: ', callFunc(2, square))

})();