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
        if (!this.contains(value)) {
            return null;
        }

        var currentNode = this.head;
        var prevNode = null;

        // Loop through the list
        while (currentNode) {

            if (currentNode.value === value) {
                break;
            }

            prevNode = currentNode;
            // Get the current nodes next and set it to the next of the previous node
            currentNode = currentNode.next;

        }

        if (currentNode === null) {
            return
        }

        if (this.head === currentNode) {
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

    /**
     * Deletes a node from the middle of the LinkedList
     * @param {Node} head - the head node of a LinkedList
     * @return {Node} - the deleted node
     */
    function deleteMiddleNode(head) {
        // TODO
    }

    /**
     * Given a linked list and a number k, write a function that returns the value at the k’th node from end of the linked list.
     * returns the k-to-the-last node in a singly-linked list
     * @param {number} k - positive integer that counts from the end of a linked list to a node.
     * @param {Node} head - the head of a singly-link-list
     * @return {Node} - the kth node from the end of the linked list
     */
    function kthToLastNode(k, head) {
        // TODO https://repl.it/@bgando/ll-kth-to-last-node-solution
    }

    /**
     * Checks if a linked list contains a cycle / loop.
     * @param {Node} head - the head of the linked list
     * @return {boolean} - true if contains a cycle, otherwise false
     */


    /**
     * Given pointer to the head node of a linked list, reverse the linked list.
     * Reverses the linked list
     * @param {Node} head - the head of the linked list
     * @return {Node} - the head of the linked list, reversed
     */
    function reverse(head) {
        // TODO https://repl.it/@bgando/ll-reverse-solution
    }

    /**
     * Given a linked list and a value x, partition it such that all nodes less than x come first, then all nodes with value equal to x and finally nodes with value greater than or equal to x. The original relative order of the nodes in each of the three partitions should be preserved. The partition must work in-place.

     * Partitions a linked list around a value, x
     * @param {Node} head - the head of the linked list
     * @param {number} x - the partition value
     * @return {Node} - the head of the linked list
     */
    function partition(head, x) {
        // TODO https://repl.it/@bgando/ll-partition-solution
    }

    /**
     * Find the duplicated node and delete it from the linked list.
     * Deletes a duplicated node from a linked list
     * @param {Node} head - the head of the linked list
     * @return {Node} - the head of the linked list
     */
    function deleteDupNode(head) {
        // TODO
    }

    return LinkedList;
}());
