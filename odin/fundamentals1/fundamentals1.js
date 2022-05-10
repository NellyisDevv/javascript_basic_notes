console.log("Hello World!");

// !!!BASIC VARIABLE INFORMATION NOTES!!!
// console.log("Testing console log!");
/*
let message; // let is a defining the variable of "message"
message = "Hello!"; // store the string 'Hello' in the variable named message
alert(message); // shows the variable content
*/
// we can combine the variable declaration "message" and the assignment = "Hello!" into a single line of code!
/*
let message = "Hello!";
alert(message);
*/
// This is how you declare multiple variables in one line! DONT do this it may seem shorter but is harder to read than giving each variable there own "let" values!
/*
let user = "John",
  age = 25,
  message = "Hello";
*/
// Instead do it like this!
/*
let user = "John";
let age = 25;
let message = "Hello";
*/
// Some people also define multiple variables in this multiline style
/*
let user = "John";
  , age = 25
  , message = 'Hello';
  */
// var message = 'Hello';
// above is the old school way of writing "let" its somewhat similar with some minor differences!
/*
think of a variable like a box for data with a sticker on it.
For instance, the variable "message" would be a box labeled "message"
with the value "Hello!" inside.
*/
// we can put any value in the box, and also change it as many times as we want
let message;
message = "Hello!";
message = "World!"; // value changed
message = "I Changed Value Again!"; // value changed again
alert(message);
// When the value is changed, the old data is removed from the variable
// Think of this as taking "Hello!" outside of the box and putting in "World!" instead
/*
let hello = "Hello world!";
let message;
message = hello; // "message" and "hello" now hold the same variable since hello = "Hello world!" and message = hello
// now two variables hold the same data!
alert(hello); // Hello world!
alert(message); // Hello world!
*/
// This is an example of a repeated declaration of the same variable
/*
let message = "This";
// repeated "let" leads to an error!
let message = "That"; // SyntaxError: 'message' has already been declared
*/


// !!!VARIABLE NAMING!!!
/* A variable can only contain letters, digits or the symbols $ and _
also the first character must not be a digit.
// Two examples
let userName;
let test123
*/
/* Names that contain multiple words use camelCase where each word except the first start with a capital letter
// Two examples
myVeryLongName
numberOfResidents
*/
/* the $ symbol and the _ symbol can also be used in names, they are regular symbols without any special meaning.
// Example
let $ = 1; // declared a variable with the name "$"
let _ = 2; // declared a variable with the name "_"
alert($ + _); // $ plus _ is equal to 3.
*/
// Two incorrect variable names:
let 1a; // name cannot start with a number!
let my-name; // hyphen symbol "-" aren't allowed in variable names!
// apple and AppLE are two different variable names because CASE MATTERS!
// Non-latin letters are allowed, but not recommended for example using hieroglyphs, why? Because scripts may have a long life ahead you want as many people possible being able to read it!
// let, class, return, and function are reserved by the language meaning you can't use them as variable names
 let let = 5; // can't name a variable "let", error!
 let return = 5; // can't name a variable "return", error!


 // !!!USE STRICT!!!
 /* normally to use a variable you would need to define, but in old times it was possible
 to create a variable by a assignment of a value without using let. This still works now if we dont put
 "use strict" inside scripts to maintain compatibility with old scripts.
 // note: no "use strict" in this example
 num = 5; // the variable "num" is created if it didn't exist
 alert(num;) // 5
 // example of "use strict mode";
 num = 5; // error: num is not defined
 */


 // !!!CONSTANTS!!!
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';
// Variables that are declared using const are "constants" they cannot be reassigned. Any attempt to do so would cause an error!
const myBirthday = '18.04.1982'
myBirthday = '01.01.2001' // error, can't reassign the constant!
// only use the const when you are sure that the variable will never change!


