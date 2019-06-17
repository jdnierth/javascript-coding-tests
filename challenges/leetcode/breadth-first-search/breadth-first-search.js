/**
 * Function that will output an object of key value pairs where key is the node and the value is its distance from
 * the root.
 *
 * @param graph
 * @param root
 */

function bfs(graph, root) {

    // Object to store the distances from the root node.
    var nodesLength = {};

    // All distances will start at Infinitiy marking that a node is not reachable from the root node
    for(var i = 0; i < graph.length; i++) {
        nodesLength[i] = Infinity;
    }

    // Distance from the root node will be set to 0
    nodesLength[root] = 0;

    // Queue to keep track of the nodes to visit
    var queue = [root];

    // Keep track of the current node that we are traversing
    var current;

    // While loop to keep traversing through nodes until there are not more nodes to traverse
    while(queue.length != 0) {

        // At the beginning this will be the root node
        current = queue.shift();

        // Get all the nodes that are connected to the current node
        var curConnected = graph[current];

        // This will keep track of the list of nodes that are connected to the current node
        var neighborIdx = [];

        // This finds the first connected node
        // If there is no node, idx will be -1.
        var idx = curConnected.indexOf(1);

        while(idx != -1) {

            // If a neighbor node was found (!= 1), put it into the list of neighbors
            neighborIdx.push(idx);

            // Continue searching for neighbors by looking for the next connected node to the previous one that was
            // looked at one step earlier
            idx = curConnected.indexOf(1,idx + 1);
        }

        // At this point all nodes that are connected to the current node are known, we are looping through the
        // connected nodes and get their distances
        for(var j = 0; j < neighborIdx.length; j++) {

            // If the distance of the node within the neighbor list hasn`t been set yet (== Infinity), set it to the
            // value of the nodesLength array of the current node + 1 and push it to the queue.
            if(nodesLength[neighborIdx[j]] == Infinity) {
                nodesLength[neighborIdx[j]] = nodesLength[current] + 1;

                // this will make sure that the while loop in line 29 will go through the neighbors as well
                queue.push(neighborIdx[j]);
            }
        }
    }

    return nodesLength;
}

var sampleBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
];

console.log(bfs(sampleBFSGraph,1));