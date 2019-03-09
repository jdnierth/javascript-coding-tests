var makeChange = (function makeChange() {
    var results = [];

    function makeChangeInit(input, goal, current) {
        // 1. Sort the input in an ascending order
        input = sortDescending(input);

        return makeChange(input, goal, current,0);
    }
    
    function makeChange(input, goal, current, index) {
        // Use the largest input
        var nGoal = (current != null) ? current : goal;

        index = index || 0;

        // 2. Substract the largest number from the goal
        if(nGoal === 0) return results;

        for(var i = index; i <= input.length; i++) {

            if(nGoal - input[i] >= 0) {
                nGoal = nGoal - input[i];
                results.push(input[i]);
            } else {
                return makeChange(input, goal, nGoal, i + 1);
            }

            return makeChange(input, goal, nGoal, i);
        }

        return results;
    }

    function sortDescending(list) {
        if(!list.length) return [];
        return list.sort(_makeDescending);
    }

    function _makeDescending(n, m) {
        return m - n;
    }

    return {
        makeChangeInit: makeChangeInit,
        sortDescending: sortDescending
    }
})();