/*

LINKED LIST

- Comprised of nodes that represent a sequence.
- Each node is composed of data and a reference/link to the next node.

*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */
function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
}

LinkedList.prototype.forEach = function (fn) {
    var node = this.head;

    while (node) {
        fn(node.value);
        node = node.next;
    }
};
// Time complexity: linear time

LinkedList.prototype.print = function () {
    var result = [];

    this.forEach(function (value) {
        result.push(value);
    });

    return result.join(",");
};
// Time complexity: Linear time

LinkedList.prototype.insertAfter = function (node, value) {
    // Get the nodes next node and cache it before overwriting
    var oldNext = node.next;

    // Create a new node
    var newNode = new Node(value);

    // Store new node as the new next
    node.next = newNode;

    // Add the former nodes next to the new node
    newNode.next = oldNext;

    // Check if the node that we´ve appended to is the tail, if so, update the tail to the new reference
    if(this.tail === node) {
        this.tail = newNode;
    }

    return newNode;

};
// Time complexity: constant time

LinkedList.prototype.removeAfter = function(node) {
    // implement me...
};
// Time complexity: constant time

LinkedList.prototype.insertHead = function(value) {
    // implement me...
};
// Time complexity: constant time

LinkedList.prototype.removeHead = function() {
    // implement me...
};
// Time complexity: constant time

LinkedList.prototype.findNode = function(value) {
    // implement me...
};
// Time complexity: linear

LinkedList.prototype.appendToTail = function(value) {
    // implement me...
};
// Time complexity: linear - unless if tail is saved in the constructor and updated on each append


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
    // implement me...
};
// Time complexity: linear

LinkedList.prototype.removeBefore = function(node) {
    // implement me...
};
// Time complexity: linear

