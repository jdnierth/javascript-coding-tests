// unit tests
describe('BinarySearch', function () {
    it('BinarySearch returns the index of the searched number that was found within the dataset', function (done) {
        expect(binarySearch.getMiddleIndexOfList(0, 5)).toEqual(2);
        expect(binarySearch.getMiddleIndexOfList(0, 4)).toEqual(2);
        expect(function () {
            binarySearch.binarySearch([])
        }).toThrow(new Error('Item could not be found.'));
        //
        done();
    });

    it('BinarySearch function throws an error if no element could be found', function (done) {
        expect(function () {
            binarySearch.binarySearch([5, 1, 2, 3, 7], 10)
        }).toThrow(new Error('Item could not be found.'));
        done();
    });

    // TODO: Solve duplicates.
    // it('BinarySearch returns the first index if there are multiple items', function (done) {
    //     expect(binarySearch.binarySearch([1, 2, 3, 5, 5, 7], 5)).toEqual(4);
    //     expect(binarySearch.binarySearch([1, 2, 5, 5, 7], 5)).toEqual(2);
    //
    //     done();
    // });
});