// !!!UPPERCASE CONSTANTS!!!
// using constants as aliases for difficult to remember values are helpful!
// these constants are named using capital letters and underscores.
// Example of making constants for colors in "web hexadecimal" format:
const COLOR_RED = "#F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "#FF7F00";
// when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
// COLOR_ORANGE is much easier to remember than "FF7F00"
// Also "FF4F00" is easier to typo than COLOR_ORANGE
// Finally when reading code COLOR_ORANGE is more meaningful!
// capital-named constants are only used as aliases for "hard-coded" values and regular constants like "pageLoadTime" is not known prior to the page load!
// Example of regular constant
const pageLoadTime = /* time taken by a webpage to load */;
// pageLoadTime is not known prior to the page load, so its a regular constant. But it's still a constant because it doesn't change after the assignment.
// #FF7F00 IS known prior to load so COLOR_ORANGE is also known prior to load.
// All together capital-named constants are aliases for "hard-coded" values while regular constants are for values not known prior to page loading!


// !!!NAME THINGS RIGHT!!!
// A variable name should be clear and obvious describing the data that it stores.
// In real projects most time is spent modifying and extending existing code bases rather than starting over, its important that variables have clear meanings because when we come back to old code we can understand it much better!
// RULES FOR NAMING VARIABLES
// Use human-readable names like UserName or shoppingCart
// Stay away from abbreviations or short names like a, b, c, unless you really know what you're doing.
// Make names as descriptive and concise as possible, some bad names are "data" and "value" because they say NOTHING. Only use them if the context of the code makes it obvious which data or value the variable is referencing.
// If a site visitor is called a "user" then we should name related variables "currentUser" or "newUser" instead of "currentVisitor" or "newManInTown"
// creating descriptive and concise variable names in practice is very difficult! "Some programmers say its the hardest part"
// Dont be lazy and reuse existing variables instead of declaring new ones. Modern JavaScript minifiers and browsers optimize code well enough so it wont create any performance issues! Using different variables for different values can even help the engine optimize the code better.


// !!!PRACTICE TASKS!!!
// Declare two variables: admin and name;
// My answer
let admin;
let name = "John";
admin = name;
alert(admin); // "John"
// Website answer
let admin, name; // can declare two variables at once
name = "John";
admin = name;
alert(admin); // "John"
// Giving the right name
// create a variable with the name of our planet
// ourPlanet
// Website answer
// let ourPlanetName = "Earth";
// Create a variable to store the name of a current visitor to a website
// let currentUser = "";
// Website answer
// let currentUserName = "John";
// note: We could shorten this to userName if we know for sure that the user is current.
// note: Modern editors and autocomplete make long variable names easy to write. Don't save on them. A name with 3 words in it is fine.
// Examine the following code:
const birthday = '18.04.1982';
const age = someCode(birthday);
// which constant is a regular constant and which is a upper-case constant?
// my answer
const birthday = '18.04.1982';
const AGE = someCode(birthday); // I choose to make AGE upper-case constant
// Website answer 
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);
// Above is the correct answer because birthday is known prior to the execution and is directly written into the code.
// in contrast, age is evaluated in run-time. Today we have one age, a year after we'll hae another one. It doesnt change through the code execution. But it is "less of a constant" than birthday which never changes!


// !!! NUMBERS !!!
// !!! JAVASCRIPT ARITHMETIC OPERATORS !!!
/*
+ = Addition
- = Subtraction
* = Multiplication
** = Exponentiation
/ = Division
% = Modulus (Remainder)
++ = Increment
-- = Decrement
*/
// Examples
let x = 100 + 50;
// Example variables
let x = a + b;
// Example expressions
let x = (100 + 50) * a;


// !!! OPERATORS AND OPERANDS !!!
// The numbers (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an operator
/*
Operand       Operator        Operand 
  100            +               50


// !!! OPERATOR EXAMPLES !!!
// Adding
/*
The addition operator (+) adds numbers
*/
let x = 5;
let y = 2;
let z = x + y;
// Subtraction
/*
The subtraction operator (-) subtracts numbers.
*/
let x = 5;
let y = 2;
let z = x - y;
// Multiplying
/*
The multiplication operator (*) multiplies numbers.
*/
let x = 5;
let y = 2;
let z = x * y;
// Dividing
/* 
The division operator (/) divides numbers.
*/
let x = 5;
let y = 2;
let z = x / y;
// Remainder
/*
The modulus operator (%) returns the division remainder.
*/
let x = 5;
let y = 2;
let z = x % y;
// Here z = 1 because 2 goes into 5 twice and leaves a remainder of one!
// Incrementing
/*
The increment operator (++) increments numbers.
*/
let x = 5;
x++;
let z = x;
// Decrementing
/*
The decrement operator (--) decrements numbers.
*/
let x = 5;
x--;
let z = x;
// Exponentiation
/* 
The exponentiation operator (**) raises the first operand to the power of the second operand.
*/
let x = 5;
let z = x ** 2; // result is 25 because 5 to the power of 2 is 5 * 5 which equals 25


