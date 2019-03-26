var func = [];

for(var i = 0; i < 3; i++) {

    func[i] = function(p) {
        return function() {
            return p;
        };
    }(i);
}

console.log(func[0]());
console.log(func[1]());
console.log(func[2]());