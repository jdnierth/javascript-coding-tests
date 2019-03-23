/**
 * Implement the function 'foreach' which takes and array of elements and calls a given function on each
 *
 * @author: Jessica Nierth
 * @date: 23.03.2019
 */
var myForeach = (function myForeach() {

    function myForeach(list, callback) {
        for(var i = 0; i < list.length; i++) {
            // Mithilfe der call()-Methode der Callback-Funktion wird das aktuelle Iterationselement als erster und der Schleifenindex als zweiter Paramter [bergeben. Damit sollte das aktuelle Element zum Funktionskontext und der Index als einziger Parameter an das Callback weitergegeben werden.
            callback.call(list[i],i);
        }
    }

    function printNames(index) {
        console.log('Name: ', people[index]);
    }

    // Example:
    var people = ['Anne', 'John', 'Michael'];

    myForeach(people, printNames);

})();
