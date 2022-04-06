// !!! DATA TYPES !!!
// Values in JavaScript are always of a certain type like string or number.
// There are eight basic data types in JavaScript
// We can put any type in a variable
// Example a variable can at one moment be a string and then store a number
/*
let message = "hello";
message = 123456;
*/
/*
Programming languages that can do this are called "dynamically typed"
this means that there exist data types, but variables are not bound
to any of them.
*/

// !!! NUMBER !!!
// Number type represents both integer and floating point numbers.
// Many operators exist for numbers like * / + - etc
// "special numeric values" are data types like "Infinity" "-Infinity" and "NaN"
/*
Infinity represents the mathematical infinity it is a special value
that is greater than any number!
We can get is as a result of division by zero
*/
// console.log( 1 / 0 ); // Infinity
// alert( Infinity ); // You can also just reference it directly
// NaN represents an incorrect or undefined mathematical operation
/*
alert( "not a number" / 2 ); NaN, such division is erroneous
// NaN is sticky meaning any further mathematical operation on NaN returns NaN
// NaN propagates the whole result EXCEPT for NaN ** 0 which equals 1
// We can do any kind of math in JavaScript divide by zero, treat non-numeric strings as numbers and we will never get a fatal error but maybe just a NaN as the result


// !!! BIGINT !!!
// In JavaScript the "number" type cannot represent integer values larger than 2 to the 53 power - 1 or 9007199254740991 (same with positive and negative)
// Most of the times in JavaScript this is enough but sometimes we need really big numbers
// BigInt type was recently added to the language to represent integers of arbitrary length
// BigInt value is created by appending n to the end of an integer
/*
const bigInt = 1234567890123456789012345678901234567890n;
// The n at the end means its a BigInt
*/

// !!! STRING !!!
// A string in JavaScript must be surrounded by quotes
/*
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
*/
// Double and single quotes are simple quotes there is no difference between them in JavaScipt ("" '')]
// (``) Backticks are "extended functionality" they allow us to embed variables and expressions into a string by wrapping them in ${...}
/*
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
*/
// The expression inside ${...} is evaluated and the result becomes a part of the string.
// We can put anything in ${...} a variable name or arithmetical expression like 1 + 2 or something more complex
// REMEMBER THESE CAN ONLY BE USED WITH THE ` SYMBOL NOT "" OR ''

// !!! BOOLEAN (LOGICAL TYPE) !!!
// The boolean type has only two values true and false
// commonly used to store yes/no values true meaning yes and false meaning no
/*
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
*/
// Can also be a result of comparisons
/*
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")
*/

// !!! THE "NULL" VALUE !!!
// The special nul values does not belong to any of the types described above
// It forms a separate type which only contains the null value
// let age = null; // This means that the age is unknown
// In JavaScript all null does is represents "nothing", "empty", or "value unknown"

// !!! THE "UNDEFINED" VALUE !!!
// undefined is similar to null because it is it's own type just like null
// undefined means "value is not assigned"
// if a variable is declared, but not assigned then its value is undefined.
/*
let age;
alert(age); // shows "undefined"
*/
// Its also possible to explicity assign undefined to a variable
/*
let age = 100;
age = undefined // value changed to undefined
alert(age); // "undefined"
*/
// This is not recommended, normally one uses null to assign an unknown or empty value

// !!! OBJECTS AND SYMBOLS !!!
// The object type is special
// All other types are called "primitive" because their values can contain only a single thing ( string or a number )
// Objects are used to store collections of data and more complex entities.
// symbol type is used to create unique identifiers for objects.

// !!! THE TYPEOF OPERATOR !!!
// The typeof operator returns the type of the argument
// It's useful when we want to process values of different types differently or just want to do a quick check.
/*
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object" (1)
typeof null // "object" (2)
typeof alert // "function" (3)
*/
/*
(1) Math is a built-in object that provides mathematical operations.
Here, it serves just as an example of an object.
(2) typeof null is "object" which is wrong here because early JavaScript
kept it for compatibility. null is not an object it is a speical value
with a separate type of its own.
(3) alert is a function. There is no special function type in JavaScript
*/

// !!! TASKS !!!
/*
let name = "Ilya"
alert (`hello ${1}`); // this expression is a number 1 or hello 1
alert (`hello ${"name"}`); // this expression is a string "name" or hello "name"
alert (`hello ${name}`); // this expression is a variable or hello Ilya
*/

