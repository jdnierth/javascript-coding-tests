(function () {

    var roomsDataSet = [
        {
            name: 'Miss Scarlet',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: true},
                {'dining room': true},
                {'billiard room': false},
                {library: true}
            ]
        },
        {
            name: 'Reverend Green',
            present: true,
            rooms: [
                {kitchen: true},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': true},
                {library: false}
            ]
        },
        {
            name: 'Colonel Mustard',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: true},
                {'dining room': false},
                {'billiard room': true},
                {library: false}
            ]
        },
        {
            name: 'Professor Plum',
            present: true,
            rooms: [
                {kitchen: true},
                {ballroom: false},
                {conservatory: false},
                {'dining room': true},
                {'billiard room': false},
                {library: false}
            ]
        }
    ];

    function findEmptyRoom(dataObject) {
        var emptyRooms = [];
        for(room in dataObject.rooms) {
            if(!dataObject.rooms[room]) {
                var emptyRoom = {};

                emptyRooms.push(emptyRoom[room]);
            }
        }

        console.log('Empty: ', emptyRooms);
        return emptyRooms;
    }

    function goThroughDataset(dataObject) {
        return findEmptyRoom(dataObject);
    }
    
    var emptyRooms = roomsDataSet.filter(goThroughDataset);

    console.log('EmptyRooms: ', emptyRooms);

})();