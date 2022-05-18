/// FUNDAMENTALS ONE
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///

// 1
console.log(1 + 2); // 3

// 2
console.log(4 + 6 + 9); // 77

// 3
console.log(2 * 2 - (2 + 2));

// 4
let a = 10;
a = a * 9;
console.log(a);
let b = 7 * a;
console.log(b);
let c = 20;
c = c / 2;
console.log(c);

// 5
let d = (c * 2) / (2 + 2);
console.log(d);
let myNumber = 2;
myNumber *= 2;
console.log(myNumber);

// 6
let myUser = 1;
const myNum = 2;
myUser *= myNum;
console.log(myUser);

// 7
const max = 57;
let actual = 13;
let percentage = 20;
actualMax = (percentage / max) * actual;
console.log(actualMax);

// 8
let message;
message = 'Hello';
message = 'Goodbye'; // Example of changing a variable
console.log(message);

// 9
let hello = 'Hello World!';
let world;
world = hello;
console.log(world);

// 10
let $ = 1;
let _ = 2;
console.log($ + _);

// 11
let apple = 'apple';
let AppLE; // case matters theses are two different varaibles
AppLE = apple;
console.log(AppLE);

// 12
num = 10;
console.log(num);

// 13
const COLOR_RED = '55'; // this is known prior to execution
let color = COLOR_RED;
console.log(color);

// 14
let x = 20;
let y = 15;
z = x % y; // % gives us the remainder of 20 when divided by 15
console.log(z);

// 15
let i = 5;
w = i ** 2; // ** raises the number to the number in front
console.log(w);

// 16
let s = 'my' + 'string'; // binary + adds strings together
console.log(s);

// 17
console.log('1' + 2); // '12' not 3 because 1 is a string

// 18
console.log(2 + 2 + '1'); // '41' not 5

// 19
console.timeLog('1' + 2 + 2); // "122"

// 20
let n = 1;
console.log(+n); // unary + does nothing to variables that are num
// it changes strings into numbers!

// 21
let apples = '2';
let oranges = '3';
console.log(apples + oranges); // "23", the binary plus concatenates strings

// 22
let aa, bb, cc; // Example of chained assignment!
aa = bb = cc = 2 + 2;
console.log(aa);
console.log(bb);
console.log(cc);
// Same thing with better readability
ccc = 2 + 2;
bbb = ccc;
aaa = ccc;
console.log(aaa, bbb, ccc);

// 23
let o = 2;
o += 5; // 7
o *= 2; // 14
console.log(o);

// 24
let counter = 2;
counter++; // Works the same as counter = counter + 1
console.log(counter);

// 25
let school = 3;
school--; // works the same as school = school - 1
console.log(school);

// 26
let library = 1;
let k = library++; // postfix increment returns old value
console.log(k);

// 27
const maximum = 57;
actually = maximum - 13;
console.log(actually);
percentage = actually / max;
console.log(percentage);

/// FUNDAMENTALS TWO
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///

// 1
const birthYear = 1948;
const thisYear = 1965;
const firstName = 'Nelson';
const lastName = 'Rosario';
const greeting =
  ' Hello! My name is ' +
  firstName +
  ' ' +
  lastName +
  ' and I am ' +
  (thisYear - birthYear) +
  ' years old. ';
console.log(greeting);

// 2
console.log(1 / 0); // division by zero is infinity
console.log(Infinity); // infinity can be referenced directly

// 3
// Numbers in Script can't be larger than 9007199254740991
// BigInt numbers are created by putting n to the end of integer
console.log(123456123456123456123456123543634515432445n);
// The n at the end means its a BigInt

// 4
let str = 'Hello ';
let str2 = 'Single quotes are ok too ';
let phrase = str + str2;
console.log(phrase);

// 5
let stri = 'Hello ';
let stri2 = 'Single quotes are ok too';
let phrases = `You can embed another string "${stri2}"`;
console.log(phrases);

// 6
let name = 'Christ';
console.log(`Hello ${name}`); // Hello Christ

// 7
console.log(`The result is ${1 + 2}`); // anything goes inside ${}

// 8
let isGreater = 4 > 1;
console.log(isGreater); // true!

// 9
let phoneNumber = null; // null represents "nothing", "empty", "value unknown"
console.log(phoneNumber);

// 10
let zipCode;
console.log(zipCode); // undefined means "value is not assigned"

// 11
let address = '1111 Tampa Ave';
let actualAddress = undefined;
console.log(actualAddress);

