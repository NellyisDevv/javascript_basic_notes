// !!! FUNCTION EXPRESSIONS !!!
// The syntax that we used before is called a Function Declaration
function sayHi() {
  alert('Hello');
}
// There is another syntax for creating a function that is called a Function Expression
// It allow us to make new functions in the middle of any expression
let sayHii = function () {
  alert('Hello');
};
// Here we can see a variable sayHi getting a value, the new function, created as function() { alert('Hello');}
// as the function creation happens in the context of the assignment expression (to the right side of =) this is a Function Expression
// Note that there's no name after the function keyword. Omitting a name is allowed for Function Expressions
// In this example we immediately assign it to the variable, so the meaning of these code samples is the same as saying
// Create a function and put it into the variable sayHi
// In more advanced situations a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous

// !!! FUNCTION IS A VALUE !!!
// All functions are values
// We can copy a function to another variable like this
function sayHiya() {
  // (1) create
  alert('Hello');
}
let func = sayHiya; // (2) copy
// func(); // Hello
// sayHiya(); // Hello
// when you run the copy it still works!
// In step (1) the function declaration creates the function and puts it into the variable named sayHiya
// In step 2 it copies it into the variable func. Note there is no parentheses after sayHiya if there were then func = sayHiya() would writer the result of the call sayHiya() into func, not the function sayHiya itself.
// In step 3 the function can bee called as both sayHi() and func()
// We could also have used a Function Expression to declare sayHiyaa, in the first line
let sayHiyaa = function () {
  alert('Hello');
};
let funcc = sayHiyaa;
// Either way it works the same

// !!! CALLBACK FUNCTIONS !!!
// Examples of passing functions as values and using function expressions
// We'll write a function ask(question, yea, no) with three parameters
// question, Text of the question
// yes, function to run if the answer is "yes"
// no, function to run if the answer is "no"
// The function should ask the question and depending on the user's answer, call yes() or no()
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert('You agreed.');
}
function showCancel() {
  alert('You canceled the execution.');
}
ask('Do you agree?', showOk, showCancel);
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.
// The idea is that we pass a function and expect it to be "called back" later if necessary.
// In our case, showOk becomes the callback for "yes" answer, and showCancel for "no" answer.
// We can use Function Expressions to write the same function much shorter
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
// Important note remember to always include the , symbol between each argument
ask(
  'Do you agree?',
  function () {
    alert('You agreed.');
  },
  function () {
    alert('You canceled the execution.');
  }
);
// Here functions are declared right inside the ask(...) call
// They have no name, and so are called anonymous!
// Such functions are not accessible outside of ask (because they are not assigned to variables), but that's just what we want in this example

// !!! FUNCTION EXPRESSION VS FUNCTION DECLARATION !!!
// A function, declared as a separate statement, in the main code flow.
function sum(a, b) {
  return a + b;
}
// A function expression is created inside an expression or inside another syntax construct. Here, the function is created at the right side of the "assignment expression"
let summ = function (a, b) {
  return a + b;
};
// Function declarations can be called earlier than it is defined while Function Expressions can't because it's execution flow passes to right ride side of the assignment
// Function Expressions are created when the execution reaches them
let age = prompt('What is your age?');
let welcome;
if (age < 18) {
  welcome = function () {
    alert('Hello!');
  };
} else {
  welcome = function () {
    alert('Greetings!');
  };
}
welcome();
// We could even simplify this code even more by using the (?) operator
let years = prompt('What is your age?');
let welcomeHome =
  age < 18
    ? function () {
        alert('Hello!');
      }
    : function () {
        alert('Greetings!');
      };
welcome();
// Although the logic on this one is a bit harder for me to understand because I still am not sure what the (?) operator fully means
// When to choose Function Declaration versus Function Expression?
/*
1. When we need to declare a function, the first to consider is Function
Declaration syntax. It gives more freedom in how to organize the code.
2. Function Declaration is also better for readability, and it's easier
to look up.
3. But if a Function Declaration does not suit us for some reason, or
we need a conditional declaration, then Function Expression should be
used.
*/
