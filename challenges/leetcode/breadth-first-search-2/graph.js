/**
 * Graph:
 * - node = [];
 * - graph =  {}
 *
 * - we want to be able to lookup a node by its label.
 *
 * @constructor
 */
function Graph() {

    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;
}

Graph.prototype.addNode = function (node) {

    // Adding a new node into our arraz
    this.nodes.push(node);

    var title = node.value;

    // putting the node to the hash table where the movies title is the key
    this.graph[title] = node;
};

Graph.prototype.getNode = function (actor) {

    var n = this.graph[actor];

    return n;

};

Graph.prototype.setStart = function (startNode) {

    this.start = this.graph[startNode];

};

Graph.prototype.setEnd = function (endNode) {

    this.start = this.graph[endNode];

};