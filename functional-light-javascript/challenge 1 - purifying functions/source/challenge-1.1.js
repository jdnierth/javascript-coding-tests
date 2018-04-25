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

function F(x,y) {
    var z;

    function foo(x) {

        y++;
        return z = x * y;
    }


    z = foo(x);


    return z;
}

var z;

z = F(20,5);
console.log(z);		            // 120

z = F(25,6);
console.log(z);		            // 175
