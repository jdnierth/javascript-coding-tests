var joinElementsRecursively = (function joinElementsRecursively() {

    function joinElements(stringArray, s) {

        function concatString(i, s) {

            // base case
            if(i === stringArray.length - 1) {
                return s += stringArray[i];
            }

            return concatString(i+1, s + stringArray[i]);
        }

        // recursive case
        return concatString(0, s);
    }

    console.log(joinElements(['h','e','l','l','o'],''));

    return {
        joinElements: joinElements
    }
})();