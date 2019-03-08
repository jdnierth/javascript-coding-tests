var joinElementsIteratively = (function joinElementsIteratively() {

    function joinElements(stringArray, s) {
        var result = s;

        for(var i = 0, len = stringArray.length; i < len; i++) {
            result += stringArray[i];
        }

        return result;
    }

    console.log(joinElements(['h','e','l','l','o'],''));

    return {
        joinElements: joinElements
    }
})();