// !!! HANDLING TEXT - STRINGS IN JAVASCRIPT !!!
// This is what pieces of text are called in programming we will look at common things we should know about strings such as creating them escaping quotes and joining strings together

// !!! THE POWER OF WORDS !!!
// JavaScript contains a number of features for manipulating strings, creating custom welcome messages and prompts, showing the right text labels when needed, sorting terms into desired order, and much more

// !!! STRINGS - THE BASICS !!!
const string = 'The revolution will not be televised.';
console.log(string);
// The difference when writing strings compared to numbers is that you surround the value with quotes
// Example of "BAD" strings these will give you errors!
/*
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
*/
// These lines will not work because any text without quotes is assumed to be a variable name.
// If the browser can see where a string starts but not where it ends it will give error "unterminated string literal"
const badString = string;
console.log(badString);
// The example above just reads out "The revolution will not be televised" because string already as a value!

// !!! SINGLE QUOTES VS DOUBLE QUOTES
// Single quote ('') or Double quote ("") lines have very little difference
// You should one down to your person preference, however chose one and STICK TO IT because using two different quotes will cause an error
// const badQuotes = 'What on earth?"; // This is an example of a bad quote because it uses ' and "
// Both the examples below are allowed
const sglDbl = 'Would you eat a "fist supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);
// However you can't include the same quote mark inside the string if it's being used to contain them
/*
const bigmouth = 'I''ve got no right to take my place...';
*/
// To fix this we need to escape the problem quote mark
// Escaping characters means we do something to them to make sure they are recognized as text, and not part of the code
// In JavaScript we do this by putting a backslash just before the character
const bigmouth = 'I"\'ve got no right to take my place...';
console.log(bigmouth);
// We were able to tell JavaScript that "I" is not the end of the string by putting the \ symbol in front of the quotation we dont want it ending at
// Concatenating strings just means to join them together
// In JavaScript you can use a different type of string called a template literal to join strings together
// It looks just like a normal string but instead you use the backtick ` symbol
/*
const greeting = `Hello`;
console.log(greeting);
*/
// The backtick works just like a normal string except you can include variables in it wrapped inside of the ${...} the variable's value will be inserted into the result
const name = 'Christ';
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Christ" name is put inside of the ${name} and name = christ
// You can use the same technique to join together two variables
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
// Concatenation in context
// Here is an example of concatenation being used in action
/*
const button = document.querySelector('button');
function greet() {
  const user = prompt('What is your name?');
  alert(`Hello ${user}, nice to see you!`);
}
button.addEventListener('click', greet);
*/
// This example is using the window.prompt() function
/* 
This asks the user to answer a question via a popup dialog box then
stores the text they enter inside a given variable in the case above
user.
Then we use the window.alert() function to display another popup
containing a string which inserts the name into a generic greeting message.
*/
// Concatenation using "+"
// You can also concatenate string using the + operator
/*
const welcomeMessage = 'Hello';
const user = 'Christ';
console.log(welcomeMessage + ', ' + user); // 'Hello, Christ'
*/
// However template literals usually give you more readable code
const welcomeMessage = 'Hello';
const user = 'Christ';
console.log(`${welcomeMessage}, ${user}`);

// !!! NUMBERS VS. STRINGS !!!
// Here is what happens when we try to combine a string and a number
const title = 'Front';
const amount = 242;
console.log(`${title}${amount}`); // 'Front 242'
// the string makes every number coming after it also a string!
/*
If you have a numeric variable that you want to convert to a string
but not change otherwise, or a string variable that you want to convert
to a number but not change otherwise, you can use the following two
constructs
*/
// The Number oject converts anything passed to it into a number
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum); // typeof here will display "number" in the console log but if you take it away it will show 123
// Conversely, every number has a method called toString() that converts it to the equivalent string
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2); // typeof here will display "string" but when take away will display 123

// !!! INCLUDING EXPRESSIONS IN STRINGS !!!
// You can include JavaScript expressions in template literals, as well as simple variables, and the results will be included in the result
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of
 ${(score / highestScore) * 100}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%"
// Multiline strings
// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this
const output2 = `I like the song.
I gave it a score of 90%`;
console.log(output2);
// The console log will respect the line breaks!
// To have the equivalent output using a normal string you'd have to include the like break character (\n)
const output3 = 'I like the song.\nI gave it a score of 90%';
console.log(output3);
// This is how to make the line break in a ' string, different from the ` string

