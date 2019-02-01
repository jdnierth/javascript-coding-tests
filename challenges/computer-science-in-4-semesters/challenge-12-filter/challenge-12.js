var MyFilterFunctions = (function MyFilterFunctions() {

    function MyFilterFunctions() {
    }

    MyFilterFunctions.prototype.myFilter = function(list,func) {
        var result = [];

        for(var i = 0, len = list.length; i < len; i++) {
            if(func(list[i])) {
                result.push(list[i]);
            }
        }

        return result;
    };

    MyFilterFunctions.prototype.filterOutOdds = function (inputArray) {
        // return inputArray.filter(_keepEven);
        return MyFilterFunctions.prototype.myFilter(inputArray,_keepEven);
    };

    MyFilterFunctions.prototype.filterState = function (arrayOfObjects, stateName) {
        return arrayOfObjects.filter(_getStateName.bind(this, stateName));
    };

    MyFilterFunctions.prototype.showOutOfCADevs = function (inputArrayOfObjects) {
        return inputArrayOfObjects
            .filter(_getStateName.bind(this, 'ca'))
            .map(_getUpperCaseNames)
            .reduce(_formatAllNamesIntoOne);
    };

    function _keepEven(n) {
        return (n % 2 === 0);
    }

    function _getStateName(stateName, person) {
        return (person.state && (person.state.toLowerCase() === stateName.toLowerCase()));
    }

    function _getUpperCaseNames(person) {
        return person.name.toUpperCase();
    }

    function _formatAllNamesIntoOne(acc, personName) {
        return acc + ', ' + personName;
    }

    return MyFilterFunctions;
}());
