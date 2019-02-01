// unit tests
describe('LinkedList', function () {
    var mapfunction;

    beforeEach(function () {
        mapfunction = new MyMapFunctions();
    });

    it('takes in an array and returns an array where every element in the array is doubled', function (done) {
        var input = [1, 5, 10];

        expect(mapfunction.doubleEach(input)).toEqual([2, 10, 20]);

        done();
    });

    it('takes in an array and returns an array where every element in the array is squared', function (done) {
        var input = [1, 5, 10];

        expect(mapfunction.squareEach(input)).toEqual([1, 25, 100]);

        done();
    });

    it('takes in an array and returns an array where every element in the array is doubled and then squared', function (done) {
        var input = [1, 5, 10];

        expect(mapfunction.doubleAndSquare(input)).toEqual([4, 100, 400]);

        done();
    });

});