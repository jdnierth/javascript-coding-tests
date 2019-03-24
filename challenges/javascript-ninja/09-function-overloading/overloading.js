/**
 * Method overloading
 *
 * Works only with different number of arguments, it doesn't distinguish the argument types nor their names.
 * "Solche Methoden gehen mit einem gewissen Verwaltungsaufwand beim Funktionsaufruf einher, was insbesondere
 * im Hinblick auf geschwindigkeitskritische Situationen beruecksichtigt werden muss."
 * @author: Jessica Nierth
 * @date: 23.03.2019
 */
var myOverload = (function myOverload() {

    /**
     *
     * @param {object} object on which the method should be bound.
     * @param {string} name of the property on which the method should be bound.
     * @param {function} fn the declaration of the function that should be bound.
     */
    function addMethod(object, name, fn) {

        // The access of the inner anonymous function old and fn happens through the principle
        // of closure.
        var old = object[name];
        
        object[name] = function () {
            if (fn.length == arguments.length) {
                return fn.apply(this, arguments);
            } else if(typeof old == "function") {
                return old.apply(this, arguments);
            }
        }
    }

///////////////////////////////////////////////////////////////////////

    var ninjas = {
        values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
    };

    // No arguments, it'll return all ninjas
    addMethod(ninjas, "find", function() {
        return this.values;
    });

    // One argument it'll return all ninjas that have the same name
    addMethod(ninjas, "find", function(name) {
        var ret = [];
        for(var i = 0; i < this.values.length; i++) {
            if(this.values[i].indexOf(name) == 0) {
                ret.push(this.values[i]);
            }
        }
        return ret;
    });

    // Two arguments returns all ninjas whos first and last name matches the given input
    addMethod(ninjas, "find", function(first,last) {
        var ret = [];
        for(var i = 0; i < this.values.length; i++) {
            if(this.values[i] == (first + " " + last)) {
                ret.push(this.values[i]);
            }
        }
        return ret;
    });

    ninjas.find();
    ninjas.find("Sam");
    ninjas.find("Dean","Edwards");
    ninjas.find("Alex", "Russel", "Jr");
})();