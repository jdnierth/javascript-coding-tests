#How would you create an instance of this pseudo-class using the constructor pattern?
 ```
    function Device(kind) {
        this.kind =  kind;
    }
    
    var product = new Device("music player");
    var product = Device("music player");
    var product = Device.call("music player");
```
* `var product = new Device("music player");`
* The new keyword with is used with a function constructor to generate an instance of a pseudo-class.