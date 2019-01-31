var HashTable = (function HashTable() {


    ///////////////////////////////

    function HashTable() {
        this._storage = [];
        // To avoid collisions, change this to double its size once
        // it reaches 50% of its size.
        this._size = 20;
    }

    /**
     * Inserts a new key-value pair
     * @param {string} key - the key associated with the value
     * @param {string} value - the value associated with the key
     * @param {*} value - the value to insert
     */
    HashTable.prototype.insert = function insert(key,value) {
        var index = HashTable.prototype.hash(key,this._size);
        var newValue = [];

        // Handle collision
        if(this._storage[index]) {
            var exists = HashTable.prototype.hasKey(key, this._storage[index]);

            if(exists !== false) {
                // update value
                this._storage[index][exists] = value;
                newValue.push(key,value);
            } else {
                newValue = [this._storage[index],[key,value]];
            }

        } else {
            this._storage[index] = [];
            newValue.push(key,value);
        }

        this._storage[index] = newValue;
    };

    HashTable.prototype.hasKey = function hasKey(key, itemsArray) {
        for(var i = 0; i < itemsArray.length; i++) {
            var item = itemsArray[i];
            if(item[0] === key) {
                return i;
            }
        }

        return false;
    };

    /**
     * Deletes a key-value pair
     * @param {string} key - the key associated with the value
     * @return {*} value - the deleted value
     */
    HashTable.prototype.remove = function remove(key) {

        var index = HashTable.prototype.hasKey(key, this._size);
        var deletedValue;

        if(this._storage[index]) {

            var e = HashTable.prototype.hasKey(key, this._storage[index]);

            if(e !== false) {
                deletedValue = this._storage[index][e];
                this._storage[index].splice(e,1);

                // If the nested array is empty, delete it.
                if(this._storage[index].length === 0) {
                    this._storage.splice(index,1);
                }
                return deletedValue;
            }

            deletedValue = this._storage[index];
            this._storage.splice(index,1);

            return deletedValue;
        }
    };

    /**
     * Returns the value associated with a key
     * @param {string} key - the key to search for
     * @return {*} - the value associated with the key
     */
    HashTable.prototype.retrieve = function retrieve(key) {

        var index = HashTable.prototype.hash(key,this._size);

        if(this._storage[index]) {
            for(var i = 0; i < this._storage[index].length; i++) {
                var item = this._storage[index][i];
                if(item[0] === key) {
                    return item;
                }
            }
        }
        return "Nothing found for the key: " + key;
    };

    /**
     * Hashes string value into an integer that can be mapped to an array index
     * @param {string} str - the string to be hashed
     * @param {number} n - the size of the storage array
     * @return {number} - an integer between 0 and n
     */
    HashTable.prototype.hash = function hash(str, n) {
        var sum = 0;
        for (var i = 0; i < str.length; i++)
            sum += str.charCodeAt(i) * 3;

        return sum % n;
    };

    return HashTable;

}());

var mashTbl = new HashTable();

mashTbl.insert("a",1);
console.log(mashTbl);

mashTbl.insert("a",2);
console.log(mashTbl);
console.log('Retrieve a:',mashTbl.retrieve("a"));

mashTbl.insert("b",5);

mashTbl.insert("c",4);

mashTbl.insert("d",1);

console.log('Retrieve a:',mashTbl.retrieve("a"));
// mashTbl.remove("a");
// mashTbl.remove("b");
// mashTbl.remove("c");
// mashTbl.remove("d");
console.log('After deleting a', mashTbl);
// mashTbl.insert("a",1);
// console.log('After adding a: ', mashTbl);

