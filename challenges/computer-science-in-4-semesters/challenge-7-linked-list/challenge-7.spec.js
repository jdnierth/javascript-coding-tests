// unit tests
describe('LinkedList', function () {
    var linkedList;

    beforeEach(function () {
        linkedList = new LinkedList();
    });

    function _generateArrayOfNumbers(length) {
        return Array.apply(null, {length: length}).map(function (element, index) {
            return index + 1;
        });
    }

    it('should insert the element at the end of the LinkedList', function(done) {

       linkedList.push(1);
       linkedList.push(2);
       linkedList.push(3);

       expect(linkedList.pop().value).toEqual(2);

       done();
    });

    it('checks if the linkedList contains a certain value', function(done) {

       linkedList.push(1);
       linkedList.push(2);
       linkedList.push(3);

       expect(linkedList.contains(3)).toBe(true);

       done();
    });

    it('should return if an item is the head', function(done) {
        linkedList.push(1);
        linkedList.push(3);

        expect(linkedList.isHead(linkedList.get(1))).toBe(true);

        done();
    });

    it('should return if an item is the tail', function(done) {
        linkedList.push(1);
        linkedList.push(3);

        expect(linkedList.isTail(linkedList.get(3))).toBe(true);

        done();
    });

    it('should return the last element', function (done) {

        _generateArrayOfNumbers(25).map(function (number) {
            linkedList.push(number);
        });

        var last = {
            value: 24,
            next: null
        };

        expect(linkedList.pop().value).toEqual(last.value);

        done();
    });

    it('should remove an element properly', function (done) {

       linkedList.push(1);
       linkedList.push(2);
       linkedList.push(3);
       linkedList.delete(2);

        expect(linkedList.isTail(linkedList.get(3))).toBe(true);

        done();
    });


});