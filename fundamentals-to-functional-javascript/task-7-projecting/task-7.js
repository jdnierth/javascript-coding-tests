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

    _.filter = function (inputArray, func) {
        var result = [];

        for (var i = 0, len = inputArray.length; i < len; i++) {
            if (func(inputArray[i])) {
                result.push(inputArray[i]);
            }
        }

        return result;
    };

    _.map = function (inputArray, func) {
        var result = [];

        for (var i = 0, len = inputArray.length; i < len; i++) {
            var name = func(inputArray[i]);
            if (name) {
                result.push(name);
            }
        }

        return result;
    };

    function isPresent(item) {
        return (item.hasOwnProperty('present'));
    }

    function transformToName(item) {
        return (item.hasOwnProperty('name')) ? item.name : null;
    }

    var suspects = _.filter(videoData, isPresent);
    var suspectsAsStrings = _.map(suspects, transformToName);

    console.log('suspects: ', suspects);
    console.log('names: ', suspectsAsStrings);

})();