// unit tests
describe('Stack', function () {
    var stack;

    beforeEach(function () {
        stack = new Stack();
    });

    it('Push an item on to the stack', function (done) {
        var value = 1;
        var stackNew = {
            '0': 1
        };

        stack.push(value);

        expect(stackNew).toEqual(stack);

        done();
    });

});