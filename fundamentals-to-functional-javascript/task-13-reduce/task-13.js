(function () {

    var _ = {};

    _.reduce = function (arr, cb, acc) {

        var result;

        // Check if arr is an object or array
        if (Array.isArray(arr)) {

            result = acc || 0;

            for (var i = 0, len = arr.length; i < len; i++) {

                if (i === 0) {
                    result = cb(acc, arr[i]);
                } else {
                    result = cb(result, arr[i]);
                }
            }

            return result;

        } else if (typeof arr === 'object') {

            result = (typeof acc === 'object') ? acc : {};

            for (var key in arr) {
                console.log('key: ',key);
                result = cb(result, key, arr[key]);
            }

            return result;

        }
    };

    function sum(a, b) {
        return a + b;
    }

    function addProp(obj, key, value) {
        console.log('addProp: ', key, ' value: ',value);
        obj = obj || {};

        if (obj.hasOwnProperty(value)) {
            obj[value].push(key);
        } else {
            obj[value] = [];
            obj[value].push(key);
        }

        return obj;
    }


    var arrResult = _.reduce([1, 2, 3], sum, 0);
    console.log('ARRAY RESULT: ', arrResult);

    var objResult =  _.reduce({a:1,b:2,c:1}, addProp, {});
    console.log('OBJECT RESULT: ', objResult);
})();