// 12
// ALL OTHER TYPES ARE CALLED "PRIMITIVE" BECAUSE THEIR VALUES CAN CONTAIN ONLY A SINGLE THING (STRING OR NUMBER)
// Objects are used to store collections of data and more complex entities.

// 13
let type = "I'm a string"; // \ before a comma makes hybrid string
console.log(typeof type); // typeof tells me what "type" is
const numero = 44;
console.log(typeof numero); // typeof tells me this const is a number
let booleanExample = 4 > 1;
console.log(typeof booleanExample); // typeof tells me "boolean"

// 14
const backslash = "I've got to become smarter";
console.log(backslash); // 'I\'ve got to become smarter'

// 15
const myName = 'Nelson';
const introduction = `Hello!, ${myName}`;
console.log(introduction); // "Hello!, Nelson"

// 16
const uno = 'Hello, ';
const dos = 'how are you?';
const joined = `${uno}${dos}`; // ${} can be joined together
console.log(joined); // "Hello, how are you?"

// 17
const welcomeMessage = 'Hello';
const user = ' Christ!';
console.log(welcomeMessage + ',' + user);
// DONT USER THIS TEMPLATE LITERALS GIVE MORE READABLE SOLUTIONS

// 18
const welcomingMessage = 'Hello,';
const realUser = 'Christ';
console.log(`${welcomeMessage} ${realUser}`); // "Hello, Christ"
// the space between the two template literals shows up in the console.log

// 19
const title = 'Front';
const amount = 242;
console.log(`${title} ${amount}`);
// When adding strings and numbers together it displays the string and then shows the number
// "Front 242"
// Every number coming AFTER the string becomes a string

// 20
const myString = '123';
const myNumb = Number(myString);
console.log(typeof myNumb); // string was converted to number here

// 21
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
// .toString() changes a number into a string
// myNum2 is now a "string"