// !!! OPERATOR PRECEDENCE !!!
// Operator precedence describes the order in which operations are performed in an arithmetic expression.
let x = 100 + 50 * 3;
50 * 3 = 150 + 100 = 250
// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-)
// The precedence can be changed by using parentheses
// Example
// When using parentheses, the operations inside the parentheses are computed first.
let x = (100 + 50) * 3;
100 + 50 = 150 * 3 = 450
// When many operations have the same precedence (like addition and subtraction), they are computed from left ot right
// Example
let x = 100 + 50 - 3;
100 + 50 = 150 - 3 = 147


// !!! JAVASCRIPT OPERATOR PRECEDENCE VALUES
() Expression grouping 
// Example
(3 + 4)
. Member
// Example
person.name
[] Member
// Example
person["name"]
() Function call
// Example
myFunction()
new Create
// Example
new Date()
++ Postfix Increment 
// Example
i++
-- Postfix Decrement 
// Example
i--
++ Prefix Increment
// Example
++i
-- Prefix Increment
// Example
--i
! Logical not
// Example
!(x==y)
typeof Type
// Example
typeof x
< Less than
// Example
x < y
<= Less than or equal
// Example
x <= y
/* > Greater than
// Example
x > y
>= Greater than or equal
// Example
x >= y
*/
in Property in Object
// Example
"PI" in Math
instanceof Instance of Object 
// Example
instanceof Array
== Equal
// Example
x == y
=== Strict equal
// Example
x === y
!= Unequal
// Example
x != y
!== Strict unequal 
// Example 
x !== y
& Bitwise And 
// Example
x & y 
^ Bitwise XOR 
// Example
x ^ y 
| Bitwise OR 
// Example
x | y 
&& Logical AND 
// Example
x && y 
|| Logical OR
// Example
x || y
?? Nullish Coalescing 
// Example
x ?? y 
? : Condition
// Example
? "Yes" : "No"
// !!! ASSIGNMENTS
+= 
// Example
x += y
/= 
// Example
x /= y 
-=
// Example
x -= y
*=
// Example
x *= y 
%=
// Example
x %= y 
<<=
// Example
x <<= y
/*
>>=
// Example
x >>= y
>>>=
// Example
x >>>= y
&=
// Example x &= y
^= 
// Example
x ^= y 
|= 
// Example
x |= y 
, Comma
// Example 
5 , 6
*/


// !!! STRING CONCATENATION WITH BINARY + !!!
/* Usually, the plus operator + sums numbers.
But, if the binary (+) is applied to strings, it merges (concatenates)
them
// Example
let s = "my" + "string";
alert(s); // mystring
*/ 
// Note that if any of the operands is a string then the other one is converted to a string too.
// Example
/* 
alert('1' + 2); // "12"
alert(2 + '1'); // "21"
*/
// Complex example
// alert(2 + 2 + '1'); This equals to "41" and not "221"
// Since this example is left to right 2 + 2 is 4 and then the '1' is added to make "41"
// Complex example
// alert('1' + 2 + 2); This equals "122" and not "14"
/* The first operand is a string, the compiler treats the other two operands as strings too.
the 2 gets concatenated to '1' so it's like '1' + 2 = "12" and "12" + 2 = "122"
*/


// !!! NUMERIC CONVERSATION, UNARY + !!!
/*
The unary plus applied to a single value, doesn't do anything to numbers
But if the operand is not a number, the unary plus converts it into a number.
*/
// Examples with no effect on numbers
/*
let x = 1;
alert( +x ); // 1
let y = -2;
alert( +y ); // -2
// Examples that Converts non-numbers
/*
alert( +ture ); // 1
alert( +""); // 0
*/
// Note Number(...) does the same thing but this is shorter
// Numbers often need to be converted to strings because HTML form fields are usually strings
// Example
/*
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings
// If we want to treat them as numbers, we need to convert and then sum them
// Example
/*
let apples = "2";
let oranges = "3";
// Both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5
// longer version of the same variant
// alert ( Number(apples) + Number(oranges) ); // 5
*/
// Unary pluses are applied first, they convert strings to numbers, and then vinary plus sums them up.
// They are applied first because they are of higher precedence.


