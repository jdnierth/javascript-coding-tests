#What's the result of the following code? 
```
var foo = "bar";

function bar() {
	var foo = "baz";

	function baz(foo) {
		foo = "bam";
		bam = "yay";
	}

	baz();
}

bar();
foo;	//1.
bam;	//2. 
baz;	//3.
```
1. "bar"
2. "yay"
3. "ReferenceError: baz is undefined"