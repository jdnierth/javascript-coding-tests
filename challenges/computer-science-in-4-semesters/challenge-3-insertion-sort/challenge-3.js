var insertionSort = (function insertionSort() {
    var inputArray = [10,5,3,8,2,6,4,7,9,1];

    insertionSort(inputArray);

    ///////////////////////////////

    function insertionSort(nums) {
        var outputArray = [];

        for (var i = 0, length = nums.length; i < length; i++) {

            if(i === 0) {
                outputArray.push(nums[i]);
            }

            outputArray = insertNewNumber(outputArray, nums[i]);
        }

        return outputArray;
    }

    function insertNewNumber(outputArray, newNumber) {
        for(var i = 0, len = outputArray.length; i < len; i++) {
            if(outputArray[i] > newNumber) {
                outputArray.splice(i,0,newNumber);
                break;
            }
        }

        return outputArray;

    }


    return {
        insertionSort: insertionSort,
        insertNewNumber: insertNewNumber
    }
}());