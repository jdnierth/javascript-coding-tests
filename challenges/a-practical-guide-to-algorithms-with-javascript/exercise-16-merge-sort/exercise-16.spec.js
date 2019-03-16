// unit tests
describe('BubbleSort', function () {
    it('cutListInHalf cuts list in half', function (done) {
        expect(mergeSort.cutListInHalf([1, 2, 3, 4, 5, 6])).toEqual({
            left: [1, 2, 3],
            right: [4, 5, 6]
        });

        expect(mergeSort.cutListInHalf([1, 2, 3, 4, 5, 6, 7])).toEqual({
            left: [1, 2, 3],
            right: [4, 5, 6, 7]
        });

        done();
    });

    it('mergeLists merges 2 lists and returns the result', function (done) {
        expect(mergeSort.mergeLists([1, 2, 3], [4, 5, 6])).toEqual([1,2,3,4,5,6]);
    //     expect(mergeSort.mergeLists([1, 2, 3], [])).toEqual([1,2,3]);
    //     // expect(mergeSort.mergeLists([], [])).toEqual([]);
    //
        done();
    });
    //
    //
    // it('mergeSort sorts an array', function (done) {
    //     expect(mergeSort.mergeSort([4,2,1,3])).toEqual([1,2,3,4]);
    //
    //     done();
    // });


});