#What's the difference between == and ===?
* `==`: Checks equality of value and ignores the data types. JavaScript tries to convert the values so they are of 
the same type. The rules by which JavaScript is trying to coerce are quite complex https://dorey.github.io/JavaScript-Equality-Table/
* `===`: Checks equality of value and data type

#Examples
1. `3 === "3"`  // false
2. `3 == "3"`   // true
3. `0 == ""`    // true
4. `0 === ""`   // false
5. `0 === "0"`  // false

#Background
1. `String(0) == "0" > "0" == "0"`  // true
2. `false == "false" > false == Boolean("false") > false == true`  // false

