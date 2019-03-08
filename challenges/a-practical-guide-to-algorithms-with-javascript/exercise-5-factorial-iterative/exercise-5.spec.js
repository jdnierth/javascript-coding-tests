// unit tests
describe('Factorial', function () {
    it('Multiply 2 numbers correctly', function (done) {
        expect(factorial.multiply(0,1)).toEqual(0);
        expect(factorial.multiply(0,0)).toEqual(0);
        expect(factorial.multiply(1,10)).toEqual(10);
        expect(factorial.multiply(-1,2)).toEqual(-2);

        done();
    });

    it('Check if input is of type number', function(done) {
        expect(factorial.isNaN('hello')).toBeTruthy();
        expect(factorial.isNaN('1')).toBeFalsy();
        expect(factorial.isNaN(1)).toBeFalsy();
        done();
    });

    it('Calculate factorial correctly', function (done) {
        expect(factorial.factorial(0)).toEqual(1);
        expect(factorial.factorial(1)).toEqual(1);
        expect(factorial.factorial(5)).toEqual(120);
        expect(function() {factorial.factorial(-1)}).toThrow(new Error('Number has to be > 0'));
        expect(function() {factorial.factorial('hello')}).toThrow(new Error('Number expected but character given'));

        done();
    });
});