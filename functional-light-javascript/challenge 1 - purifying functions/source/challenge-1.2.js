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

function foo(x) {
	
	// side cause and since it also mutates y it is also a side-effect
	y++;
	
	// side-effect
	z = x * y;
}

/** Interface function that will make sure to keep the state and run the side effect function */
function bar(curX, curY) {
	
	// destructuring assignment is an expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables.
	var [origY, origZ] = [y, z];
	
	y = curY;
	
	foo(curX);
	
	// capture the new state of the changed variables y and zIndex
	var [newY, newZ] = [y, z];
	
	
	// Restore state to the original state before it was called
	[y, z] = [origY, origZ];
	
	// Return the new state so that the calling code can use that new state.
	return [newY, newZ];
	
}

var y, z;

bar(20, 5);

bar(25, 6);