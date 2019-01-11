(function () {

    var suspects = [
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

    function _getSuspectRooms(suspects) {
        var resultRooms;

        for (var i = 0, len = suspects.length; i < len; i++) {
            var rooms = suspects[i].rooms;

            resultRooms = _getVisitedRooms(rooms, resultRooms);
        }

        return resultRooms
    }

    function _getVisitedRooms(rooms, resultRooms) {
        var newRooms = resultRooms || {};

        for (var i = 0, len = rooms.length; i < len; i++) {
            var room = rooms[i];

            for (var roomName in room) {
                if (room.hasOwnProperty(roomName)) {

                    newRooms = _updateRoomStatus(newRooms,roomName,room);

                }
            }
        }

        return newRooms;
    }

    function _updateRoomStatus(newRooms,roomName,room) {
        if (!newRooms.hasOwnProperty(roomName)) {
            newRooms[roomName] = []
        }
        if (room[roomName]) {
            newRooms[roomName].push(room[roomName]);
        }

        return newRooms;
    }

    function _filterNotVisitedRooms(rooms) {
        var notVisitedRooms = [];

        for(var roomName in rooms) {
            if(rooms.hasOwnProperty(roomName)) {
                if(rooms[roomName].length === 0) {
                    notVisitedRooms.push(roomName);
                }
            }
        }

        return notVisitedRooms;
    }

    var roomsByStatus = _getSuspectRooms(suspects);

    // Filter for all rooms nobody was in
    var notVisitedRooms = _filterNotVisitedRooms(roomsByStatus);

    console.log('Rooms no suspect was in: ', notVisitedRooms.join(','));

    // Time: 4:09 - 4:40
    // High level solution approach:
    // 1. Loop through all suspects rooms
    // 2. Create a new data structure where the key is the room
    // 3. Each room should be assigned an array > Filter
    // 3.1 If the room has been visited that value should go into the list of results
    // 3.2 If the room was empty don't add it to the status array

})();