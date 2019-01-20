// unit tests
describe('LinkedList', function () {
    var newObj;

    beforeEach(function () {
        newObj = new LinkedList();
    });

    function _generateArrayOfNumbers(length) {
        return Array.apply(null, {length: length}).map(function (element, index) {
            return index + 1;
        });
    }

    it('should return the last element', function (done) {

        _generateArrayOfNumbers(25).map(function (number) {
            newObj.push(number);
        });

        var last = {
            value: 25,
            next: null
        };

        expect(newObj.pop().value).toEqual(last.value);

        done();
    });


});