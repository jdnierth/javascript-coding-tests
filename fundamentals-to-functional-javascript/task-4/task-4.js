(function () {

    var _ = {};

    _.map = function(list, cb) {
        var a = [];

        // Check if list is an array or an object
        if(list.constructor.name == 'Array') {
            for(var i = 0; i < list.length; i++) {
                a.push(cb(list[i],i, list));

            }
        }

        if(list.constructor.name === 'Object') {
            for(var key in list) {
                a.push(cb(list[key]),key, list);
            }
        }

        return a;
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
    var suspectList1 = suspects.map(createSuspectObject);

    console.info('Option 1: ', suspectList1);

    // Option 2 - with custom _.map
    var suspectList2 = _.map(suspects,createSuspectObject);

    console.info('Option 2: ', suspectList2);

})();