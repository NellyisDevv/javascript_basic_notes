// !!! ARROW FUNCTIONS THE BASICS !!!
// There is another simple syntax fro creating functions and is often better than function Expressions
// It's called "arrow functions", because it looks like this!
// let func = (arg1, arg2, ...arg2, argN) => expression;
// This creates a function "func" that accepts arguments arg1...argN, then evaluates the expression on the right side with their use and returns its result
// In other words, it's the shorter version of
/*
let func = function (arg1, arg2, ..., argN) {
  return expression;
};
*/
// Here is an example!
let sum = (a, b) => a + b;
// alert(sum(1, 2)); // 3
/* This arrow function is a shorter form of:
let sum = function(a, b) {
    return a + b;
};
*/
// (a, b) => a + b means a function that accepts two arguments names a and b. Upon the execution, it evaluates the expression a + b and returns the result
// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter
// Example
let double = (n) => n * 2;
// alert(double(3));
// If there are no arguments, parentheses are empty, but they must be present
let sayHi = () => alert('Hello!');
// sayHi();
// Arrow functions can be used in the same way as Function Expressions.
// For instance, to dynamically create a function
/*
let age = prompt('What is your age?', 18);
let welcome = age < 18 ? () => alert('Hello!') : () => alert('Greetings!');
welcome();
*/
// Here is a quick meaning of the ? operator that you have been confused about
// the conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?)
// then an expression to execute if the condition is truthy followed by a colon (:)
// then finally the expression to execute if the condition is falsy
// This operator is frequently used as an alternative to an if...else statement
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}
console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));
// Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure
// They are very convenient for simple one-line actions, when we're just too lazy to write many words.

// !!! MULTILINE ARROW FUNCTIONS !!!
// The arrow functions that we've seen so far were very simple.
// They took arguments from the left of =>, evaluated and returned the right side expression with them.
// sometimes we need a more complex function, with multiple expressions and statements
// In this case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does)
let total = (a, b) => {
  //the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
// alert(total(20, 30));
// Here we only covered tha basics of arrow functions but there is much more
// Arrow functions have other interesting features.

// !!! TASKS !!!
// Replace Function Expressions with arrow functions in the code below
/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  'Do you agree?',
  function () {
    alert('You agreed.');
  },
  function () {
    alert('you canceled the executuion.');
  }
);
*/
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the executed.')
);

// !!! INTRODUCTION TO JAVASCRIPT CALL STACK !!!
// JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts
// The call stack works based on the LIFO principle or last-in-first-out
// When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
// When a function is called, JavaScript's engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.
// If a function calls another function, the JavaScript engine creates a new function execution context for the function that is being called and pushes it on top of the call stack.
// When the current function completes, the JavaScript engine pops it off the calls tack and resumes the execution where it left off
// The script will stop when the call stack is empty
// JAVASCRIPT CALL STACK EXAMPLE
function add(a, b) {
  return a + b;
}
function average(a, b) {
  return add(a, b) / 2;
}
let x = average(10, 20); // console log returns 15
// When the JavaScript engine executes this script, it places the global execution context (denoted by main() or global() function on the call stack)
// The global execution context enters the creation phase and moves to the execution phase
// The Script engine executes the call to the average(10, 20) function and creates a function execution context for the average() function and pushes it on top of the call stack
// The engine starts executing the average() because this function is on the top of the call stack
// The average() function calls add(). Then the Script engine creates another function execution context for the add() function and places it on the top of the call stack
// The engine executes the add() function and pops it off the call stack
// The average() function is now on the top of the call stack, Script engine executes and pops it off the call stack
// Now the call stack is empty so the script stops executing

// !!! STACK OVERFLOW !!!
// The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js
// If the number of the execution contexts exceeds the size of the stack, a stack overflow error will occur.
// For example, when you execute a "recursive function" that has no exit condition, the Script engine will issue a stack overflow error
/*
function fn() {
  fn();
}
fn(); // stack overflow or Maximum call stack size exceeded!
*/

// !!! ASYNCHRONOUS JAVASCRIPT !!!
// JavaScript is the single threaded programming language
// This means that the JavaScript engine has only one call stack, Therefor it only can do one thing at a time
// When executing a script, the Script engine executes code form top to bottom, line by line. In other words, it is synchronous!
// Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to complete
// For example the JavaScript engine can
// Request for a data from a remove server
// Display a spinner
// When the data is available, display it  on the webpage
// The do this, the Script engine uses a event loop, which will be covered in the next tutorial

// !!! SUMMARY !!!
// JavaScript engine uses a call stack to manage execution contexts
// The calls tack use the stack data structure that works based on the LIFO (last-in first-out) principle!
