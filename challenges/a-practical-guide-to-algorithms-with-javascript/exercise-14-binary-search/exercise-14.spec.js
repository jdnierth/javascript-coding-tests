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

    it('Find first element', function (done) {
        expect(binarySearch.findFirstItem([1, 2, 2, 2, 5], 3)).toEqual(1);
        expect(binarySearch.findFirstItem([1, 2, 3, 4], 2)).toEqual(2);

        expect(function () {
            binarySearch.findFirstItem([], 3)
        }).toThrow(new Error('List is empty'));

        done();
    });
});