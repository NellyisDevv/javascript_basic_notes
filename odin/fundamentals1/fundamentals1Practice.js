// First Example
console.log(23 + 97);

// Second Example
console.log(4 + 6 + 9) / 77;

// Third Example
console.log(2 * 2 - (2 + 2));

// Fourth Example
let a = 10;
a = a * 9;
console.log(a);
let b = 7 * a;
console.log(b);
let c = 20;
c = c / 2;

// Fifth Example
console.log(c);
let d = (c * 2) / (2 + 2); // 5 because c * 2 equals 20 and 2 + 2 equals 4 now 20 / 4 is 5
console.log(d);
let myNumber = 2;
myNumber = myNumber * 2;
console.log(myNumber);

// Sixth Example
let myUser = 1;
const myNum = 2;
myUser = myUser * myNum;
console.log(myUser);

// Seventh Example
const max = 57;
let actual = 13;
let percentage = 20;
actualmax = (percentage / max) * actual;
console.log(actualmax);

// Eighth Example
let message;
message = "Hello";
message = "Goodbye"; // This is an example of changing a variable
// alert will show the message on the screen while console log shows information in the console
alert(message);

// Ninth Example
let hello = "Hello World";
let world;
world = hello; // Since world equals hello they now have the same variable
console.log(world);

// Tenth Example
let $ = 1;
let _ = 2;
console.log($ + _);

// Eleventh Example
let apple = "apple";
let AppLE; // Case matters! apple and AppLE are two different variables
AppLE = apple;
console.log(AppLE);

// Twelve Example
num = 10; // Even though the num is not a defined variable it still works because we are not using "use strict"
console.log(num);

// 13th Example
const COLOR_RED = "55"; // Uppercase constants are used for constant values that are known prior to the task starting like hexadecimal colors!
let color = COLOR_RED;
alert(color);

// 14th Example
let x = 20;
let y = 15;
z = x % y; // The % symbol gives us the remainder of 20 when its divided by 15
console.log(z);

// 15th Example
let i = 5;
w = i ** 2; // the ** symbol raises what number the variable is by the number that follows. 5 to the 2nd power here equals 25
console.log(w);

// 16th Example
let s = "my" + "string"; // when the binary + is used on strings it will combine the string values together!
console.log(s);

// 17th Example
console.log("1" + 2); // since 1 is a string 2 is converted to a string so the answer is not 3 its "12"

// 18th Example
console.log(2 + 2 + "1"); // this will equal to 41 because 2 + 2 is 4 and then "1" converts 4 into "41"

// 19th Example
console.log("1" + 2 + 2); // This equals "122" and not "14" because since it starts with a string all the numbers after become strings!

// 20th Example
let n = 1;
console.log(+n); // This is the unary + it does nothing to variables that are numbers but changes strings into numbers!

// 21st Example
let apples = "2";
let oranges = "3";
console.log(apples + oranges); // "23", the binary plus concatenates strings

// 22nd Example
let aa, bb, cc; // Example of a chained assignment! shows up as unidentified for some weird reason!
aa = bb = cc = 2 + 2; // Chained assignments show up from right to left!
console.log(aa); // 4
console.log(bb); // 4
console.log(cc); // 4
/*
 For readability its better to split such code into few lines
c = 2 + 2;
b = c;
a = c;
*/

// 23rd Example
let o = 2; // We often need to apply an operator to a variable and store the new result in that same variable
o += 5; // now o = 7 (same as o = o + 5)
o *= 2; // now o = 14 (same as o = o * 2)
console.log(o); // 14

// 24th Example
let counter = 2; // counter++ is incremented
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3

//25th Example
let school = 3; // school-- is decremented
school--; // works the same as school = school - 1, but is shorter
console.log(school); // 2

// 26th Example
let library = 1;
let k = library++; // (*) changed ++library to library++ which means it increments counter but returns the old value (prior to increment), so the alert shows 1.
console.log(k); // 1

// 27th Example
const maximum = 57;
actually = maximum - 13;
console.log(actually);
percentage = actually / max;
console.log(percentage); // 0.7719

/*
As you might have noticed by running Javascript code in the console,
the console prints the result of the code it executes (called a return statement).
You will learn more about these in the next lessons, however for
now it is good to remember that a declaration with an assignment
(such as let b = 7 * a) returns undefined and so you cannot declare
and assign a value to a variable and read its value in the same line.
 */
