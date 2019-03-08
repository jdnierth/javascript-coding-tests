var MemoFnLoop = (function MemoFnLoop() {

    function MemoFnLoop(i, end) {
        console.log('Loop from ' + i + ' until end: ' + end);

        if(i < end) {
            MemoFnLoop(i + 1, end);
        }

    }

    MemoFnLoop(1,6);

})();