/// !!! JAVASCRIPT STRING METHODS !!!
// JavaScript String "length" property returns the length of a string
let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = txt.length;
console.log(length);
// There are 3 methods for extracting a part of a string
/*
slice(start, end)
substring(start, end)
substr(start, length)
*/
// JavaScript String slice() extracts part of a string and returns the extracted part in a new string
/*
This method takes 2 parameters: the start position and the end position
(end not included). This example slices out a portion of a string from
position 7 to position 12.
*/
let str = 'Apple, Banana, Kiwi';
let part = str.slice(7, 13);
console.log(part);
// This outputs Banana because 7 is the first letter in Banana and 13 is the last
// Note JavaScript counts positions from zero the first position would be 0 and the second 1
// If the parameter is negative, the position is counted from the end of the string.
let strs = 'Apple, Banana, Kiwi';
let parts = str.slice(-12, -6);
console.log(parts);
// This outputs Banana because going back 12 will start you at B and going back 6 will end you at a
// If you omit the second parameter, the method will slice out the rest of the sting
let strss = 'Apple, Banana, Kiwi';
let partss = str.slice(7);
console.log(partss);
// It can also count from the end
/*
let partss = str.slice(-12);
*/
// String substr()
// Similar to slice()
// The difference is that the second parameter specifies the length of the extracted part.
let strr = 'Apple, Banana, Kiwi';
let partt = str.substr(7, 6);
console.log(partt);
// omit the subster() and it will slice out the rest of the string
let parttt = str.substr(7);
console.log(parttt);
// replace() method replaces a specified value with another value in a string
let text = 'Please visit Microsoft!';
let newText = text.replace('Microsoft', 'W3Schools');
console.log(newText);
// Here "Microsoft" is replaced with "W3Schools"
// Caps matter if you put "MICROSOFT" it will not work
// replacing case insensitive allows you to use a regular expression with an /i flag
let textt = 'Please visit Microsoft';
let newTextt = text.replace(/MICROSOFT/i, 'W3Schools');
console.log(newTextt);
// /i will change the entire word even if its case sensitive or not!
// /g flag will replace ALL matches
let texttt = 'Please visit Microsoft and Microsoft!';
let newTexttt = text.replace(/Microsoft/g, 'W3Schools');
console.log(newTexttt);
// Converting to Upper and Lower Case
/*
A string is converted to upper case with toUpperCase():
A string is converted to lower case with toLowerCase():
*/
let text1 = 'Hello World';
let text2 = text1.toUpperCase();
console.log(text2);
// Here Hello World will display HELLO WORLD
let text11 = 'Hello World';
let text22 = text11.toLowerCase();
console.log(text22);
// Here Hello World will display hello world
// concat() joins two or more strings together
let text111 = 'Hello';
let text222 = 'World';
let text333 = text111.concat('', text222); // the '' symbol before the , is where the string will move into making the strings connect
console.log(text333);
// This will display HelloWorld without a space in between because these strings are now joined together
// The concat() can be used instead of the + operator they do the same thing
// The examples below do the same thing
texxt = 'Hello' + '' + 'Nelly!';
console.log(texxt);
// This will display HelloNelly!
texxxt = 'Hello'.concat('', 'Nelly!'); // the '' represents the empty string that Nelly! will be entered to followed by the ,
console.log(texxxt);
// This will also display HelloNelly!
// JavaScript string trim()
// the trim() will remove white space from both sides of the code
let texxtt = '     Hello Space!     '; // This will display white-space before and after "     Hello Space!     "
console.log(texxtt);
let texxtt2 = texxtt.trim(); // This will remove the white-space and only display 'Hello Space!'
console.log(texxtt2);
// JavaScript padStart adds padding in front of the entered value, What I noticed from the console log is that it only adds 0's in front of the number
let textNumber = '5';
let padded = textNumber.padStart(4, 0);
console.log(padded);
// The console will show 00005
let texttNumberr = '5';
let paddedd = texttNumberr.padEnd(4, 0); // Padding in the end will put zeros behind the answer
console.log(paddedd);
// The console will show 50000
// JavaScript charAt()
// The charAt() method returns the character at a specified position in a string
let teext = 'HELLO CHRIST';
let charr = teext.charAt(0); // 0 will output the H because it is the first letter in HELLO 1 will output E
console.log(charr);
// charCodeAt() method returns the unicode of the character at a specified index in a string
let welcome = 'HELLO NELLY';
let chaar = welcome.charCodeAt(0); // 72 will show not sure what unicode means but it will return it
console.log(chaar);
// Property Access []
let welcomee = 'Hello Christt';
let chaaracter = text[0]; // Weird not sure what this does put from 0 to 3 it will spell out Pie ase
console.log(chaaracter);
// JavaScript String split() lets a string converted to an array
/*
text.split('','') // Split on commas
text.split('' '') // Split on spaces
text.split(''|'') // Split on pipe
*/
let actionWord = 'Christ';
let actionOutput = actionWord.split('');
console.log(actionOutput);
// This will output "C" "h" "r" "i" "s" "t" in the console log
// Here is a new type of string called a string object
const string8 = new String('A String oject');
console.log(string8);
// Not sure what this means just yet
// In JavaScript to compare strings you use the less-then and greater-than operators
let i = 'i';
let v = 'v';
if (i < v) {
  // true
  console.log(i + ' is less than ' + v);
} else if (i > v) {
  console.log(i + ' is greater than ' + v);
} else {
  console.log(i + ' and ' + v + ' are equal. ');
}
// String literals and strings returned from String calls in non-constructor context are primitive strings.
// JavaScript automatically converts primitives to String objects
// JavaScript does this so its possible to use String object methods for primitive strings.
let s_prim = 'foo';
let s_obj = new String(s_prim);
console.log(typeof s_prim); // Shows up as "string" in console
console.log(typeof s_obj); // Shows up as "object" in console
// String primitives and string objects also give different results when using eval()
// Primitives passed to eval are treated as source code
// String objects are treated as all other objects are, by returning the object.
let s1 = '2 + 2'; // Creates a string
// primitive
let s2 = new String('2 + 2'); // Creates a string
// object
console.log(eval(s1)); // eval() on a primitive returns the number
console.log(eval(s2)); // eval() on a object returns the string
// A string object can always be converted to its primitive counterpart with the valueOf() method
console.log(eval(s2.valueOf())); // returns the number 4

