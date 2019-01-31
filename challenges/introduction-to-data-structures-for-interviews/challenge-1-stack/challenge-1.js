var Stack = (function Stack() {

    ///////////////////////////////

    function Stack() {
        this._storage = {};
        this._count = 0;
    }

    /**
     * Adds a new value at the end of the stack
     * @param {*} value the value to push
     */
    function _push(value) {
        // TODO: put type checking
        // TODO: check for no argument
        this._storage[this._count] = value;
        this._count++;
    }

    /**
     * Removes the value at the end of the stack and returns it
     * @return {*} the last and newest value in the stack
     */
    function _pop() {
        // TODO: what if the stack is empty.
        if(!this._count) {
            return undefined;
        }

        // TODO: check if there is a difference between delete and setting value manually to undefined.
        delete this._storage[this._count - 1];
        this._count--;
    }

    /**
     * Returns the value at the end of the stack without removing it
     * @return {*} the last and newest value in the stack
     */
    function _peek() {
        if(this._count > 0) {
            return this._storage[this._count - 1];
        }
    }


    return {
        push: _push,
        pop: _pop,
        peek: _peek
    }

}());