// !!! PRECEDENCE TABLE !!!
// Precedence level based on the sign!
/*
unary plus +
unary negation -
exponentiation **
multiplication *
division /
addition +
subtraction -
assignment =
*/


// !!! ASSIGNMENT = !!! 
// Assignment = is also an operator but is listed in the precedence table with a low priority of 2
// This is because all the calculations are done first and then the = is evaluated and then stored 
// Example
/*
let x = 2 * 2 + 1;
alert( x ); // "5" because 2 * 2 has higher precedence which equals 4 and then 4 + 1 = "5"
*/
// Complex Example
/*
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
let c = 3 - (1 = 2 + 1);
alert( a ); // 3 because expression (a = b + 1) b is 2
alert( c ); // 0 because a is used for further evaluations


// !!! CHAINING ASSIGNMENTS !!!
// Another interesting feature is the ability to chain assignments
// Example
/*
let a, b, c;
a = b = c = 2 + 2;
alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
*/
// Chained assignments evaluate from right to left
/*
first 2 + 2 is evaluated and then assigned to the variables
on the left: c, b, a. At the end, all the variables share a single value.
*/
// For readability its better to split such code into few lines
// Example
/*
c = 2 + 2;
b = c;
a = c;
*/


// !!! MODIFY-IN-PLACE !!!
// We often need to apply an operator to a variable and store the new result in that same variable
// Example
/*
let n = 2;
n = n + 5; // 7
n = n * 2; // 14 because "n" became 7 after the first operation
*/
// This notation can be shortened using the operators += and *=
/*
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14
*/
// These modify-and-assign operators exist for all arithmetical and bitwise operators /=, -=, etc
// Example
/*
let n = 2;
n *= 3 + 5;
alert( n ); // 16 (right part evaluated first, same as n *= 8)


// !!! INCREMENT/DECREMENT !!!
// Increasing or decreasing a number by one is among the most common numerical operations
// ++ Increment increases a variable by 1
// Example
/*
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
*/
// -- Decrement decreases a variable by 1
/*
let counter = 2;
counter--; // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1
*/
// IMPORTANT INCREMENT/DECREMENT CAN NLY BE APPLIED TO VARIABLES TRYING TO USE IT ON A LIKE LIKE 5++ WILL GIVE AN ERROR
// Operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in "postfix form" counter++
// The "prefix from" is when the operator goes before the variable ++counter
// Both statements do the same thing, increase counter by 1
// There is a different but we can only see it if we use the returned values of ++/--
// The prefix returns the new value while the postfix form returns the old value (prior to increment/decrement)
// Example
/*
let counter = 1;
let a = ++counter; // (*) this is prefix form ++counter increments counter and returns the new value 2
alert(a); // 2 
*/
/*
let counter = 1;
let a = counter++; (*) changed ++counter to counter++ which means it increments counter but returns the old value (prior to increment), so the alert shows 1.
alert(a); // 1
*/


// !!! INCREMENT/DECREMENT SUMMARY !!!
// If the result of increment/decrement is not used, there is no difference in which form to use
// Example
/*
let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same
*/
// If we'd like to increase a value and immediately use the result of the operator, we need the prefix from
// Example
/*
let counter = 0;
alert( ++counter ); // 1
*/
// If we'd like to  increment a value but use its previous value, we need thee postfix form
// Example
/*
let counter = 0;
alert( counter++ ) // 0 because postfix returns the value.
*/
// ++/-- can be used inside expressions as well.
// Example prefix
/*
let counter = 1
alert( 2 * ++counter ); // 4 because counter is prefix "++counter" it has one added making it 2 and then 2 * 2 = 4
*/
// Example postfix
/*
let counter = 1;
alert ( 2 * counter++ ); // 2 because counter ++ is postfix returning the "old" value of 1
*/
// While reading code fast eyes can easily miss something like counter++ and it won't be obvious that the variable increased.
// use the style of "one line - one action"
// Example
/*
let counter = 1;
alert( 2 * counter );
counter++;
*/


