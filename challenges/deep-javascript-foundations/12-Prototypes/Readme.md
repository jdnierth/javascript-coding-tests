#Classical inheritance vs prototypal inheritance

```
funtion Workshop(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzie");

deepJS.ask("Is 'prototype' a class?");  // Kyle is 'prototype' a class?
reactJS.ask("Isn't 'prototype' ugly?"); // Suzy Isn't 'prototype' ugly?
```

 ![Diagram](https://github.com/jdnierth/javascript-coding-tests/blob/master/challenges/deep-javascript-foundations/12-Prototypes/00-diagram.PNG)
 
 ![Classical Inheritance](https://github.com/jdnierth/javascript-coding-tests/blob/master/challenges/deep-javascript-foundations/12-Prototypes/01-classical-inheritance.PNG)
 
 ![Prototypal inheritance](https://github.com/jdnierth/javascript-coding-tests/blob/master/challenges/deep-javascript-foundations/12-Prototypes/02-prototypal-inheritance.PNG)