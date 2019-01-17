var insertionSort = (function insertionSort() {
    var count = 0,
        inputArray = [10,5,3,8,2,6,4,7,9,1];

    insertionSort(inputArray);

    ///////////////////////////////

    function insertionSort(nums) {
        var outputArray = [];

        for (var i = 0, length = nums.length; i < length; i++) {

            if(i === 0) {
                outputArray.push(nums[i]);
            }

            outputArray = insertNewNumber(outputArray, nums[i]);
            count = count + 1;
        }

        return outputArray;
    }

    function insertNewNumber(outputArray, newNumber) {
        for(var i = 0, len = outputArray.length; i < len; i++) {
            if(outputArray[i] > newNumber) {
                count = count + 1;
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