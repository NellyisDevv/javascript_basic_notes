// EXAMPLE 1
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

// EXAMPLE 2
console.log(1 / 0); // Infinity because its a result of division by zero
console.log(Infinity); // you can also just reference it directly

// EXAMPLE 3
// Numbers in Script can't be larger than 2 to the 53rd power or 9007199254740991
// BigInt numbers are created by putting n to the end of an integer
console.log(12345678901234567890123456789012345678901234567890n);
// The n at the end means its a BigInt

// EXAMPLE 4
let str = 'Hello ';
let str2 = 'Single quotes are ok too ';
let phrase = str + str2;
console.log(phrase);

// EXAMPLE 5
let sttr = 'Hello ';
let sttr2 = 'Single quotes are ok too';
let phrases = `You can embed another string "${sttr2}"`; // the backtick ` lets you embed variables and expressions by wrapping them in ${...}
console.log(phrases);

// EXAMPLE 6
let name = 'Christ';
console.log(`Hello ${name}`); // Hello Christ

// EXAMPLE 7
console.log(`The result is ${1 + 2}`); // you can put anything into the ${...}

// EXAMPLE 8
let isGreater = 4 > 1;
console.log(isGreater); // This is true!

// EXAMPLE 9
let phoneNumber = null; // null values represents "nothing", "empty", or "value unknown"
console.log(phoneNumber);

// EXAMPLE 10
let zipCode; // let zipCode doesn't actually mean anything
console.log(zipCode); // undefined means "value is not assigned"

// EXAMPLE 11
let adress = '1111 Tampa Ave';
let actualAdress = undefined; // you can also just give something an undefined value!
console.log(actualAdress);

// EXAMPLE 12
// ALL OTHER TYPES ARE CALLED "PRIMITIVE" BECAUSE THEIR VALUES CAN CONTAIN ONLY A SINGLE THING (STRING OR NUMBER)
// Objects are used to store collections of data and more complex entities.

// EXAMPLE 13
let type = 'Im a string';
console.log(typeof type); // The typeof tells you what type of variable things are in this case its a string
const numberr = 44;
console.log(typeof numberr); // In this case since its a number the console log will show "number"
let booleanExample = 4 > 1; // In this case the console log will show boolean since this is a decision
console.log(typeof booleanExample);

// EXAMPLE 14
const backslash = "I've got to become smarter"; // note putting a \ tells the code the string does not end
console.log(backslash); // example 'I'\ve got to get smarter' string does not end at the second '

// EXAMPLE 15
const myName = 'Nelson';
const greetting = `Hello!, ${myName}`; // the `` symbols have ${...} embed inside with "myName"
console.log(greetting); // console.log shows "Hello!, Nelson"

// EXAMPLE 16
const uno = 'Hello, ';
const dous = 'how are you?';
const joined = `${uno}${dous}`; // These can be joined together and output
console.log(joined); // console.log shows 'Hello, how are you?'

// EXAMPLE 17
const welcomeMessage = 'Hello';
const user = 'Christ';
console.log(welcomeMessage + ',' + user); // "Hello, Christ" the middle string is holding the comma but it can also be empty
// DONT USE THIS METHOD TEMPLATE LITERALS USUALLY GIVES YOU MORE READABLE CODE

// EXAMPLE 18
const welcomingMessage = 'Hello,';
const realUser = 'Christ';
console.log(`${welcomingMessage} ${realUser}`); // "Hello, Christ" the space between the two template literals shows up in the console.log

// EXAMPLE 19
const title = 'Front';
const ammount = 242;
console.log(`${title} ${ammount}`); // When adding strings and numbers together it displays the string and then shows the number
// "Front 242"
// Every number coming AFTER the string becomes a string

// EXAMPLE 20
const myString = '123';
const myNum = Number(myString); // the Number() function will change any string back into a number
console.log(typeof myNum); // typeof is used here so the console.log tells me myNum is a "number"

