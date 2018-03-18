/* Impure Code - that needs to be purified

	function foo(x) {
		y++;
		z = x * y;
	}

	var y = 5, z;

	foo(20);
	z;		// 120

	foo(25);
	z;		// 175
 */

function bar(y, x) {
	
	var z;
	
	foo(x);
	
	function foo(x) {
		y++;
		
		return z = x * y;
	}
	
	return [y, z];
	
}

z = bar(5, 20);

console.log(z[1]);

z = bar(z[0], 25);

console.log(z[1]);