// !!! LONG LITERAL STRINGS !!!
// Sometimes your code will have strings which are too long.
// you can specifically break the string into multiple lines in the source code without affecting the actual string contents
// Method 1
// you can use the + operator to append multiple strings together
let longString =
  'This is a very long string which needs ' +
  'to wrap across multiple lines because' +
  'otherwise my code is unreadable.';
console.log(longString);
// you can use the backslash character (\) at the end of each line
// Make sure there is no space or any other character after the backslash (expect for a line break or as indent) otherwise it will not work
let superLongString =
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';
console.log(superLongString);

// !!! COMPARISONS !!!
// We know many comparison operators from maths
/* In JavaScript they are written like this
Greater/less than: a > b, a < b
Greater/less than or equals: a >= b, a <= b.
Equals: a == b // note == sign means equality test, while = means an assignment
Not Equals: a != b
*/

// !!! BOOLEAN IS THE RESULT !!!
// All comparison operators return a boolean value
// True means "yes", "correct" or "the truth"
// False means "no", "wrong" or "not the truth"
// Examples
console.log(2 > 1); // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)
// Comparison results can be assigned to a variable just like any value
let results = 5 > 4; // assign the result of the comparison
console.log(results); // true

// !!! STRING COMPARISON !!!
// To see whether a string is greater than another, JavaScript uses the so-called "dictionary" or "lexicographical" order
// In other words, strings are compared letter-by-letter
// Examples
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true because G is the same as G L is the same as L but o is greater than e!
console.log('Bee' > 'Be'); // true
// Below is the algorithm to compare two strings
/*
1. Compare the first character of both strings.
2. If the first character is greater (or less) than the other string
then the first string is greater (or less) than the second.
3. Otherwise, if both strings first characters are the same, compare
the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, they are equal. Otherwise
the longer string is greater.
*/
// "a" is greater than "A" in JavaScript because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode)
// When comparing values of different types, JavaScript converts the values into numbers
console.log('2' > 1); // true, string "2" becomes a number 2
console.log('01' == 1); // true, string "01" becomes a number 1
// For boolean values, true becomes 1 and false becomes 0
console.log(true == 1); // true
console.log(false == 0); // true
// It is possible that two values can be equal if one of them is true as a boolean and the other one is false as a boolean
let ldt = 0;
console.log(Boolean(ldt)); // false
let ldr = '0';
console.log(Boolean(ldr)); // true
console.log(ldt == ldr); // true!
// Because a false Boolean is equal to 0 and the string is converted to the number 0 they are actually equal even though one is true and one is false