// EXAMPLE 21
const myNum2 = 123;
const myString2 = myNum2.toString(); // toString() function does the opposite and changes a number into a string
console.log(typeof myString2); // typeof will tell us in the console.log that myString2 is a number!

// EXAMPLE 22
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%`;
console.log(output); // I like the song Fight the Youth. I gave it a score of 90% shows in the console

// EXAMPLE 23
// Template literals respect the line breaks in the source code
const output2 = `I like the song.
I gave it a score of 90%`;
console.log(output2);
// It will also show the line breaks inside of the console log

// EXAMPLE 24
const output3 = 'I like the song.\n I gave it a score of 90%';
console.log(output3); // Example 24 and 23 will show the same exact thing inside of the console log

// EXAMPLE 25
let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = txt.length;
console.log(length);
// The console log will show 26 because the string has 26 characters!

// EXAMPLE 26
let str1 = 'Apple, Banana, Kiwi';
let part1 = str.slice(7, 13);
console.log(part1);
// 7 is the first letter in Banana "B" and 13 is the last letter "a" so it outputs "Banana"

// EXAMPLE 27
let strr2 = 'Apple, Banana, Kiwi';
let part2 = str.slice(-12, -6);
console.log(part2);
// Going back 12 will start you at "B" and going back 6 will end you at "a" outputting "Banana"

// EXAMPLE 28
let strr3 = 'Apple, Banana, Kiwi';
let part3 = str.slice(7);
console.log(part3);
// Omiting the second parameter will slice out the rest of the string

// EXAMPLE 29
let string1 = 'Apple, Banana, Kiwi';
let part4 = str.substr(7, 6);
console.log(part4);
// THIS IS NOT WORKING IN THE CONSOLE LOG YOU NEED TO COME BACK TO THIS

// EXAMPLE 30
let part5 = str.substr(7);
console.log(part5);
// THIS IS NOT WORKING IN THE CONSOLE LOG YOU NEED TO COME BACK TO THIS

// EXAMPLE 31
let text = 'Please visit Microsoft!';
let newText = text.replace('Microsoft', 'W3Schools');
console.log(newText); // console log will show "Please visit W3Schools"
// replace() will replace the value of a string, remember 'MICROSOFT' will not work this is case sensitive
let text2 = 'Please enter number';
let newText2 = text2.replace('number', 'name ');
console.log(newText2); // console log will show "Please enter name"

// EXAMPLE 32
let text3 = 'Please visit Microsoft and Microsoft!';
let newText3 = text3.replace(/Microsoft/g, 'W3Schools');
console.log(newText3); // Console log will show "Please visit W3Schools and W3Schools!"
let text4 = 'Please Visit Morgan and Morgan';
let newText4 = text4.replace(/Morgan/g, 'NellyisDev');
console.log(newText4); // Console log will show "Please visit NellyisDev and NellyisDev"

// EXAMPLE 33
let text5 = 'Hello World';
let newText5 = text5.toUpperCase();
console.log(newText5); // console log will show "HELLO WORLD"

// EXAMPLE 34
let text6 = 'Hello World!';
let newText6 = text6.toLocaleLowerCase();
console.log(newText6); // console log will show "hello world!"

// EXAMPLE 35
// .conact() does the same thing as the + operator

// EXAMPLE 36
textExample = 'Hello'.concat('', 'Nelly!'); // the '' represents the empty string that Nelly! will be entered into followed by the ,
console.log(textExample);
textExample2 = 'Hello' + '' + 'Nelly!';
console.log(textExample2); // adding strings and concat does the same thing!

// EXAMPLE 37
let spacedText = '     Hello Space!     ';
console.log(spacedText);
let unspacedText = spacedText.trim();
console.log(unspacedText); // the .trim() will take away any space that is in a text

// EXAMPLE 38
let unpaddedNumber = '5';
let paddedNumber = unpaddedNumber.padStart(4, 0);
console.log(paddedNumber); // This will add 4 zeros before the 5 inside of the console log

// EXAMPLE 39
let unpaddedNumber2 = '5';
let paddedNumber2 = unpaddedNumber2.padEnd(4, 0);
console.log(paddedNumber2); // This will add 4 zeros to the end of the '5'

// EXAMPLE 40
let message = 'Hello Christ!';
let character = message.charAt(0); // 0 in charAt will take the first letter inside of the message since its connected to it
console.log(character); // the console log will display H because its in the 0 spot on the string!

// EXAMPLE 41
let introMessage = 'Hello Christ';
let introCharacter = introMessage[0]; // Property access seems to do something very similar to charAt bringing back H because it is in the 0 spot
console.log(introCharacter); // The console log here shows "H"

// EXAMPLE 42
let actionWord = 'Christ';
let actionOutput = actionWord.split('');
console.log(actionOutput); // This will give every letter its own string so it will show "C" "h" "r" "i" "s" "t"

// EXAMPLE 43
let stringObject = new String('A String object');
console.log(stringObject);
// This is a string object, I am not entirely sure what this means just yet so I'll learn moreover in the future.

// EXAMPLE 44
let i = 'i';
let v = 'v';
if (i < v) {
  console.log(i + ' is less than ' + v);
} else if (i > v) {
  console.log(i + ' is greater than ' + v);
} else {
  console.log(i + ' and ' + v + ' are equal. ');
}
// This example is how to compare strings in JAVASCRIPT with boolean

// EXAMPLE 45
let stringPrimitive = 'foo';
let stringgObject = new String(stringPrimitive);
console.log(typeof stringgObject); // stringgObject is an "object" so it shows up as "object" inside the console log
console.log(typeof stringPrimitive); // stringPrimitive is a string so it shows up as "string" inside the console

// EXAMPLE 46
// eval() treats Primitives as source code
// eval() treats objects as all other objects are, by returning the object
// creating a "primitive"
let s1 = '2 + 2'; // Creating the string
// creating an "object"
let s2 = new String('2 + 2'); // creates a string object
// eval() output
console.log(eval(s1)); // eval() on a primitive returns the number "4"
console.log(eval(s2)); // eval() on a object returns the string

// EXAMPLE 47
// A string object can always be converted to its primitive counterpart with valueOf() method
console.log(eval(s2.valueOf())); // returns the number "4" inside of the console log

// EXAMPLE 48
let superLongString =
  'This is a very long string which needs \
  to wrap across multiple lines because \
  otherwise my code is unreadable';
console.log(superLongString);
// you can use the \ for really long strings to make them more readable
// you can also just replace the "\" symbols with the "+" symbol

// EXAMPLE 49
console.log(2 > 1); // true (correct) 2 is greater than 1
console.log(2 == 1); // false (wrong) 2 is equal to 1
console.log(2 != 1); // true (correct) 2 is not equal to 1
// Comparison results can be assigned to a variable just like any value
let results = 5 > 4; // assign the result of the comparison
console.log(results); // true 5 is greater than 4

// EXAMPLE 50
console.log('Z' > 'A'); // true because Z in the alphabet is 26 while A is 1
console.log('Glow' > 'Glee'); // true because G is the same as G and L is the same as L but o is greater than e!
console.log('Bee' > 'Be'); // true

// EXAMPLE 51
// Directions to compare two strings
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
// CASE MATTERS
// "a" is greater than "A" in JavaScript because the lowercase character has greater index in JavaScript internal encoding (Unicode)

// EXAMPLE 52
// When comparing values of different types, JavaScript converts the values into numbers
console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string "01" becomes a number 1

// EXAMPLE 53
// For boolean values, true becomes 1 and false becomes 0
console.log(true == 1); // true
console.log(false == 0); // true
// It is possible that two values can be equal if one of them is true as a boolean and the other one is false as a boolean

// EXAMPLE 54
// A strict equality operator === checks the equality without type conversion
// if a and b are of different types, then a === b immediately turns false without trying to convert them
console.log(0 === false); // false, because they are different types even though this is actually true
// There is also strict non-equality operator !== analogous to !=
// The strict equality operator is a bit longer to write, but makes it obvious whats going on and leaves less room for erros

// EXAMPLE 55
console.log(null === undefined); // false
/*
for a non-strict check (==)
There's a special rule. null and undefined
are a "sweet couple" they equal each other
in (==), but not any other value
*/
console.log(null == undefined); // true
/* 
for math comparisons null becomes 0 while
undefined becomes NaN
*/

// EXAMPLE 56
console.log(null > 0); // null is converted to 0 and 0 cannot be greater than 0
console.log(null == 0); // false because in (==) null has no other conversions, meaning null does not equal anything else!
console.log(null >= 0); // true because null is equal to 0

// EXAMPLE 57
console.log(undefined > 0); // false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons
console.log(undefined < 0); // false
console.log(undefined == 0); // false because undefined only equals null not any other value!

// EXAMPLE 58
'apple' > 'pineapple'; // false because "a" is smaller than "p"
undefined == null; // true because null and undefined equal each other only
undefined === null; // false because strict equality is strict and different types from both sides leads to false
null == '\n0\n'; // false because null only equals undefined and '\n0\n' is a string value
null === +'\n0\n'; // false because strict equality always outputs false if the comparisons are of different types

// EXAMPLE 59
let xbox = 10;
let sony = 10;
if (xbox > sony) {
  console.log('xbox is better than sony');
} else if (sony > xbox) {
  console.log('sony is better than xbox');
} else {
  console.log('PC MASTER RACE');
}

// EXAMPLE 60
// || (OR), && (AND), ! (NOT), ?? (NULLISH COALESCING)
// These are the four logical operators!

// EXAMPLE 61
// four possible logical combinations of || (OR)
console.log(true || true); // true (true "OR" true is "true")
console.log(false || true); // true (false "OR" true is "true")
console.log(true || false); // true (true "OR" false is "true")
console.log(false || false); // false (false "OR" false is "false")
// The result is always true except for the case when both operands are false

// EXAMPLE 62
// If an operand is not a boolean, it's converted to a boolean for evaluation
// For example, the number 1 is treated as true, the number 0 as false
/* if (1 || 0) { works just like if(true || false) since 1 is true and 0 is false the result is true
alert('truthy!');
}
*/

// EXAMPLE 63
let hours = 50;
if (hours > 40 || hours < 80) {
  console.log('You are working too many hours!');
}

// EXAMPLE 64
// OR "||" finds the first truthy value
// Given multiple OR'ed values
// result = value1 || value2 || value3;
// THE OR || OPERATOR DOES THE FOLLOWING
/*
1. Evaluates operands from left to right
2. For each operand, converts it to boolean if true, stops and returns the original value of that operand
3. If all operands have been evaluated (ie all were false) returns the last operand
4. A value is returned in its original form, without the conversion
5. In other words a chain of OR || returns the first truthy value or the last one if no truthy value is found.
*/
console.log(1 || 0); // 1 is truthy so the console log shows (1)
console.log(null || 1); // null is not truthy so 1 is displayed because it is the first truthy value
console.log(null || 0 || 1); // 1 is the first truthy value in the equation so it is displayed
console.log(undefined || null || 0); // 0 is displayed because none of the values are truthy, but 0 is the last value!

// EXAMPLE 65
let primaryName = '';
let primaryLastName = '';
let nickName = 'SuperCoder';
console.log(primaryName || primaryLastName || nickName || 'Anonymous'); // SuperCoder is displayed in the console log
// nickName is the first value that is true primaryName and primaryLastName are both empty strings or "0"
// if you remove nickName from the console log it will display 'Anonymous' because it will be the first truthy value

// EXAMPLE 66
true || console.log('not printed!'); // the OR operator stops the evaluation immediately upon seeing true, so the console.log does not show 'not printed!'
false || console.log('printed'); // the console log will show 'printed' because it is the first truthy value
// Sometimes people use this feature to execute commands only if the condition on the left part is falsy.

// EXAMPLE 67
// && (AND) returns true if both operands are truthy and false
console.log(true && true); // true or "true and true"
console.log(false && true); // false or "false and true"
console.log(true && false); // false or "true and false"
console.log(false && false); // false or "false and false"

// EXAMPLE 68
let hour = 12;
let minutes = 30;
if (hour == 12 && minutes == 30) {
  console.log('The time is 12:30pm');
}
// AND && finds the first falsy value

// EXAMPLE 69
// Rules for the && AND operator
/*
1. Evaluates operands from left to right
2. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand
3. If all operands have been evaluated (ie all were truthy), returns the last operand
*/

// EXAMPLE 70
console.log(1 && 0); // console log will show 0 because 1 is a truthy value
console.log(1 && 5); // console log will show 5 because 1 is a truthy value and so is 5 so it will return the last value which is also 5
console.log(null && 5); // console log will show null because it is the first falsy value
console.log(0 && 'no matter what'); // console log will show 0 because it is the first falsy value
console.log(1 && 2 && null && 3); // console log will return null because 1 and 2 is true
console.log(1 && 2 && 3); // console log will return 3 because 1 is true 2 is true and 3 is true but is also the last value

// EXAMPLE 71
// precedence of && AND is higher than || OR
/*
a && b || c && d is the same as writing (a && b) || (c && d) 
this is because the AND precedence is higher than the OR
*/

// EXAMPLE 72
// ! (NOT) operator accepts a single argument and does the following
/*
1. Converts the operand to boolean type: true/false
2. Returns the inverse value
*/
console.log(!true); // false "true is not true" which is false
console.log(!0); // true "0 is not true" which is true

// EXAMPLE 73
// double NOT !! is sometimes used for converting a value to boolean type
console.log(!!'non-empty string'); // true
console.log(!!null); // false
console.log(!!0); // true
// The first NOT inverse the value to boolean and returns the inverse, and the second NOT inverses it again.

// EXAMPLE 74
// Another way of using the double NOT inverse is to use the Boolean Function
console.log(Boolean(!!'non-empty string')); // true
console.log(Boolean(!!null)); // false

// EXAMPLE 75
// The precedence of NOT (!) is the highest of all logical operators, so it always executes first, before AND &&, OR ||

// EXAMPLE 76
console.log(null || (2 && 3) || 4);
// the console log will show 3 because the precedence of && is higher than || "OR"
// so 2 && 3 will equal to 3 because they are both truthy values but 3 is a higher value
// null is not a truthy value so the || moves on to the next value which is 3, it takes that value and returns it

// EXAMPLE 77
let shoppingDone = false;
let childsAllowance;
if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance);
// This code will always result in the shoppingDone variable to be false!
// we can fix this

// EXAMPLE 78
let shopperDone = true;
let childrenAllowance;
if (shopperDone === true) {
  childrenAllowance = 10;
} else if (shopperDone === false) {
  childrenAllowance = 5;
}
console.log(childrenAllowance);

// EXAMPLE 79
// Switch statements take single expression/value as an input, and then look through the number of choices until they find one that matches that value, and executes the corresponding code that goes with it
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

// EXAMPLE 80
// Changing the const grade will change the case according to which switch value is true so if grade equals 90 console log will show 'A' and if grade is 20 console log will show 'F'
const grade = 87;

switch (true) {
  case grade >= 90:
    console.log('A');
    break;
  case grade >= 80:
    console.log('B');
    break;
  case grade >= 70:
    console.log('C');
    break;
  case grade >= 60:
    console.log('D');
    break;
  default:
    console.log('F');
}

// EXAMPLE
let userName = prompt('Who is there?', '');
if (userName === 'Admin') {
  let pass = prompt('Password?');
  if (pass === 'TheMaster') {
    alert('Welcome!');
  } else if (pass === '' || pass === null) {
    alert('Canceled');
  } else {
    alert('Wrong Password!');
  }
} else if (userName === '' || userName === null) {
  alert('Canceled');
} else {
  alert('I dont know you!');
}
// You should know how to read this out loud and it should make sense in english, make sure you do not forget this!!!
