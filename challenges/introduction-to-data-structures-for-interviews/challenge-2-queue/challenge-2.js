var Queue = (function Queue() {

    ///////////////////////////////

    function Queue() {
        this._storage = {};
        this._head = 0;
        this._length = 0;
    }

    /**
     * Enqueues a new value at the end of the queue
     * @param {*} value the value to enqueue
     */
    function _enqueue(value) {
        this._storage[this._length + this._head] = value;
        this._length++;
    }

    /**
     * Dequeues the value from the beginning of the queue and returns it
     * @return {*} the first and oldest value in the queue
     */
    function _dequeue() {
        if(this._length > 0) {
            var firstItem = this._storage[this._head];

            // Move all items to the front.
            // for(var i=0; i < this._length; i++) {
            //   if(this._storage[i+1]) {
            //     this._storage[i] = this._storage[i+1];
            //   } else {
            //     delete this._storage[i];
            //   }
            // }

            delete this._storage[this._head];

            this._length--;
            this._head++;

            return firstItem;
        }
    }

    /**
     * Returns the value at the beginning of the queue without removing it from the queue
     * @return {*} the first and oldest value in the queue
     */
    function _peek() {
        if(this._length) {
            return this._storage[this._head];
        }
    }

    return {
        enqueue: _enqueue,
        dequeue: _dequeue,
        peek: _peek
    }

}());