// !!! STRICT EQUALITY !!!
// A regular equality check == has a problem. It cannot differentiate 0 from false
console.log(0 == false); // true
console.log('' == false); // true
/*
This happens because operands of different types are converted to
numbers by the equality operator ==. An empty string, just like false
becomes zero
*/
// A strict equality operator === checks the equality without type conversion
// if a and b are of different types, then a === b immediately turns false without trying to convert them
console.log(0 === false); // false, because the types are different
// There is also strict non-equality operator !== analogous to !=
// The strict equality operator is a bit longer to write, but makes it obvious what's going on and leaves less room for errors

// !!! COMPARISON WITH NULL AND UNDEFINED !!!
// There's a non-intuitive behavior when null or undefined are compared to other values
/*
 for a strict equality check ===
 These values are different because each of them is a different
 type.
 */
console.log(null === undefined); // false
/*
For a non-strict check ==
There's a special rule. These two are a "sweet couple" they equal
each other (in the sense of ==), but not any other value.
*/
console.log(null == undefined); // true
/*
For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0 while 
undefined becomes NaN
*/
// Here are some funny things that can happen when we use this rule and how not to fall into any trap
console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true
// Its strange that null is greater than zero, so in one of the comparisons above it must be true, but they are both false
// Comparisons convert null to a number 0. Thats why (3) null >= 0 is true and (1) null > 0 is false
// == for undefined and null is such that, without any conversions, they equal each other and don't equal anything else. Thats why (2) null == 0 is false
// An incomparable undefined
// The value undefined shouldn't be compared to other values
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false 3
/*
Comparisons (1) and (2) return false because undefined gets converted
to NaN and NaN is a special numeric value which returns false for all
comparisons
(3) is false because undefined only equals null not any other value!
*/
// Avoid Problems
// Here is a solid way to never forget these problems
/*
Treat any comparison with undefined/null expect the strict equality
== with exceptional care.
Dont use comparisons >= > < <= with a variable which may be null/undefined,
unless you're really sure of what you're doing. If a variable can have these values,
check them separately.
*/

// !!! SUMMARY !!!
// Comparison operators return a boolean value
// Strings are compared letter-by-letter in the "dictionary" order
// When values of different types are compared, they get converted to numbers (exclusion of strict equality check)
// The values null and undefined equal each other and do not equal any other value
/*
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined.
Checking for null/undefined separately is a good idea!
*/
// Tasks
5 > 4; // true because 5 is larger than 4
'apple' > 'pineapple'; // false because "a" is smaller than "p"
undefined == null; // true because null and undefined equal each other only
undefined === null; // false because strict equality is strict and different types from both sides lead to false
null == '\n0\n'; // false because null only equals undefined
null === +'\n0\n'; // false because Strict equality of different types.

// !!! JAVASCRIPT IF ELSE AND ELSE IF
// Conditional Statements
// Very often when you write code, you want to perform different actions for different decisions
// You can use conditional statements in your code to do this
// In JavaScript we have the following conditional statements
/*
if // to specify a block of code to be executed, if a specified condition is true
else // to specify a block of code to be executed, if the same condition is false
else if // to specify a new condition to test, if the first condition is false
switch // to specify many alternative blocks of code to be executed
*/

// !!! THE IF STATEMENT !!!
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true
/*
if (condition) {
  // block of code to be executed if the condition is true
}
*/
// Example
/*
if (hour > 18) {
  greeting = 'Good day'
}
*/

// !!! THE ELSE STATEMENT
// The else statement to specify a block of code to be executed if the condition is false
/*
if (condition) {
  // block of code to be executed if the condition is true
}
else {
  // block of code to be executed if the condition is false
}
*/
// Example
/*
if (hour < 18) {
  greeting = "Good day";
}
else {
  greeting = "Good evening";
}
*/

// !!! THE ELSE IF STATEMENT !!!
// Use the else if statement to specify a new condition if the first condition is false
/*
if (condition1) {
  // block of code to be executed if conditon1 is ture
}
else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
}
else {
  // block of code to be executed if the condition1 is false and condition2 is false 
}
*/
// Example
/*
if (time < 10) {
  greeting = "Good morning";
}
else if (time < 20) {
  greeting = "Good day";
}
else {
  greeting = "Good evening";
}
*/

