// unit tests
describe('unique sort with cache', function () {
    it('Uniq sort will remove all duplicates and show the unique numbers in an ascending order', function (done) {
        var input1 = [4,2,2,2,2,6,3];
        var result1 = uniqeSortWithCache.uniqSort(input1);
        var input2 = [4,1,2,3,0];
        var result2 = uniqeSortWithCache.uniqSort(input2);
        var input3 = [];
        var result3 = uniqeSortWithCache.uniqSort(input3);

        expect(result1).toEqual([2,3,4,6]);
        expect(result2).toEqual([0,1,2,3,4]);
        expect(result3).toEqual([]);

        done();
    });

    it('Sort will order numbers in ascending order', function(done) {

        var input1 = [3,0,2,6,10,7];
        var result1 = input1.sort(uniqeSortWithCache.sortAscending);
        var input2 = [];
        var result2 = input2.sort(uniqeSortWithCache.sortAscending);
        var input3 = [1];
        var result3 = input3.sort(uniqeSortWithCache.sortAscending);
        var input4 = ['h2llo'];
        var result4 = input4.sort(uniqeSortWithCache.sortAscending);

        expect(result1).toEqual([0,2,3,6,7,10]);
        expect(result2).toEqual([]);
        expect(result3).toEqual([1]);
        expect(result4).toEqual(['h2llo']);

        done();
    })
});