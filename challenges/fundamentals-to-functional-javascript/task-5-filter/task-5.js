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
                    {ballroom: false},
                    {conservatory: false},
                    {'dining room': false},
                    {'billiard room': false},
                    {library: false}
                ]
            },
            {
                name: 'Reverend Green',
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
                name: 'Rusty',
                present: false,
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
                name: 'Colonel Mustard',
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
                name: 'Professor Plum',
                present: true,
                rooms: [
                    {kitchen: false},
                    {ballroom: false},
                    {conservatory: false},
                    {'dining room': false},
                    {'billiard room': false},
                    {library: false}
                ]
            }
        ];

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