// !!! LOGICAL OPERATORS !!!
/// There are four logical operators in JavaScript
// || (OR), &&(AND), !(NOT), ??(Nullish Coalescing)
// Here we will only cover the first 3
// Even though they are logical they can be applied to values of any type, not only boolean
// ||(OR)
// The "OR" operator is represented with two vertical line symbols
// result = a || b;
// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false
// In JavaScript, the operator works different its much more powerful
// There are four possible logical combinations
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
// The result is always true except for the case when both operands are false
// If an operand is not a boolean, it's converted to a boolean for evaluation
// For example, the number 1 is treated as true, the number 0 as false
/*
if (1 || 0) { // works just like if(true || false) since 1 is true and 0 is false the result is true
alert('truthy!');
}
*/
// Most of the time, OR is used in an if statement to test if any of the given conditions is true
/*
let hour = 9;
if (hour < 10 || hour > 18) {  // since hour < 10 is true and hour > 18 is false the answer is true
  alert('the office is closed')
}
*/
// We can also pass more conditions
/*
let hour = 12;
let isWeekend = true
if (hour < 10 || hour > 18 || isWeekend) { // since hour < 10 is false and hour > 18 is false its false but since isWeekend is true im not sure how they got the output
  alert('The office is closed.') // it is the weekend
}
*/
// OR "||" finds the first truthy value
// The logic above is classical now lets go over features of "JavaScript"
// The extended algorithm works as follows
// Given multiple OR'ed values:
// result = value1 || value2 || value3;
// The OR || operator does the following
/*
Evaluates operands from left to right
For each operand, converts it to boolean if true, stops and returns the original value of that operand
If all operands have been evaluated (ie all were false) returns the last operand
A value is returned in its original form, without the conversion
In other words a chain of OR || returns the first truthy value or the last one if no truthy value is found
*/
// Example
console.log(1 || 0); // 1 (1 is truthy) the console log shows (1)
console.log(null || 1); // 1 (the first truthy value) console log shows (1)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)
// Example of getting the first truthy value from a list of variables
// firstName, lastName, nickName variables are all optional or can be undefined or have falsy values
// use OR to choose the one that has the data and show it (or "Anonymous" if nothing set)
let firstName = '';
let lastName = '';
let nickName = 'SuperCoder';
console.log(firstName || lastName || nickName || 'Anonymous'); // SuperCoder
// Since nickName is the first value that is true it will take it firstName and lastName are both empty strings or 0
// If you remove nickName from the console.log() then it will show 'Anonymous'
// Example of OR || operator getting "short circuit" evaluation
// It means that || processes its arguments until the first truthy value is reached, and then the value is returned without touching the other argument
// Its important because it becomes obvious if an operand isn't just a value, but an expression with a side effect, such as a variable assignment or function call
// Example
true || console.log('not printed');
false || console.log('printed');
// In the first line, the OR operator stops the evaluation immediately upon seeing true, so the alert isn't run
// Sometimes people use this feature to execute commands only if the condition on the left part is falsy.

// !!! &&(AND) !!!
// The AND operator is represented with two ampersands &&
// result = a && b;
// In classical programming, AND returns true if both operands are truthy and false otherwise
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
// An example with if
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log('The time is 12:30');
}
// Just as with OR, any value is allowed as an operand of AND
if (1 && 0) {
  // evaluated as true && false
  console.log('Wont work because the result is falsy');
}
// AND && finds the first falsy value
// Given multiple AND'ed values
// result value1 && value2 && value3;
// The AND && operator does the following
/*
1.Evaluates operands from left to right
2.For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand
3.If all operands have been evaluated(ie all were truthy), returns the last operand
*/
// In other words, AND returns the first falsy value or the last value if none were found
// Similar to OR the difference is that AND returns the first falsy value while OR returns the first truthy one.
// Examples
// if the first operand is truthy AND returns the second operand
console.log(1 && 0); // 0
console.log(1 && 5); // 5
// if the first operand is falsy AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && 'no matter what'); // 0
// We can also pass several values in a row. See how the first falsy one is returned
console.log(1 && 2 && null && 3); // null
// When all values are truthy, the last value is returned
console.log(1 && 2 && 3); // 3 the last one
// I'm SUCK right about here I'm not sure what makes a number TRUE or FALSE I know 1 is true and 0 is false but i'm not sure whether 5 is true or false!!!
// Precedence of AND && is higher than OR ||
/*
So the code a && b || c && d is essentially the same as if the
&& expressions were in parentheses: (a && b) || (c && d)
*/
// TIPS
/* 
1. Don't replace if with || or &&, sometimes, people use the AND &&
operator as 'shorter way to write if'
*/
// Example
let x = 1;
x > 0 && console.log('Greater than zero!');
/*
The action in the right part of && would execute only if the evaluation
reaches it. That is, only if (x > 0) is true
*/
// So we basically have an analogue for:
let y = 1;
if (y > 0) console.log('Greater than zero!');
// Although, the variant with && appears shorter, if is more obvious and tends to be a little bit more readable
// Use every construct for its purpose! use "if" if we want "if" and use && if we want AND

