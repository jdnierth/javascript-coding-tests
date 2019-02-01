// unit tests
describe('MyReduceFunctions', function () {
    var reduceFunction;

    beforeEach(function () {
        reduceFunction = new MyReduceFunctions();
    });

    it('Take in a list and return the result of that list added together', function (done) {
        var input = [1, 5, 10];

        expect(reduceFunction.addTogether(input)).toEqual(16);

        done();
    });

    it('Take in a list and return a string with each input separated by a whitespace', function (done) {
        var input = ['hello', 'drink', 'sing'];

        expect(reduceFunction.concatenateStringsWithSpaces(input)).toEqual("hello drink sing");

        done();
    });

    it('Take in a list, square each item, substract the items per index', function (done) {
        var input = [1,2,10];

        expect(reduceFunction.squaresAndSubtracts(input)).toEqual(-103);

        done();
    });


});