// unit tests
describe('bubble sort', function () {
    it('should sort correctly', function (done) {
        var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

        nums = bubbleSort.bubbleSort(nums);

        expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        done();
    });

    it('should return [] if input is []', function (done) {
        var nums = [];

        nums = bubbleSort.bubbleSort(nums);

        expect(nums).toEqual([]);

        done();
    });

    it('should return true if input is sorted', function (done) {
        var nums = [2,3,4];

        expect(bubbleSort.isSorted(nums)).toBe(true);

        done();
    });

    it('should return false if input is not sorted', function (done) {
        var nums = [4,1,3];

        expect(bubbleSort.isSorted(nums)).toBe(false);

        done();
    });
});