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

/**
 * Alternative isPalindrome text where an updated version of the string will be passed on to the recursive call
 * making it unnecessary to pass through the index.
 *
 * @param {string} text the text to be tested for being a palindrome or not.
 *
 * @returns {*}
 */
function isPalindrome2(text) {
	// TODO: test for null or undefined
	if(text.length <= 1) return true;
	if(text.charAt(0) != text.charAt(text.length-1)) return false;
	return isPalindrome(text.substr(1), text.length - 2);
 }