// !!! BITWISE OPERATORS !!!
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
// THEY ARE NOT JAVASCRIPT=SPECIFIC, THEY ARE SUPPORTED IN MOST PROGRAMMING LANGUAGES.
// List of operators
/*
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/
/*
THESE OPERATORS ARE USED VERY RARELY, WHEN WE NEED TO FIDDLE WITH 
NUMBERS ON THE VERY LOWEST (BITWISE) LEVEL. WE WON'T NEED THESE
OPERATORS ANY TIME SOON, AS WEB DEVELOPMENT HAS LITTLE USE OF THEM
*/


// !!! COMMA !!!
// The comma operator "," is one of the rarest and most unusual operators.
// Sometimes, it's used to write shorter code, so we need to know it in order to understand what's going on
/*
The comma operator allows us to evaluate several expressions
diving them with a comma "," Each of them is evaluated but only the
result of the last one is returned
*/
// Example
/*
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)
*/
// The first expression 1 + 2 is evaluated and its result is thrown away. Then 3 + 4 is evaluated and returned as the result.
// Comma has very low precedence even lower than "=" so parentheses are important in the example above!
// Without them: a = 1 + 2, 3 + 4; + is evaluated first summing the numbers into a = 3, 7 then the assignment operator = assigns a = 3 and reset is ignored. Its like (a = 1 + 2), 3 + 4
// Sometimes people use the "," operator in more complex constructs to put several actions in one line.
// Example
/*
for (a = 1, b = 3, c = a * b; a < 10; a++){
  ...
}
*/
// These tricks are used in many javascript frameworks but usually they dont improve code readability so we should think well before using them.


// !!! TASKS !!!
// The postfix and prefix forms
/*
let a = 1, b = 1;
let c = ++a;
let d = b++;
alert( c ) // 2 because a = 1 and ++a is prefix which adds 1
alert ( d ) // 1 because b = 1 and b++ is postfix which returns "old" value
alert ( ++a ) // 2
alert ( b++ ) // 1
// Assignment result
/*
let a = 2;
let x = 1 + (a *= 2); // let x = 1 + (2 *= 2);
alert(x); // 5 because a = 4 and x adds 1
/*
// Type conversions
/*
1) "" + 1 + 0 = "10" // (1) the addition with a string "" + 1 converts 1 to a string "" + 1 = "1" and then we have "1" + 0, the same rule is applied
2) "" - 1 + 0 = -1 // (2) The subtraction - only works with numbers, it converts an empty string "" to 0
3) true + false = 1
4) 6 / "3" = 2
5) "2" * "3" = 6
6) 4 + 5 + "px" = "9px"
7) "$" + 4 + 5 = "$45"
8) "4" - 2 = 2
9) "4px" - 2 = NaN (Not a Number)
10) "  -9  " + 5 = "   -9  5" // (3) The addition with a string appends the number 5 to the string
11) "  -9  " - 5 = -14 (4) The subtraction always converts to numbers, so it makes " -9" a number -9 (ignoring spaces around it)
12) null + 1 = 1 (5) null becomes 0 after the numeric conversion
13) undefined + 1 = Nan // Because an undefined value exist but doesn't mean anything yet. (6)
14) " /t /n" - 2 = -2 (7) Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters such as /t, /n and a "regular" space between them. So, similarly to an empty string, it becomes 0.


// !!! TASKS FIX THE ADDITION !!!
// Here the code asks user for two numbers and shows their sum
// It works incorrectly the output is 12 but it should be 3, why?
/*
let a = prompt ("First number?" 1);
let b = prompt ("Second number?" 2);
alert(a + b); // 12 this is wrong because a = 1 and b = 2 and these two numbers added together is 3 and they are not strings so they are not combined when added together.
// Here is two ways to fix it
// The first way turns prompt into a prefix
/*
let a = +prompt ("First number?", 1);
let b = +prompt ("Second number?", 2);
alert(a + b); // 3
*/
// Second example
/*
let a = prompt ("First number?", 1);
let b = prompt ("Second number?" 2);
alert(+a + +b); // 3
*/
// In both this examples they are getting unary + symbol which means that since they are numbers the value just gets returned to them resulting in the total being 3 both times!
