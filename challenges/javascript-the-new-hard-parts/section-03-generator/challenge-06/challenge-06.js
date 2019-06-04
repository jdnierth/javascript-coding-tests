// Challenge 6
// Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
// Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!

function Words(string) {
    this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
    var words = this.str.split(" ");

    console.log(arguments);

    return words;
};

const helloWorld = new Words('Hello World');

for (word of helloWorld) {
    console.log(word);
} // -> should log 'Hello' and 'World'
