// unit tests
describe('BubbleSort', function () {
    it('BubbleSort returns the index of the searched number that was found within the dataset', function (done) {
        expect(bubbleSort.bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8], 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        done();
    });

    it('BubbleSort returns [] if the input is empty', function (done) {
        expect(bubbleSort.bubbleSort([], 0)).toEqual([]);
        done();
    });

    it('BubbleSort returns the same list if it is already sorted', function (done) {
        expect(bubbleSort.bubbleSort([1, 2, 3], 0)).toEqual([1, 2, 3]);
        done();
    });

    it('BubbleSort accepts negative numbers', function (done) {
        expect(bubbleSort.bubbleSort([1, -2, 3, 0], 0)).toEqual([-2, 0, 1, 3]);
        done();
    });
});