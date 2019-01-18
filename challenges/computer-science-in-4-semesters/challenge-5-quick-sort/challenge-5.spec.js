// unit tests
describe('quick sort', function () {
    it('should sort correctly', function (done) {
        var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

        nums = quickSort.quickSort(nums);

        expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        done();
    });

    it('should return an empty list', function (done) {
        var nums = [];

        nums = quickSort.quickSort(nums);

        expect(nums).toEqual([]);

        done();
    });
});