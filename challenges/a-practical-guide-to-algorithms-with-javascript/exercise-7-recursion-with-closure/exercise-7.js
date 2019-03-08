var wrapperFnLoop = (function wrapperFnLoop() {

    function wrapperFnLoop(start, end) {
        function recurse(i){
            console.log('Loop from ' + i + ' until end: ' + end);

            if(i < end) {
                recurse(i + 1);
            }
        }

        recurse(start);
    }

    wrapperFnLoop(1,4);

})();