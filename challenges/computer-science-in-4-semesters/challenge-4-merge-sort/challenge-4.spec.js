// unit tests
// do not modify the below code
describe('merge sort', function () {
    it('should sort correctly', function (done) {
        var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

        nums = mergeSort.mergeSort(nums);

        expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        done();
    });

    it('should return an empty list', function (done) {
        var nums = [];

        nums = mergeSort.mergeSort(nums);

        expect(nums).toEqual([]);

        done();
    });

    it('lists should be merged in ascending order', function(done) {
        var nums1 = [3,5,8,9];
        var nums2 = [1,2,4,6,7];

        var nums = mergeSort.mergeLists(nums1,nums2);

        expect(nums).toEqual([1,2,3,4,5,6,7,8,9]);

        done();

    })
});