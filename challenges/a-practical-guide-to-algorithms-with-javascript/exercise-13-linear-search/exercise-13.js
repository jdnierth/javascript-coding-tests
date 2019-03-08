var linearSearch = (function linearSearch() {

    /**
     * Loops through a list of elements one by one until it finds the element the user searches for.
     *
     * @param {Array} elements that needs to be searched through (aka 'haystack').
     * @param {Number} n the element the user wants to search for (aka 'needle').
     *
     * @return {Number} i the index on which the element n was found within elements.
     */
    function linearSearch(elements, n) {
        for(var i = 0, len = elements.length; i < len; i++) {
            if(elements[i] == n) {
                return i;
            }
        }

        throw new Error('The element could not be found within the given dataset.');
    }

    return {
        linearSearch: linearSearch
    }
})();