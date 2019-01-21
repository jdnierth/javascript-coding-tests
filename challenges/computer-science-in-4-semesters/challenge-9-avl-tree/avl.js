var BST = (function BST() {

    function BST() {
        this.root = null;
    }

    BST.prototype.add = function (value) {
        var left = [];
        var right = [];
        var node = new Node(value, null, null);

        if (!this.root) {
            this.root = node;
            return;
        }

        var current = this.root;

        while (true) {
            if (current.value > value) {

                if (current.left) {
                    current = current.left;
                    left.push(node);
                } else {
                    current.left = node;
                    break;
                }

            } else {

                if (current.right) {
                    current = current.right;
                    right.push(node);
                } else {
                    current.right = node;
                    break;
                }
            }
        }
    };

    BST.prototype.toObject = function () {
        return this.root;
    };

    return BST;
}());
