(function () {

    const newDevelopment = [
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

    // Project the data structure of rooms to the values true and false to be the keys followed by a list of rooms
    // that follow that value
    function filter(inputArray, filterFunc, isRoomEmpty) {
        var result = [];

        for(var i = 0, len = inputArray.length; i < len; i++) {
            result.push(filterFunc(inputArray[i].rooms, isRoomEmpty));
        }

        return result;
    }

    function filterRoomByStatus(arrayOfRRoomObjects, value) {
        var result = {};

        for(var i = 0, len = arrayOfRRoomObjects.length; i < len; i++) {
            var room = arrayOfRRoomObjects[i];

            for (var key in room) {
                if(room.hasOwnProperty(key)) {
                  if(room[key] === value) {
                      result[key] = room;
                  }
                }
            }
        }

        return result;
    }

    function reduceToUnique(arrayOfObjects) {
        var rooms = {};

        for(var i = 0, len = arrayOfObjects.length; i < len; i++) {
            var room = arrayOfObjects[i];
            for(var key in room) {
                if(room.hasOwnProperty(key)) {
                    rooms[key] = "";
                }
            }
        }

        return rooms;
    }

    function convertObjectToArray(rooms) {
        var result = [];
        for(var room in rooms) {
            if(rooms.hasOwnProperty(room)) {
                result.push(room);
            }
        }

        return result;
    }

    function reduceToEmpty(emptyRooms,filledRooms){
        var result = Object.assign(emptyRooms);

        for(var room in filledRooms) {
            if(result.hasOwnProperty(room)) {
                delete result[room];
            }
        }

        return convertObjectToArray(result);
    }

    var filledRooms = filter(newDevelopment, filterRoomByStatus, true);
    var reduceFilledRooms = reduceToUnique(filledRooms);
    var emptyRooms = filter(newDevelopment, filterRoomByStatus, false);
    var reduceEmptyRooms = reduceToUnique(emptyRooms);
    var result = reduceToEmpty(reduceEmptyRooms,reduceFilledRooms);

    console.log('filled: ', filledRooms);
    console.log('unique filled: ', reduceFilledRooms);
    console.log('empty: ', emptyRooms);
    console.log('unique empty: ', reduceEmptyRooms);
    console.log('result: ', result);


})();