// unit tests
describe('JoinElementsIteratively', function () {
    it('join', function (done) {
        expect(joinElementsIteratively.joinElements([''],'')).toEqual('');
        expect(joinElementsIteratively.joinElements(['h','e'],'')).toEqual('he');
        expect(joinElementsIteratively.joinElements(['hello','you'],'')).toEqual('helloyou');
        expect(joinElementsIteratively.joinElements(['1',2,'3'],'')).toEqual('123');

        done();
    });
});