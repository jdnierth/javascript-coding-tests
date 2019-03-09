// unit tests
describe('MakeChange', function () {
    it('Sort numbers in ascending order', function (done) {
        expect(makeChange.sortDescending([11, 1, 9, 8, 2])).toEqual([11, 9, 8, 2, 1]);
        expect(makeChange.sortDescending([])).toEqual([]);
        expect(makeChange.sortDescending([0, -10, 2, 3, 4])).toEqual([4, 3, 2, 0, -10]);

        done();
    });

    it('MakeChange with the least amount of variations', function (done) {
        expect(makeChange.makeChangeInit([], 40, null, 0)).toEqual([]);
        expect(makeChange.makeChangeInit([5, 10, 25], 40, null, 0)).toEqual([25, 10, 5]);

        done();
    });

});
describe('MakeChange2', function () {
    it('Sort numbers in ascending order', function (done) {
        expect(makeChange2.sortDescending([11, 1, 9, 8, 2])).toEqual([11, 9, 8, 2, 1]);
        expect(makeChange2.sortDescending([])).toEqual([]);
        expect(makeChange2.sortDescending([0, -10, 2, 3, 4])).toEqual([4, 3, 2, 0, -10]);

        done();
    });

    it('MakeChange with the least amount of variations', function (done) {
        expect(makeChange2.makeChange([], 40)).toEqual([]);
        expect(makeChange2.makeChange([5, 10, 25], 40)).toEqual([25, 10, 5]);

        done();
    });

});