// !!! !(NOT) !!!
// The boolean NOT operator is represented with an exclamation sign (!)
// Example of the syntax since its pretty simple
// result = !value;
// The operator accepts a single argument and does the following
// 1. Converts the operand to boolean type: true/false
// 2. Returns the inverse value
// Example
console.log(!true); // false
console.log(!0); // true
// A double NOT !! is sometimes used for converting a value to boolean type
console.log(!!'non-empty string'); // true
console.log(!!null); // false
// the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.
// There's a little more verbose way to do the same thing (a built in Boolean function)
console.log(Boolean('non-empty string')); // true
console.log(Boolean(null)); // false
/*
The precedence of NOT ! is the highest of all logical operators, so
it always executes first, before && or ||
*/
// TASKS
// What is the code below going to output?
console.log(null || 2 || undefined); // 2 because it is the first truthy value and that is what OR looks for!
// What will the code below output?
// alert(alert(1) || 2 || alert(3));
/*
The first OR || evaluates its left operand console.log(1) since it is
undefined, OR goes to the second value
The second value is 2 which is true so the execution is halted. 2 is returned and 
then shown by the outer alert
*/
// What is this code going to show?
console.log(1 && null && 2); // null because AND operator finds the first falsy value
// What will this code show?
// alert(alert(1) && alert(2));
/* 
The call to alert returns undefined
Because of that && evaluates the left  operand outputs 1 and immediately stops.
Because undefined is a falsy value. And && looks for the falsy value
and returns it, so it's done.
*/
// What will the result be?
console.log(null || (2 && 3) || 4); // null is falsy so OR moves on 2 && 3 are both truthy and since 2 is first it takes it
/* 
The precedence of AND && is higher than ||, so it executes first.
The restult of 2 && 3 = 3, so th expression becomes
null || 3 || 4
now the result is the first truthy value 3.
*/
/*
Write an if condition to check that age is between 14 and 90 inclusively.
"Inclusively" means that age can reach the edges 14 or 90.
*/
// if (age >= 14 && age <= 90)
/*
Write an if condition to check that age is NOT between 14 and 90
inclusively.
Create two variants: the first one using NOT !, the second one with
out it.
*/
// if (!(age >= 14 && age <=90))
// if (age < 14 || age > 90)
// Which of these alerts are going to execute?
// What will the results of the expressions be inside
// if (-1 || 0) alert('first'); // -1 || 0 = -1, truthy!
// if (-1 && 0) alert('second'); -1 && 0 = 0, falsy
// if (null || -1 && 1) alert('third'); // Executes, Operator && has a higher precedence than ||, -1 && executes first, null || -1 && 1 -> null || 1 -> 1
// The first and the third will execute
let userName = prompt('Whos there?', '');
if (userName === 'Admin') {
  let pass = prompt('Password?');
  if (pass === 'TheMaster') {
    alert('Welcome!');
  } else if (pass === '' || pass === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (userName === '' || userName === null) {
  alert('Canceled');
} else {
  alert('I dont know you');
}

// !!! MAKING DECISIONS IN YOUR CODE CONDITIONALS !!!
// programming languages make decisions for example if a player has 0 lives the game ends
// we'll explore how so-called conditional statements work in JavaScript

// !!! IF...ELSE STATEMENTS !!!
// This is by far the most common type of conditional in JavaScript
// Basic syntax
/*
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
*/
/*
1. The keyword (if) is followed by parentheses
2. The condition placed inside the parentheses (typically "is this value bigger than this other value?")
and tested. The condition makes use of comparison operators and returns
true or false.
3. Within the curly braces, we have some code, and it only runs if
the condition is true in this example.
4. The keyword else comes next.
5. Another set of curly braces which inside we have some code and it
only runs if the condition is not true, or in other words if the
condition is false.
*/
// Real world example of the syntax
let shoppingDone = false;
let childsAllowance;
if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance); // 5 or false
// This code always results in the shoppingDone variable to be false!
// There is a mechanism to fix this issue!

// !!! ELSE IF !!!
// else if allows us more than two choices and outcomes!
// using else if, each extra choice requires an additional block to put in between if() {...}
// and else {...}
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent =
      'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === 'snowing') {
    para.textContent =
      'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = '';
  }
}
/*
1. Here we've got an HTML <select> element allowing us to make different
weather choices.
2. In JavaScript, we are storing a reference to both the <select> and
<p> elements, also adding an event listener to the <select> so that when
its value is changed, the setWeather() function is ran
3. When function is run the first variable is called choice to
the current value selected in the <select> element. All the conditionals
are else if() {...} execpt for the first one, which is tested in an
if() {...}
4. The very last choice is inside the else {...} block, and is basically
used as a last resort option the code inside it will be run if
none of the conditions are true. In this choice it serves its purpose
when nothing is selected or "--Make a choice--"
*/
// comparison operators
// === and !== test if one value is identical to, or not identical to another
// < and > test if one value is less than or greater than another
// <= and >= test if one value is less than or equal to, or greater than or equal to another
/*
any value that is not false, undefined, null, 0, NaN or empty string ('')
actually means true when tested as a condition statement.
*/
/*
let cheese = 'Cheddar';
if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
*/
// Fixing child doing a chore for parent
/*
let shoppingDone = false;
let childsAllowance;
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
*/
/*
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}
*/

