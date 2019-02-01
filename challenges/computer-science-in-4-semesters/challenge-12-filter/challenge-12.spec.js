// unit tests
describe('MyFilterFunctions', function () {
    var filterFunctions,
        people = [
            {name: 'Cornelius Butter', state: 'CA'},
            {name: 'Sebastian Guide', state: 'WA'},
            {name: 'Lore Evans', state: 'UT'},
            {name: 'Ludo Terence', state: 'TX'},
            {name: 'Olaf Jasper', state: 'CA'}
        ];

    beforeEach(function () {
        filterFunctions = new MyFilterFunctions();
    });

    it('Keep even numbers', function (done) {
        var input = [1, 2, 5, 10];

        expect(filterFunctions.filterOutOdds(input)).toEqual([2, 10]);

        done();
    });

    it('Filter people by state', function (done) {
        var result = [
            {name: 'Cornelius Butter', state: 'CA'},
            {name: 'Olaf Jasper', state: 'CA'}
        ];

        expect(filterFunctions.filterState(people, 'ca')).toEqual(result);

        done();
    });
    it('Filters, transforms and reduces', function (done) {

        expect(filterFunctions.showOutOfCADevs(people)).toEqual('CORNELIUS BUTTER, OLAF JASPER');

        done();
    });
});