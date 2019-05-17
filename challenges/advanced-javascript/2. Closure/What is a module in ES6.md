#What is a module in ES6?
* A module in ES6 is a file
* What is being exported will be the public API

#What's the difference between the classical module pattern and the ES6 module?
* In ES6 the content of a file is being treated as if being wrapped within a function whereas in the classical module
 pattern the developer has to put the code inside a function that has to be invoced at least once
* In ES6 there are 2 ways in which a module can be loaded 
  * ```
    // foo.js
    var o =  { bar: "bar"; }
    
    export function bar() {
        return o.bar;
    } 
  
    // import
    import bar from "foo";
    bar();      // "bar"
    
    module from "foo";
    foo.bar();  // "bar"
    ```