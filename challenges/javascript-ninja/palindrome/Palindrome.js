/**
 * Recursive implementation of the function palindrome.
 *
 * A palindrome is a text that is the same no matter if it is read from back to front or v.v.
 *
 * @param {string} word
 * @param {number} n
 * @returns {*}
 */
function isPalindrome(word, n) {
	
	n = n || 0;

	var wlength = word.length; 
	var leftIndex = n;
	var rightIndex = wlength - 1 - n;

	if(wlength === 0 || word.trim() === '') {
		return true;
	}

	if(word[leftIndex] !== word[rightIndex]) {
 		return false;
	} else {
		if(rightIndex < leftIndex) { 
			return true; 
		} 
		else {
			return isPalindrome(word, n+1);	
		}
	}
}