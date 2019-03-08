// unit tests
describe('xxx', function () {
    it('xxx', function (done) {
        expect(factorial.multiply(0,1)).toEqual(0);
        expect(factorial.multiply(0,0)).toEqual(0);
        expect(factorial.multiply(1,10)).toEqual(10);
        expect(factorial.multiply(-1,2)).toEqual(-2);

        done();
    });
});