// 22
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%`;
console.log(output);

// 23
// Template literals respect the line breaks in the source code
const output2 = `I like the song.
I gave it a score of 90%`;
console.log(output2);
// console.log() will also show the line breaks

// 24
const output3 = 'I like the song.\n I have it a score of 90%';
console.log(output3);
// same as 23 but the like break is .\

// 25
let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = txt.length;
console.log(length);
// 26 is the length of txt

// 26
let string1 = 'Apple, Banana, Kiwi';
let part1 = string1.slice(7, 13);
console.log(part1);
// 7 is the first letter in Banana "B" 13 is the last letter "a"
// Meaning it will output everything inside

// 27
let string2 = 'Apple, Banana, Kiwi';
let part2 = string2.slice(-12, -6);
// Going back 12 will start you at "B"
// Going back 6 will end you at "A" outputting "Banana"

// 28
let string3 = 'Apple, Banana, Kiwi';
let part3 = string3.slice(7);
console.log(part3);
// omitting the second parameter will slice out rest of the string

// 29
let string4 = 'Apple, Banana, Kiwi';
let part4 = string4.substr(7, 6);
console.log(part4);

// 30
let part5 = string4.substr(7);
console.log(part5);

// 31
let text = 'Please visit Microsoft!';
let newText = text.replace('Microsoft', 'W3Schools');
console.log(newText);
// Microsoft is replace with W3Schools

// 32
let text2 = 'Please visit Microsoft and Microsoft!';
let newText2 = text2.replace(/Microsoft/g, 'W3Schools');
console.log(newText2);
// /Microsft/g, means change every instance of "Microsoft"

// 33
let text3 = 'Hello World!';
let newText3 = text3.toUpperCase();
console.log(newText3); // console log shows "HELLO WORLD"

// 34
let text4 = 'Hello World!';
let newText4 = text4.toLocaleLowerCase();
console.log(newText4); // console log shows "hello, world!"

// 35
// .concat() does the same thing as the + operator

// 36
textExample = 'Hello'.concat(' Nelly!');
console.log(textExample);
textExample2 = 'Hello' + ' ' + 'Nelly!';
console.log(textExample2);

// 37
let spacedText = '     Hello Space!     ';
console.log(spacedText);
let unspacedText = spacedText.trim();
console.log(unspacedText);
// .trim() will take away any space inside text

// 38
let unpaddedNumber = '5';
let paddedNumber = unpaddedNumber.padStart(4, 0);
console.log(paddedNumber);
// padStart(number padded, padding number replaced)

// 39
let unpaddedNumber2 = '5';
let paddedNumber2 = unpaddedNumber2.padEnd(4, 0);
console.log(paddedNumber2);

// 40
let messages = 'Hello Christ!';
let character = messages.charAt(0);
console.log(character);
// Console log will display H because it's in the 0 spot

// 41
let introMessage = 'Hello Christ';
let introCharacter = introMessage[0]; // Property access seems to do the same thing as charAt()
console.log(introCharacter); // returns H in the console.log()

// 42
let actionWord = 'Christ';
let actionOutput = actionWord.split('');
console.log(actionOutput); // "C" "h" "r" "i" "s" "t"

// 43
let stringObject = new String('A String object');
console.log(stringObject);
// This is a tring object, I am not entirely sure what this means just yet

// 44
let q = 'q';
let v = 'v';
if (q < v) {
  console.log(q + ' is less than ' + v);
} else if (q > v) {
  console.log(q + 'is greater than ' + v);
} else {
  console.log(q + ' and ' + v + ' are equal. ');
}
// This example shows comparing strings with boolean

// 45
let stringPrimitive = 'foo';
let stringgObject = new String(stringPrimitive);
console.log(typeof stringgObject); // stringgObject is an "object" so it shows up as "object" inside the console log
console.log(typeof stringPrimitive); // stringPrimitive is a string so it shows up as "string" inside the console

// 46
// eval() treats Primitives as source code
// eval() treats objects as all other objects are, by returning the object
// creating a 'primitive'
let s1 = '2 + 2'; // creating the string
console.log(s1);
// creating an "object"
let s2 = new String('2 + 2'); // creates a string object
console.log(s2);
// eval() output
console.log(eval(s1)); // returns primitive number 4
console.log(eval(s2));

// 47
// A string object can always be converted to its primitive counterpart with valueOf() method
console.log(eval(s2.valueOf())); // returns 4

// 48
let superLongString =
  'This is a very long string which \
needs to wrap across multiple lines because otherwise \
my code is unreadable';
console.log(superLongString);
// you can use \ for really long strings to make readable
// or you can replace the \ symbol with + symbol

// 49
console.log(2 > 1); // true 2 is greater than 1
console.log(2 == 1); // false 2 is not equal to 1
console.log(2 != 1); // true 2 is not equal to 1
// comparison can be assigned to a variable
let results = 5 > 4;
console.log(results); // true

// 50
console.log('Z' > 'A'); // true because Z is number 26 in alphabet
console.log('Glow' > 'Glee'); // true G and l are equal while 9 is greater then e
console.log('Bee' > 'Be'); // true

// 52
console.log('2' > 1); // true, string '2' becomes number 2
console.log('01' == 1); // true, string "01" becomes a number 1

// 53
console.log(true == 1); // true in boolean 'true' means 1
console.log(false == 0); // true in boolean false becomes 0

// 54
// strict equality checks the equality without type conversion
// if two values are different type equality turns false without conversion
console.log(0 === false); // false they are different types
// !== is analogous to !=
// strict equality makes it obvious what going on with less error

// 55
console.log(null === undefined); // false
console.log(null == undefined); // true

// 56
console.log(null > 0); // null is 0 and 0 is not greater than 0
console.log(null == 0); // null does not equal to anything else
console.log(null >= 0); // true because null is equal to 0

// 57
console.log(undefined > 0); // false undefined is NAN which is false for everything
console.log(undefined < 0); // false
console.log(undefined == 0); // undefined only equals null

// 58
'apple' > 'pineapple'; // false because 'a' is 1 and 'p' is 16
undefined == null // true, undefined and null equal each other
undefined === null // false, strict means if they are different in type it will be false
null = '\n0\n' // false because null only equals undefined
null === + '\n0\n' // false strict will show false because they are different type

// 59
let xbox = 10
let sony = 10
if (xbox > sony) {
  console.log('xbox is better than sony')
} else if (sony > xbox) {
  console.log('sony is better than xbox')
} else {
  console.log('PC MASTER RACE')
}

// 60
// || (OR), && (AND), ! (NOT), ?? (NULLISH COALESCING)
// These are the four logical operators!

// 61
// four possible logical combinations of || (OR)
console.log(true || true); // true (true "OR" true is "true")
console.log(false || true); // true (false "OR" true is "true")
console.log(true || false); // true (true "OR" false is "true")
console.log(false || false); // false (false "OR" false is false)
// the result is always true except when both operands are false

// 62
/* 
1. If an operand is not a boolean, it's converted to a boolean
for evaluation
2. Example, the number 1 is treated as true, the number 0 false
3. if (1 || 0) works just like if (true || false) since 1 is
true and 0 is false
*/

// 63
let hours = 50
if (hours > 40 || hours > 80) {
  console.log('You are working too many hours!')
} else if (hours < 40 || hours < 20) {
  console.log('You need to work more hours')
} else {
  console.log('Good work life balance')
}

// 64
// OR "||" finds the first truthy value
// Given multiple OR'ed values
// result = value3 || value2 || value1
// THE OR || OPERATOR DOES THE FOLLOWING
/*
1. Evaluates operands from left to right
2. For each operand, converts it to boolean if true, stops
and returns the original value of that operand
3. If all operands have been evaluated (ie all were false)
returns the last operand
4. A value is returned in its original form, without the
conversion
5. In other words a chain of OR || returns the first truthy
value or the last one if no truthy value is found.
*/
console.log(1 || 0); // 1 is truthy so the console log shows (1)
console.log(null || 1) // null is falsy so console log shows (1)
console.log(null || 0 || 1) // null and 0 are falsy log shows (1)
console.log(undefined || null || 0); /* 0 is displayed because
all arguments are falsy which means the last argument will be
outputted */

// 65
let primaryName = ''
let primaryLastName = ''
let nickName = 'SuperCoder'
console.log(primaryName || primaryLastName || nickName || 'Anonymous')
// SuperCoder is displayed in the console log
/* nickName is the first value that is true primaryName and
primaryLastName are both empty strings or "0" */
/* if you remove nickName from the console log it will display
'Anonymous because it will be the first truthy value */

// 66
true || console.log('not printed') /* console log will not display
'not printed' because OR operator stops at the first truthy value */
false || console.log('printed') /* console log will show "printed"
because its the first truthy value */
/* Sometimes people us tis feature to execute commands only if
the condition on the left part is falsy. */

// 67
// && (AND) returns true if both operands are truthy and false
console.log(true && true) // true or "true and true"
console.log(false && true) // false or "false and true"
console.log(true && false) // false or "true and false"
console.log(false && false) // false or "false and false"

// 68
let hour = 12
let minutes = 30
if (hour === 12 && minutes == 30) {
  console.log('the time is 12:30pm');
}
// AND && finds the first falsy value 

// 69
// Rules for the && AND operator
/*
1. Evaluates operands from left to right
2. For each operand, converts it to a boolean, if the result is
false, stops and returns the original value of that operand
3. If all operands are truthy, returns the last operand
*/

// 70
console.log(1 && 0) // console log will show 0 because its falsy
console.log(1 && 5) /* console log will show 5 because both
values are truthy so the last value is returned */
console.log(null && 5) /* console log will display null because
its the first falsy value */
console.log(0 && 'no matter what') /* console log will display
0 because its the first falsy value */
console.log(1 && 2 && null && 3); /* console log will display
null because its the first falsy value */
console.log(1 && 2 && 3); /* because all three values are truthy
console log will return the last value which is 3 */

// 71
// precedence of && (AND) is higher than || (OR)
/*
a && b || c && d is the same as writing (a && b) || (c && d)
this is because the AND precedence is higher than the OR
*/

// 72
// ! (NOT) operator accepts single argument and does this
/*
1. Converts the operand to boolean type: true/false
2. Returns the inverse value
*/
console.log(!true); // false "true is not true" which is false
console.log(!0); // true "0 is not true" which is true

// 73
// double !! (NOT) is used for converting a value to boolean type
console.log(!!'non-empty string') // true
console.log(!!null) // false
console.log(!!0) // true

// 74
/* Another way of using the double NOT inverse is to use the
boolean function */
console.log(Boolean(!!'non-empty string')) // true
console.log(Boolean(!!null)) // false

// 75
/* the precedence of (NOT) ! is the highest of all logical
operators, so it always executes first, before (AND) &&,
(OR) || */

// 76
console.log(null || (2 && 3) || 4)
/*
1. the console log will show 3 because the precedence of &&
is higher than || (OR)
2. so 2 && 3 will equal to 3 because they are both truthy values
but 3 is a higher value
3. null is not a truthy value so the || moves on to the next value
which is 3, it takes that value and returns it
*/

// 77
let shoppingDone = false;
let childAllowance;
if (shoppingDone === true) {
  childAllowance = 10
} else {
  childAllowance = 5
}
console.log(childAllowance)
// This code will always show shoppingDone as false
// we can fix this

// 78
let shoppingFinished = true;
let childrenAllowance;
if (shoppingFinished === true) {
  childrenAllowance = 10
} else if (shoppingFinished === false) {
  childrenAllowance = 5
}
console.log(childAllowance)

// 79
/* Switch statements take single expression/value as an input,
and then look through the number of choices until they find
one that matches that value, and executes the corresponding
code that does with it */
/*
switch (expression) {
  case x:
    ruth this code
    break;

  case y:
    run this code instead
    break;

  // Include as many cases as you like

  default
    actually, just run this code
}
*/
/*
Sequence of events that will take place
1. The expression is evaluated
2. case x, will be tested against the expression. If matches,
the code will execute, and the break keyword will end the switch block
3. If it does not match x will be skipped and y will be tested
if y matches the code will execute and exit out of the switch block
4. If none of the cases match the default code block will run.
*/

// 80
/* chaning the const grade will change the case according
to which switch value is true so if grade equals 90 console
log will show "A" and if grade is 20 console log will show "F"
*/
const grade = 90;

switch(true) {
  case grade >= 90:
    console.log('A')
    break;
  case grade >= 80:
    console.log('B')
    break;
  case grade >= 70:
    console.log('C')
    break;
  case grade >= 60:
    console.log('D')
    break; 
    default:
      console.log('F');
}

// FINAL EXAMPLE
let userName = prompt('Who is there?', '')
if (userName === 'Admin') {
  let pass = prompt('Password?');
  if (pass === 'TheMaster'); {
    alert('Welcome');
  }
} else if (pass === '' || pass == null) {
  alert('Canceled');
} else {
  alert('Wrong Password!');
}
// make sure you can read this out loud in english terms!!!!

// 1
const myArray = ['I', 'Love', 'Chocolate', 'Frogs']
const madeAString = myArray.join('')
console.log(madeAString)
// this turns myArray into a string
// console log shows "ILoveChocolateFrogs"

// 2
// This is an example of invoking a function
function myFunction() {
  console.log("I'm a Function")
}
// Example of calling the function once!
myFunction();  // Console.log() will show "I'm a Function"

// 3
const myText = "I'm a String"
const newString = myText.replace('String', 'Yarn')
console.log(newString)
/* This is an example of a Function Parameter, repleace()
must first get the string that wants to be repleaced. Then
recieve the string you want to replace it with, then actually
replace the string */

// 4
const secondArray = ['I', 'Love', 'Chocolate', 'Frogs']
const secondString = secondArray.join('')
console.log(secondString)
/* This is an optional parameter because you don't have to 
specify them */
const thridString = secondArray.join()
console.log(thirdString)

// 5
/* With default parameters you can specify default values by
adding = after the name of the parameter, followed by the
default value */
function hello(name = 'Christ') {
  console.log(`Hello Welcome Back, ${name}!`)
}
hello('Korah')
hello()
hello('Saul')

// 6
function coolFunction(name = '') {
  console.log(`Hello how are you ${name}?`)
}
coolFunction('Nelly')
coolFunction('did you just build another function?')

// 7
/* Map() method of Array to double every value in the original
array */
const originalNumbers = [1, 2, 3]
const doubled = originalNumbers.map((item) => item * 2)
console.log(doubled) // console log shows [2, 4, 6]
// item => item * 2 is the arrow function equivalent of 
function doubleItem(item) {
  return item * 2
}

// 8 
function favoriteAnimal(animal) {
  console.log(animal + 'is my favorite animal!')
}
favoriteAnimal('The goat ')
favoriteAnimal('The panda ')

// 9
const textMessage = 'The weather is cold'
const newText5 = textMessage.replace('cold', 'warm')
console.log(newText5) // "The weather is warm"
/*
1. the substring to find ('cold')
2. the string to replace it with ('warm')
*/
/* functions that dont return any values are called void or
undefined */

// 10
// Here return is wriiten at the beggining of the argument 
function random(number) {
  return Math.floor(Math.random() * number)
}
// This could also be written as
function random(number) {
  const result = math.floor(Math.randon() * number)
  return result; // here return is wriiten at the end
}
// the first way is more to understand but much quicker

// 11
function squared(num) {
  return num * num // takes num and muliplies it once with itself
}
// alert(squared(10)); // number "100" is alerted

// 12 
function cubed(num) {
  return num * num * num // num multiplied with itself 3 times
}
// alert(cubed(10)); number "1000" is alerted