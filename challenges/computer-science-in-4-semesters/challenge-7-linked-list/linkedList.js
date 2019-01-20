var LinkedList = (function LinkedList() {

    function LinkedList() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Add a new item to the end of the LinkedList.
     *
     * @param {*} data the data to insert to the LinkedList.
     */
    LinkedList.prototype.push = function (data) {
        var node = new CustomNode(data);

        if (!this.head) {
            this.head = node;
        } else {
            // Before actually adding the element and moving the tail
            // adding the pointer next of the currently last element to the element
            // that will be added to the end to the list in the next step.
            this.tail.next = node;
        }

        // Update the tail to the newly added item
        this.tail = node;
    };

    /**
     * Removes the value at the end of the LinkedList
     * @return {*} - the removed value
     */
    LinkedList.prototype.pop = function () {
        if (!this.head) return null;

        var currentNode = this.head;

        // Loops until the item before the current tail
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }

        // Deleting the actual tail
        currentNode.next = null;
        this.tail = currentNode;

        return currentNode;
    };

    /**
     * Checks if a node is the head of the LinkedList.
     *
     * @param {{prev:Object|null, next:Object|null}} node - the node to check.
     * @return {boolean} - true if node is the head, otherwise false.
     */
    LinkedList.prototype.isHead = function (node) {
        return node === this.head;
    };

    /**
     * Checks if a node is the tail of the LinkedList.
     *
     * @param {{prev:Object|null, next:Object|null}} node - the node to check
     * @return {boolean} - true if node is the tail, otherwise false
     */
    LinkedList.prototype.isTail = function (node) {
        return node === this.tail;
    };

    /**
     * Deletes a node
     * @param {*} value - the value of the node to remove
     * @return {*} node - the deleted node
     */
    LinkedList.prototype.delete = function (value) {

        // If the list is empty, return null
        if(!this.contains(value)) { return null; }

        var currentNode = this.head;
        var prevNode = null;

        // Loop through the list
        while(currentNode) {

            if(currentNode.value === value) {
                break;
            }

            prevNode = currentNode;
            // Get the current nodes next and set it to the next of the previous node
            currentNode = currentNode.next;

        }

        if(currentNode === null) {
            return
        }

        if(this.head === currentNode) {
            this.head = currentNode.next;
        } else {
            prevNode.next = currentNode.next;
        }

        return currentNode;
    };

    /**
     * Searches the LinkedList and returns true if it contains the value passed.
     *
     * @param {*} value - the value to search for.
     * @return {boolean} - true if value is found, otherwise false.
     */
    LinkedList.prototype.contains = function (value) {
        var currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }

            currentNode = currentNode.next;
        }

        return false;
    };

    /**
     * Searches the LinkedList and returns true if it contains the value passed.
     *
     * @param {*} value - the value to search for.
     * @return {*} - true if value is found, otherwise false.
     */
    LinkedList.prototype.get = function (value) {
        var currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    };

    return LinkedList;
}());
