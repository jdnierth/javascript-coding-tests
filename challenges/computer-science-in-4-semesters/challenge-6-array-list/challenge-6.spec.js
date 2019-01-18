// unit tests
describe('ArrayList', function () {
    var newObj;

    beforeEach(function() {
       newObj = new ArrayList();
    });

    function _generateArrayOfNumbers(length) {
        return Array.apply(null, {length: length}).map(function(element, index) {
            return index + 1;
        });
    }

    it('should return how many elements are in the ArrayList', function (done) {

        _generateArrayOfNumbers(25).map(function(number) {
            newObj.push(number);
        });

        expect(newObj.length).toEqual(25);

        done();
    });

    it('should return the last element in the list', function (done) {

        _generateArrayOfNumbers(25).map(function(number) {
            newObj.push(number);
        });

        expect(newObj.pop()).toEqual(25);

        done();
    });

    it('should get the value of a particular index', function (done) {

        _generateArrayOfNumbers(25).map(function(number) {
            newObj.push(number);
        });

        expect(newObj.get(5)).toEqual(6);

        done();
    });


    it('should delete the value of a particular index', function (done) {

        _generateArrayOfNumbers(4).map(function(number) {
            newObj.push(number);
        });

        expect(newObj.delete(2)).toEqual(3);
        expect(newObj.get(3)).toEqual(4);
        expect(newObj.length).toEqual(3);

        done();
    });




});