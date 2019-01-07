(function () {

    var _ = {},
        videoData = [
        {
            name: 'Miss Scarlet',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Mrs. White',
            present: false,
            rooms: [
                {kitchen: false},
                {ballroom: false}
            ]
        }];

    _.filter = function(inputArray, func) {
        var result = [];

        for(var i = 0, len = inputArray.length; i < len; i++) {
            if(func(inputArray[i])) {
                result.push(inputArray[i]);
            }
        }

        return result;
    };

    isPresent = function(item) {
        return (item.hasOwnProperty('present') && item.present == true);
    };

    var suspects = _.filter(videoData, isPresent);

    console.log(suspects);

})();