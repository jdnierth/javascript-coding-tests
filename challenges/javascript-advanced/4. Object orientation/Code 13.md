#What would the below code print out?
```
    function Device(kind) {
      this.kind =  kind;
      this.printKind = function () {
        console.log(this.kind)
      }
    }
    var product = new Device("music player");
    product.printKind();
```
* `music player`