// unit tests
describe('insertion sort', function () {
    it('should sort correctly', function (done) {
        var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

        nums = insertionSort.insertionSort(nums);

        expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        done();
    });

    it('should return an empty list', function (done) {
        var nums = [];

        nums = insertionSort.insertionSort(nums);

        expect(nums).toEqual([]);

        done();
    });

    it('new numbers should be inserted in their correct position', function(done) {
        var nums1 = [3,5,8,9];
        var num1 = 4;
        var result1 = insertionSort.insertNewNumber(nums1,num1);

        expect(result1).toEqual([3,4,5,8,9]);


        var nums2 = [3,5,8,9];
        var num2 = -1;
        var result2 = insertionSort.insertNewNumber(nums2,num2);
        expect(result2).toEqual([-1,3,5,8,9]);

        done();

    })
});