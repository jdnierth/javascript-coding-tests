# length-comparisons

**Section: String lengths**

**Rules**
- The JS interpreter makes a lexicographic comparison if both operands 
are of type string.
- Lexicographic comparison: Sorted alphabetically.
- If one operand is a  number, the JS interpreter converts it into a
number. If then one Operand gets to be NaN the result is false
  
  
**Exercise**
What is the data type  of the following expressions?

| Calculation  | DataType | Comment |
|---|---|---|
| "Ladislaus" > "Oswine" | false | because L comes before O in the alphabet |
| "Anton" > "Alan" | true | n comes after l in the alphabet.|
| "5" < "a" | true | Numbers are sorted in before characters |
| "3" < "4" | true | |	
| 300 < 4 | false | |
| "300" < 4 | false | JS compares first the first character where 3 is smaller than 4. 00 will not be looked at any more.|
| "23" < 37 | true | Interpreter does 23 < 37|
| "300" < 4 | false | Interpreter does 300 < 4|
| "4" < 300 | true | Interpreter does 4 < 300|
| 2 < "3 Autos" | false | Interpreter does 2 < NaN = false|
| "3 Autos" < 2 | false | | 	
| NaN < 2 | false | |	
| 2 < NaN | false | | 	
| 19 <= NaN | false | |	
| "seven" < "nine" | false | | 	
| "nine" < "seven" | true | |
