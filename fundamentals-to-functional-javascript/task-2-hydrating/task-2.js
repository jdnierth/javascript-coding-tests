(function () {

    function createSuspectObject(name) {
        return {
            name: name,
            color: name.split(' ')[2],
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

    console.log(suspectList[0].speak());

    // Option 2
    var newSuspects = suspects.map(createSuspectObject);

    newSuspects[0].speak();

})();