/// !!! TERNARY OPERATOR !!!
// ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false.
// This can be useful in some situations and can take up less code than if...else block if you have two choices that are chosen between true/false condition
/*
( condition ) ? run this code : run this code
instead
*/
// Simple example
/*
let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith - we hope
you have a great day!' : 'Good morning Mrs. Smith.';
*/
// Here we have a variable called isBirthday
// if this is true we give our guest a happy birthday message
// if not we give her the standard daily greeting.

/// !!! SWITCH STATEMENTS !!!
// Switch statements are good for wanting to set a variable to a certain choice
// They take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, and executes the corresponding code that goes with it.
/*
switch (expression) {
  case x:
    run this code 
    break;
  
  case y:
    run this code instead
    break;
  
  // Include as many cases as you like

  default:
    actually, just run this code
}
*/
/* 
Sequence of events that will take place
1. The expression is evaluated
2. case x, will be tested against the expression. If matches, the
code will execute, and the break keyword will end the switch block.
3. If it does not match x will be skipped and y will be tested
if y matches the code will execute and exit out of the switch bock.
4. If none of the cases match the default code block will run.
*/
// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
/*
const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("It's Sunday, time to relax!");
    break;
  case 1:
    console.log('Happy Monday!');
    break;
  case 2:
    console.log("It's Tuesday. You got this!");
    break;
  case 3:
    console.log('Hump day already!');
    break;
  case 4:
    console.log("Just one more day 'til the weekend!");
    break;
  case 5:
    console.log('Happy Friday!');
    break;
  case 6:
    console.log('Have a wonderful Saturday!');
    break;
  default:
    console.log('Something went horribly wrong...');
}
*/
/*
// Set the student's grade
const grade = 87;

switch (true) {
  // If score is 90 or greater
  case grade >= 90:
    console.log('A');
    break;
  // If score is 80 or greater
  case grade >= 80:
    console.log('B');
    break;
  // If score is 70 or greater
  case grade >= 70:
    console.log('C');
    break;
  // If score is 60 or greater
  case grade >= 60:
    console.log('D');
    break;
  // Anything 59 or below is failing
  default:
    console.log('F');
}
*/
// Switch is Evaluated from top to bottom so it will not display C, D, or F.
// Get number corresponding to the current month, with 0 being January and 11 being December
/*
const month = new Date().getMonth();

switch (month) {
  // January, February, March
  case 0:
  case 1:
  case 2:
    console.log('Winter');
    break;
  // April, May, June
  case 3:
  case 4:
  case 5:
    console.log('Spring');
    break;
  // July, August, September
  case 6:
  case 7:
  case 8:
    console.log('Summer');
    break;
  // October, November, December
  case 9:
  case 10:
  case 11:
    console.log('Autumn');
    break;
  default:
    console.log('Something went wrong.');
}
*/
// You can put cases into other cases!
// In this example we are finding the month we are in!
// We split everything into Winter, Spring, Summer, and Autumn to make things more simple
