// unit tests
describe('joinElementsRecursively', function () {
    it('join', function (done) {
        expect(joinElementsRecursively.joinElements([''],'')).toEqual('');
        expect(joinElementsRecursively.joinElements(['h','e'],'')).toEqual('he');
        expect(joinElementsRecursively.joinElements(['hello','you'],'')).toEqual('helloyou');
        expect(joinElementsRecursively.joinElements(['1',2,'3'],'')).toEqual('123');

        done();
    });
});