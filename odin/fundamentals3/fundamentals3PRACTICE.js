// EXAMPLE 1
const myArray = ['I', 'Love', 'Chocolate', 'Frogs'];
const madeAString = myArray.join('');
console.log(madeAString);
// This turns myArray into a string
// The console log shows "ILoveChocolateFrogs"

// EXAMPLE 2
// This is an example of invoking a function
function myFunction() {
  console.log("I'm a Function");
}
// Example of calling the function once!
myFunction(); // Console.log() will show "I'm a Function"

// EXAMPLE 3
const myText = "I'm a String";
const newString = myText.replace('String', 'Yarn');
console.log(newString);
/* This is an example of a Function Parameter,
replace() must first get the string that wants
to be replaced. Then receive the string you want
to replace it with, then actually replace the 
string
*/

// EXAMPLE 4
const secondArray = ['I', 'Love', 'Chocolate', 'Frogs'];
const secondString = secondArray.join('');
console.log(secondString);
/* This is an optional parameter because you don't have to
specify them
*/
const thirdString = secondArray.join();
console.log(thirdString); // Console log will show I,Love,Chocolate,Frogs

// EXAMPLE 5
/* With default parameters you can specify default values by adding
= after the name of the parameter, followed by the default value
*/
function hello(name = 'Christ') {
  console.log(`Hello Welcome Back, ${name}!`);
}
hello('Ari');
hello();
hello('Saul');

// EXAMPLE 6
function coolFunction(name = '') {
  console.log(`Hello how are you ${name}?`);
}
coolFunction('Nelly'); // Hello how are you Nelly
coolFunction('did you just build another function?');

// EXAMPLE 7
// Map() method of Array to double every value in the original array
const originalNumbers = [1, 2, 3];
const doubled = originalNumbers.map((item) => item * 2);
console.log(doubled); // console log shows [2, 4, 6]
// item => item * 2 is the arrow function equivalent of
function doubleItem(item) {
  return item * 2;
}

// EXAMPLE 8
function favoriteAnimal(animal) {
  console.log(animal + 'is my favorite animal!');
}
favoriteAnimal('The goat '); // "The goat is my favorite animal!"
favoriteAnimal('The panda '); // "The panda is my favorite animal"

// EXAMPLE 9
const textMessage = 'The weather is cold';
const newText = textMessage.replace('cold', 'warm');
console.log(newText); // "The weather is warm"
/* 
1. the substring to find ('cold')
2. the string to replace it with ('warm')
*/
// functions that dont return any values are called void or undefined

// EXAMPLE 10
// Here return is written at the begging of the argument
function random(number) {
  return Math.floor(Math.random() * number);
}
// This could also be written as
function random(number) {
  const result = math.floor(Math.random() * number);
  return result; // here return is written at the end
}
// but the first way is much faster as you can tell

// EXAMPLE 11
function squared(num) {
  return num * num; // This takes the "num" and multiplies it once with itself
}
// alert(squared(10)); // number "100" is alerted

// EXAMPLE 12
function cubed(num) {
  return num * num * num; // multiplies "num" by itself three times
}
// alert(cubed(10)); // number "1000" is alerted

// EXAMPLE 13
function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x; // Take the "num" and multiply it with "x" again
    x--; // this is a postfix decrement!
  }
  return num;
}
// alert(factorial(1)); // goes through the process above and returns "1"
// alert(factorial(4)); // alerts "24"

// EXAMPLE 14
/*
input.addEventListener('change', () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = `${num} squared is
      ${squared(num)}.`;
    para.textContent += `${num} cubed is
      ${cubed(num)}.`;
    para.textContent += `${num} factorial is
      ${factorial(num)}.`;
  }
});
*/
/* Not fully sure what all of this means right now keep
reading through it and try to understand the logic of it
*/

// EXAMPLE 15
function myFavoriteAnimal(animal) {
  console.log(animal + ' is my favorite animal!');
}
myFavoriteAnimal('Dove');
myFavoriteAnimal('Leviathan');

// EXAMPLE 16
function showMessage() {
  alert('Hello Everyone');
}
// showMessage();

// EXAMPLE 17
function anotherMessage() {
  let message = "Hello I'm JavaScript";
  alert(message);
}

// EXAMPLE 18
let userName = 'Christ';
function userMessage() {
  let task = 'Hello, ' + userName;
  alert(task);
}
// userMessage() will alert "Hello, Christ"

