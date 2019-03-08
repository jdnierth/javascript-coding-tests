// unit tests
describe('LinearSearch', function () {
    it('LinearSearch returns the index of the searched number that was found within the dataset', function (done) {
        expect(linearSearch.linearSearch([5,1,2,3,7],3)).toEqual(3);
        expect(linearSearch.linearSearch([5,1,2,3,7],5)).toEqual(0);

        done();
    });

    it('LinearSearch function throws an error if no element could be found', function(done) {
        expect(function() {
            linearSearch.linearSearch([5,1,2,3,7],10)
        }).toThrow(new Error('The element could not be found within the given dataset.'));
        done();
    });

    it('LinearSearch returns the first index if there are multiple items', function(done) {
        expect(linearSearch.linearSearch([5,1,2,3,7],5)).toEqual(0);

        done();
    });
});