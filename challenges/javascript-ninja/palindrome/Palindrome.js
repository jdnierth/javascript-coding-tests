
function isPalindrome(word, n) {
	
	var n = n || 0;
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