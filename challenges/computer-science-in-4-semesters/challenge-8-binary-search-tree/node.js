var Node = (function Node() {

    function Node(value, left, right) {
        this.value = null;
        this.left = left || null;
        this.right = right || null;
    }

    return Node;
}());
