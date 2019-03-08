var linearSearch = (function linearSearch() {

    /**
     * Loops through a list of list one by one until it finds the element the user searches for.
     *
     * @param {Array} list that needs to be searched through (aka 'haystack').
     * @param {Number} item the element the user wants to search for (aka 'needle').
     *
     * @return {Number} i the index on which the element item was found within list.
     */
    function linearSearch(list, item) {
        for(var i = 0, len = list.length; i < len; i++) {
            if(list[i] == item) {
                return i;
            }
        }

        throw new Error('The element could not be found within the given dataset.');
    }

    return {
        linearSearch: linearSearch
    }
})();