// EXAMPLE 19
function allowMessage() {
  userName = 'John';
  let task = 'Hello, ' + userName;
  alert(task);
}
/* Since userName is not defined in the global scope it can be
defined in as many function level scopes as you want!
*/

// EXAMPLE 20
function passMessage() {
  let userName = 'Zoar';
  let task = 'Hello, ' + userName;
  alert(task);
}

// EXAMPLE 21
function displayMessage(from, text) {
  alert(from + ': ' + text); // the two parameters from and text can be changed
}
// displayMessage('Solomon', 'You are the King!');
// This is an example of the parameter being used by your own values

// EXAMPLE 22
function outputMessage(from, text) {
  alert(from + '' + text);
}
// outputMessage('David ', 'The Savior will be born from your line');

// EXAMPLE 23
let person;
function displayWork(from, text) {
  let person = 'Matthew';
  person = person;
  alert(person + '' + text);
}
// displayWork(person, ' Hello!'); // will display Matthew Hello!
// displayWork(person, ' You are awesome!');

// EXAMPLE 24
// Note when a values is passed through a function it is also called an argument
/*
1. A parameter is the variable listed inside the parentheses in the 
function declaration. (it's a declaration time term)
2. An argument is the value that is passed to the function when 
it is called. (it's a call time term)
/* 
1. We declare functions listing their parameters, then call them
passing arguments
2. displayWork is the function and the two arguments are from which
is Matthew and text which is "Hello!" and "You are awesome!"
*/

// EXAMPLE 25
function emptyString(person, text = 'no text was given!') {
  person = 'Korah';
  alert(person + ' ' + text);
}
// emptyString();
/*
This is a default parameter that will display is no value is given!
In this example person is Korah and since there is no text given
It will give the default message "no text was given!"
*/

// EXAMPLE 26
function holySpirit(person, text = kingJames()) {
  person = 'Korah';
  alert(person + ' ' + text);
}
function kingJames(message = 'You did not enter anything!') {
  alert(message);
}
/* This was supposed to be an example of kingJames() only being
executed if text was left empty but I could not get it to work!
*/

// EXAMPLE 27
function revealMessage(text) {
  if (text === undefined) {
    text = 'empty message';
  }
  alert(text);
}

// EXAMPLE 28
function showError(text) {
  text = text || 'empty';
  alert(text);
}
// showError();
// This is an example of using the (OR) operator inside functions

// EXAMPLE 29
function showCount(count) {
  alert(count ?? 'unknown');
  alert(count);
}

// EXAMPLE 30
function sum(a, b) {
  return a + b;
}
let result = sum(3, 2);
// alert(result);

// EXAMPLE 31
function add7(a, additional) {
  additional = 7;
  return a + additional;
}
let overallResult = add7(20);
alert(overallResult);
// THIS IS THE FIRST PRACTICE QUESTION FOR ODIN PROJECT!!!!!
// I'M SO PROUD OF YOU FIRST LINE OF CODE YOU DID WITHOUT ANY HELP!!!
// THANK YOU JESUS!!!!!

// EXAMPLE 31
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have parental permisson');
  }
}
let age = prompt('How old are you?');
if (checkAge()) {
  alert('Access granted!');
} else {
  alert('Access denied!');
}
/*
Minor issue with the code is that it still asks if I have permission
even when I put that I am 1000 years old!!
*/
// It's also possible to return without a value
// This causes the function to exit immediately
function showMovie(age) {
  if (!checkAge(age)) return;
}
alert('showing you the movie');
// if the code above is false showMovie won't proceed to alert!

// EXAMPLE 32
function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}
// same example written using the OR operator
function checkAge(age) {
  return age > 18 || confirm('Did parents allow you?');
}
// The second way is shorter to write this out and is more readable
/* It reads return age greater than 18 OR confirm
"Did parents allow you?"
*/

// EXAMPLE 33
// This function returns the last of the two numbers "a" and "b"
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// Same solution using the (?) operator
function min(a, b) {
  return a < b ? a : b;
}
/* This reads out if a is greater than b, return a because its truthy
else return b!
*/

// EXAMPLE 34
// Example of using the ?: operator used above!
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00'; // execute $2 if truthy else $10 if falsy
}
/* 
1. first you enter the condition, in this case the condition is "isMember"
2. followed by the (?) operator then the expression to execute if
the condition is truthy.
3. then followed by the (:) the the expression to execute if the 
condition is falsy!
*/

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

// EXAMPLE 35
let sayHi = function () {
  alert('Hello!');
};
// This is the syntax for a Function Expression
// It allow's us to make new functions in the middle of any expression

// EXAMPLE 36
