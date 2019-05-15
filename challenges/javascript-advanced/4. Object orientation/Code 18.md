#What does the below code print out?
```
     var Device = {
       kind:"Music Player"
     };
     
     var AppleProduct = Object.create(Device,
      {
       name: "iPod"
     });
     
     var purchase = Object.create(AppleProduct);
     
     console.log(purchase.name);
 ```

a) undefined
b) iPod
c) Uncaught TypeError: Property description must be an object: iPod

* `c)` The second param to the Object.create function is an object literal that described the properties we want to 
create on the object. So the value should be something like {name: { value: 'iPod' }} and not {name:'iPod'}