var LinkedList = (function LinkedList() {

    function LinkedList() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Add a new item to the end of the LinkedList.
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

    LinkedList.prototype.pop = function () {
        if (!this.head) return null;

        var currentNode = this.head;

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    };

    LinkedList.prototype.get = function (index) {

    };

    LinkedList.prototype.delete = function (index) {

    };

    function _find(node) {
        var currentNode = this.head;

        while(!_isSame(currentNode,node)) {
            currentNode = currentNode.next;
        }

        return (!currentNode) ? null : currentNode;
    }

    function _isSame(a, b) {
        return a === b;
    }

    return LinkedList;
}());
