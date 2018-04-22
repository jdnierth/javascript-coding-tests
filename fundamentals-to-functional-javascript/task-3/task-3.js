(function () {

    var _ = {};

    _.each = function(list, cb) {
        // Check if list is an array or an object
        if(list.constructor.name == 'Array') {
            for(var i = 0; i < list.length; i++) {
                cb(list[i], i, list);
            }
        }

        if(list.constructor.name === 'Object') {
            for(var key in list) {
                cb(list[key], key, list);
            }
        }
    };

    function createSuspectObject(name) {
        return {
            name: name,
            color: name.split(' ')[1],
            speak: function() {
                console.log('My name is ', name);
            }
        }
    }

    var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

    // Option 1
    var suspectList = [];

    for(var i = 0; i < suspects.length; i++) {
        suspectList.push(createSuspectObject(suspects[i]));
    }

    console.info('Option 1: ', suspectList[0].speak());

    // Option 2
    var suspectList2 = suspects.map(createSuspectObject);

    console.info('Option 2: ', suspectList2[0].speak());

    // Option 3 - with custom _.each
    var suspectList3 = [];
    _.each(suspects, function(val, i, list) {
        suspectList3.push(createSuspectObject(val));
    });

    console.info('Option 3: ', suspectList3);

    var inputList2 = {
        "1": "Miss Scarlet",
        "2": "Colonel Mustard",
        "3": "Colonel Mustard"
    };

    var suspectList4 = [];

    _.each(inputList2, function(val, i, list) {
        suspectList4.push(createSuspectObject(val));
    });

    console.info('Option 4: ', suspectList4);

})();