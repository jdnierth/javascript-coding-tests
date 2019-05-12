#What does the code below print out?

```
var device = {
  kind:"music player"
};

var product = Object.create(device);

console.log(product.kind);
```

* "music player"
* Javascript searches up the prototype chain to find the kind property on the device object.
