// unit tests
describe('factorial', function () {
    it('should calculate factorial iteratively correctly', function (done) {
        var num1 = 1;
        var result1 = factorial.facIter(num1);
        var num2 = 2;
        var result2 = factorial.facIter(num2);
        var num3 = 3;
        var result3 = factorial.facIter(num3);

        expect(result1).toEqual(1);
        expect(result2).toEqual(2);
        expect(result3).toEqual(6);

        done();
    });

    it('should calculate factorial recursively correctly', function (done) {
        var num1 = 1;
        var result1 = factorial.facRecursive(num1);
        var num2 = 2;
        var result2 = factorial.facRecursive(num2);
        var num3 = 3;
        var result3 = factorial.facRecursive(num3);

        expect(result1).toEqual(1);
        expect(result2).toEqual(2);
        expect(result3).toEqual(6);

        done();
    });
    
});