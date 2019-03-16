// unit tests
describe('MyDataStructures', function () {
    var myDataStructures;

    beforeEach(function () {
        myDataStructures = new MyDataStructures();
    });

    it('add', function (done) {

        expect(myDataStructures.add(2,3)).toEqual(5);
        expect(myDataStructures.add(0,0)).toEqual(0);

        done();
    });

    it('add2', function (done) {
        expect(myDataStructures.add2(myDataStructures.foo,myDataStructures.bar)).toEqual(8);
        done();
    });

    it('addn', function (done) {
        expect(myDataStructures.addn([myDataStructures.foo, myDataStructures.bar, myDataStructures.foo])).toEqual(11);
        done();
    });

});