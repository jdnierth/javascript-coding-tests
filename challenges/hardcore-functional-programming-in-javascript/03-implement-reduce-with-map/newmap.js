var _ = R;

var newmap = _.curry(function(f, list){
    var concatList = function(acc, elt) {
        return acc.concat([f(elt)]);
    };

    return _.reduce(concatList, [], list);
});

var input = [1,2,3];
console.log('input: ', input, ' output: ', newmap(_.add(1),input)); //[2,3,4]