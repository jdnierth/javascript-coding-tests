/**
 * Uses Mocha as a test framework and Chai as assertion library
 *
 * @author: Jessica Nierth
 * @date: 3/19/2017
 */
var expect = chai.expect;
var SimpleArraySum = new SimpleArraySum();

describe('getInputs', function () {

    // Grab the input array from the Dom of the testrunner.html
    var numbersAStrings = SimpleArraySum.getInput();

    it('The input of numbers shouldn\'t be empty', function () {
        expect(numbersAStrings).to.not.have.lengthOf(0);
    });


});

describe('calcSum', function () {

    it('The sum of empty String must be 0', function () {
        expect(function() {
            SimpleArraySum.calcSum(['']);
        }).to.throw('is not a number');
    });

    it('can handle numbers as strings', function () {
        expect(SimpleArraySum.calcSum(['1',1,'4'])).to.equal(6);
    });

    it('The sum must be 24', function () {
        expect(SimpleArraySum.calcSum([1, 3, 10, 10])).to.equal(24);
    });

    it('can handle negative values', function () {
        expect(SimpleArraySum.calcSum([-10, 10])).to.equal(0);
    });

});