var func = [];

for(var i = 0; i < 3; i++) {

    func[i] = function() {
        return i;
    }
}

console.log(func[0]());
console.log(func[1]());
console.log(func[2]());