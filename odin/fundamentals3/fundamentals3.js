// !!! FUNCTIONS !!!
/*
A function allows you to store a piece of code that does a single
task inside a defined block, then call that code whenever you need
it using a single short command, Rather than having to type out the
code every single time!
*/
// Functions are anything with the () symbol after it
// Meaning we have been using functions this entire time
// Example of a function is "myText.replace('string', 'sausage')"

// !!! BUILT-IN BROWSER FUNCTIONS !!!
// ARRAYS
// Below is something you haven't gone over yet arrays!
// Look at how the array works and just keep it in mind
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// RANDOM NUMBER GENERATOR
const myNumber = Math.random();
console.log(myNumber);

// !!! FUNCTIONS VERSUS METHODS !!!
// When you make a function it has the () symbol after it
/*
The purpose of a function is to only have to write a line of code 
once and then after be able to call the code through a function
without having to write out the entire execution again!
*/
// You can even call other functions from inside functions
// EXAMPLE OF A FUNCTION (Note you dont need to fully understand now)
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
// Math.random() function only generates a random decimal number between 0 and 1
// We want a random whole number between 0 and a specified number

// !!! INVOKING FUNCTIONS !!!
// To actually use a function after it's been defined, you've got to run - or invoke - it.
// This is done by including the name of the function in the code somewhere, followed by parentheses
// Example of invoking a function
function myFunction() {
  console.log('Im a Function!');
}
// Example of calling the function once!
myFunction();

// !!! FUNCTION PARAMETERS !!!
// Some functions require parameters to be specified when you are invoking them
// these are values that need to be included inside the function parentheses, which it needs to do it's job properly
// Parameters are sometimes called arguments, properties, or attributes.
// The browser's built-in string replace() needs two parameters
// First the substring to find the main string
// Then the substring to replace that string with
const myText = 'I am a string';
const newString = myText.replace('string', 'yarn');
console.log(newString);
// OPTIONAL PARAMETERS
// Are parameters that are optional meaning you don't have to specify them.
// If you dont the function will generally adopt some kind of default behavior
// EXAMPLE can be the array join() function's parameter is optional
const myArrayy = ['I', 'love', 'chocolate', 'frogs'];
const madeString = myArrayy.join(' ');
console.log(madeString); // returns 'I love chocolate frogs'
// if no parameter is included to specify a joining/delimiting character, a comma is used by default
const MadeAnotherString = myArray.join();
console.log(MadeAnotherString);
// DEFAULT PARAMETERS
// you can specify default values by adding = after the name of the parameter, followed by the default value
function hello(name = 'Christ') {
  console.log(`Hello Welcome Back, ${name}!`);
}
hello('Ari'); // Hello Ari
hello(); // Hello Christ
hello('Saul');
// EXAMPLE OF CREATING A FUNCTION
function coolFunction(name = '') {
  console.log(`Hello how are you ${name}?`);
}
coolFunction('Nelly');
coolFunction('did you just build another function');
// ANONYMOUS FUNCTIONS AND ARROW FUNCTIONS
// an anonymous function is a function without a name
// you will often see this when a function expects to receive another function as a parameter
// EXAMPLE
/*
1. Let's say you want to run some code when the user types
into a text box.
2. To do this you can call the addEventListener() function
This function expects you to pass it (at least) two parameters.
3. The name of the event to listen for, which in this case is "keydown"
4. And a function to run when the event happens
*/
/*
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener('keydown', logKey);
*/
// Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener()
/*
textBox.addEventListener('keydown', function (event) {
  console.log(`You pressed "${event.key}".`);
});
*/
// ARROW FUNCTIONS
// If you pass an anonymous function there is an alternative from you can use.
// called an arrow function, instead of function(event), you write (event) =>
/*
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
*/
// If the function only has one line in the curly brackets, you omit the curly brackets
/*
textBox.addEventListener('keydown', (event) =>
  console.log(`You pressed "${event.key}".`)
);
*/
// If the function only takes one parameter, you can also omit the brackets around the parameter
/*
textBox.addEventListener('keydown', (event) =>
  console.log(`You pressed "${event.key}".`)
);
*/
// If your function needs to return a value, and contains only one line, you can omit the return statement
// In this example we are using the map() method of Array to double every value in the original array
const originals = [1, 2, 3];
const doubled = originals.map((item) => item * 2);
console.log(doubled); // console log shows [2, 4, 6]
// The map() takes each item in the array in turn, passes it through the given function. Then takes the value returned by that function and adds it to a new array!
// So in the example above, item => item * 2 is the arrow function equivalent of
function doubleItem(item) {
  return item * 2;
}
// Use arrow functions, as they can make your code shorter and more readable!

// !!! ARROW FUNCTION LIVE SAMPLE !!!
// This is an example of the "keydown" example we learned about
/*
const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener(
  'keydown',
  (event) => (output.textContent = `You pressed "${event.key}".`)
);
*/
// !!! FUNCTION SCOPE AND CONFLICTS !!!
/*
1. When you create a function, the variables and other things
defined inside the function are inside their own scope.
2. This means they are locked away in their own separate
compartments, unreachable from code outside the functions
*/
// The top level outside all your functions is called the global scope.
// Values defined in the global scope are accessible from everywhere in the code.
/*
Script does this for various reasons
1. security and organization
2. Sometimes, you don't want variables to be accessible
from everywhere in the code.
*/
/*
1. Imagine you have an HTML file calling in two external JAVASCRIPT
files, and both of them have a variable and a function defined that
use the same name.
2. If you wanted to call this function it will only get the function
from the first javascript file but not the second. This is because 
that function has already been declared in the first file. If this 
function is a constant it can't be reassigned!
3. keeping parts of your code locked away in functions avoids such
problems, and is considered the best practice.
*/
// function scopes should have there own enclosures and only have access to the things inside their enclosures!

// !!! GOTO FUNCTION SCOPE JS PRACTICE !!!

// !!! ANOTHER EXAMPLE OF PLAYING WITH FUNCTIONS !!!
function favoriteAnimal(animal) {
  console.log(animal + 'is my favorite animal!');
}
favoriteAnimal('The goat ');
favoriteAnimal('The panda ');

// !!! FUNCTION RETURN VALUES !!!
// The last essential concept about functions are return values
// Some functions don't return significant value's but others do

// !!! WHAT ARE RETURN VALUES? !!!
// Return values are just values that a function returns when it has completed
// We have also seen return values many times across these lessons
// EXAMPLE
const textMessage = 'The weather is cold';
const newMessage = textMessage.replace('cold', 'warm');
console.log(newMessage); // console log shows "The weather is warm"
// The replace() string function takes a string
// replaces one substring with another, and returns a new string with the replacement made
// replace() function is invoked on the textMessage string, and is passed two parameters
// 1. the substring to find ('cold')
// 2. the string to replace it with ('warm')
// Some functions don't return any value these are void or undefined values

// !!! USING RETURN VALUES IN YOUR OWN FUNCTIONS !!!
// To return a value from a custom function, you need to use the "return" keyword
// The random() function takes one parameter (a whole number) and it returns a whole random number between 0 and that number
function random(number) {
  return Math.floor(Math.random() * number);
}
// This could be written as follows
function random(numberr) {
  const result = math.floor(Math.randon() * numberr);
  return result; // here return is written at the end its much faster to do it the first way than this way!
}
// The function calls on the line are run first
// then their return values substituted for the function calls, before the line itself is then executed

// !!! GOTO ACTIVE LEARNING FUNCTION-LIBRARY !!!

// !!! PARAMETERS AND ARGUMENTS !!!
function myFavoriteAnimal(animal) {
  console.log(animal + ' is my favorite animal!');
}
myFavoriteAnimal('Dove');
myFavoriteAnimal('Leviathan');
// Parameters are the items listen between the parentheses in the function declaration in this case th parameter is (animal)
// The parameter animal can be named anything like x, pet, or blah but its better to name it animal so that someone reading the code has context
// By doing myFavoriteAnimal() we are telling JavaScript that we ill send some value to that function
// This means that animal is just a placeholder for some future value
// In this example its a placeholder for myFavoriteAnimal('Dove')
// We are calling the myFavoriteAnimal function and passing the value Dove inside the function.
// Dove is out argument
// "Please send 'Dove" to the myFavoriteAnimal function and use 'Dove' wherever the 'animal' placeholder is."
// Because parameter is flexible you can declare any animal to be out favorite. For example, leviathan!

// !!! FUNCTIONS !!!
// Functions are the main "building bocks" of the program They allow the code to be called many times without repetition
// We have already seen build in functions like alert(message), prompt(message, default)m and confirm(question)
function showMessage() {
  alert('Hello Everyone!');
}
// If we ever need to do the task showMessage() we don't have to duplicate the code instead we can just call the function
// showMessage()

// !!! LOCAL VARIABLES !!!
// A variable declared inside a function is only visible inside that function
function anotherMessage() {
  let message = "Hello, I'm JavaScript"; // local variable and not global meaning it can only be seen by this function!
  alert(message);
}
// anotherMessage(); Displays "Hello, I'm JavaScript!"
// alert(message); Shows an error because the variable is only local to the function

// !!! OUTER VARIABLES !!!
let userName = 'Christ';
function userMessage() {
  let task = 'Hello, ' + userName;
  alert(task);
}
// show userMessage() Hello, Christ
// The function has full access to the outer variable meaning it can modify it as well
function userMessage2() {
  userName = 'John'; // (1) changed the outer variable
  let task = 'Hello, ' + userName;
  alert(task);
}
// alert(username); It's declared in the global as "Christ"
// userMessage2(); Will show "Hello, John"
// The outer variable is only used if there's no local one
// If a same-named variable is declared inside the function then it shadows the outer one
// In this example below the function uses the local userName, the outer one is ignored
function userMessage3() {
  let userName = 'Zoar'; // declare a local variable
  let task = 'Hello, ' + userName;
  alert(task);
}
// userMessage3() shows "Hello, Zoar"
// the userName is still 'Christ' because userName 'Zoar' was declared only locally and not globally!

// !!! PARAMETERS !!!
// We can pass arbitrary data to functions using parameters
// In the example below, the function as two parameters "from" and "text"
function displayMessage(from, text) {
  alert(from + ': ' + text); // these two parameters can be changed! the ': ' just means that there are two empty strings!
}
function showMessage(from, text) {
  // parameters: from, text
  alert(from + ': ' + text);
}

// showMessage('Solomon', 'Hello!'); // Solomon: Hello! (*)
// showMessage('Solomon', "What's up?"); // Solomon: What's up? (**)
// showMessage('Christ', 'The Savior!');
// When a function is called in lines (*) (**) the given values are copied to local values, then the functions use them.
let person; // This string is undefined or null because it has nothing in it and I want to pass information through it!
function viewWork(from, text) {
  let person = 'Matthew'; // Matthew is a variable declared locally meaning it can't be used anywhere else but inside of this function
  person = '*' + person + '*'; // Make from look nicer!
  alert(person + ': ' + text); // alert person which is (Matthew) + ': ' which is empty string + text which is defined when declaring this function
}
// viewWork(person, 'Hello!'); // person is already defined as (Matthew), "Hello!" is the text and will go inside of the empty string ': '
// viewWork(person, 'You are awesome') // displays Matthew, You are awesome
// When a value is passed through a function it is also called an argument
/*
1. A parameter is the variable listed inside the parentheses in the
function declaration. (it's a declaration time term)
2. An argument is the value that is passed to the function when
it is called. (it's a call time term)
*/
// We declare functions listing their parameters, then call them passing arguments
// In the example above the function "viewWork" is the function
// Then the two arguments: from and 'You are awesome'

// !!! DEFAULT VALUES !!!
// If a function is called, but an argument is not provided, then the corresponding value becomes "undefined"
// For instance viewMessage(from, text) can be called with a single argument
// viewWork(); has no arguments going through the function so it will just display  *Matthew*: undefined because the argument is not defined!
// the value that is not defined above is the "text"
// We can specify the "default" (to use if omitted) value for a parameter in the function declaration, using =
function anotherMessage(person, text = 'no text was given!') {
  person = 'Elizabeth';
  alert(person + ': ' + text);
}
// anotherMessage(); // Elizabeth: no text was given!
/* in the example above 'no text was given!' is a string, but it can
be a more complex expression, which is only evaluated and assigned
if the parameter is missing. This is possible.
*/
/*
function anotherMessage(person, text = anotherFunction()) {
 anotherFunction() is only executed if no text is given!
 its results becomes the value of the text
}
*/
// In the example above, anotherFunction() isn't called if the text parameter is provided
// ALTERNATIVE DEFAULT PARAMETERS
// Sometimes it makes sense to assign default values for parameters not in the function declaration, but at a later stage
// we can check if the parameter is passed during the function execution, by comparing it with undefined
function revealMessage(text) {
  // ...
  if (text === undefined) {
    // if the parameter is missing
    text = 'empty message';
  }
  alert(text);
}
// revealMessage(); this will alert "empty message"
// But we can also use the || (OR) operator
function showMyMessage(text) {
  // if the text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  alert(text);
}
// showMyMessage(); will display "empty"
// Modern JavaScript engines support the "nullish coalescing operator" (??), it's better when most values are falsy, such as 0
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? 'unkown');
}
// showCount(0); will display 0
// showCount(null); will display "unkown" because its a null!
// showCount(); will display "unknown" because its an empty string or "undefined"

// !!! RETURNING A VALUE !!!
// A function can return a value back into the calling code as the result
// Example of a function that sums two values
function sum(a, b) {
  return a + b;
}
let result = sum(3, 2); // changing these two numbers will change the result right now the result is 5 because 3 + 2 is equal to 5
// alert(result); // 5
// return can be in any place of the function, but when the execution reaches it the function will stop
// the value is then returned to the calling code (assigned to result above)
// There may be occurrences of return in a single function for example
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
let age = prompt('How old are you?');
if (checkAge()) {
  alert('Access granted');
} else {
  alert('Acess denied');
}
// note with the code above there is a minor issue!
/*
the program asks what age you are and if you put 18 it will still
ask if you have permission from your parents the same will happen if 
you put your age as 120 years old!
*/
// its also possible to return without a value. That causes the function to exit immediately
function showMovie(age) {
  if (!checkAge(age)) return;
}
alert('showing you the movie');
// in the code above if checkAge(age) returns false, then showMovie won't proceed to the alert
// A function with an empty return or without it returns undefined
// If a function does not return a value, it is the same as if it returns undefined
function doNothing() {
  /* empty */
}
// alert(doNothing() === undefined); // true
// An empty return is also the same as return undefined
function doNothing() {
  return;
}
// alert(doNothing() === undefined); // is also true!
// Remember never add a newline between return and the value
// if you have a long return value you should start it at the same line as return or at least put the opening parentheses there as follows
/*
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
)
*/
// This long return value will work just as we expect it to

/// !!! NAMING A FUNCTION !!!
// Functions are actions. So their name is usually a verb
// It should be brief, as accurate as possible and describe what the function does
// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action
// there must be an agreement within the team on the meaning of prefixes
// for instance functions that start with "show" usually show something
/*
Function starting with...
"get..." - return a value
"calc..." - calculate something
"create..." - create something
"check..." - check something and return a boolean
*/
/*
showMessage(..) // shows a message
getAge (..) // returns the age (gets it somehow)
calcSum(..) // calculates a sum and returns the result
createForm(..) // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
*/
// A function should do exactly what is suggested by its name, no more!
// Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two)
// Common examples of breaking this rule
/*
getAge - would be bad if it shows an alert with the age (should only get)
createForm - would be bad if it modifies the document, adding a form to it (should only create uit and return)
checkPermission - would be bad if it displays the access granted/denied message (should only perform the check and return the result)
*/
// Sometimes functions that are used very often have ultrashort names
// for example in jQuery framework it defines a function with $. The Loadash library has its core function named _

// !!! FUNCTIONS == COMMENTS !!!
// Functions should be short and do exactly one thing!
// if that thing is big, maybe it's worth to split the function into a few smaller functions.
// Sometimes following this rule may not be that easy, but it's definitely a good thing.
// A separate function is not only easier to test and debug it's very existence is a great comment!
// Compare the two functions below showPrimes(n) Each one outputs prime numbers up to n.
// First variant
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i); // a prime
  }
}
// The second variant uses an additional function isPrime(n) to test for primality
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
/*
The second variant should be easier to understand. Instead of the code
piece we see a name of an action (isPrime) Sometimes people refer to 
such code as self-describing.
So functions can be created even if we don't intend to reuse them.
they basically structure the code and make it more readable.
*/

// !!! TASKS !!!
// Is there a difference between these two examples if "else" is removed?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parent allow you?');
  }
}
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parent allow you?');
}
// There is no difference in behavior between these two examples!
// The only difference I can see is that the function with else included is a bit easier to read in my opinion but the second one is shorter!
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parent allow you?');
  }
}
// Rewrite this to perform the same, but without if, in a single line
// make two variants one using the (?) operator
// and another using the OR || operator
// This first example is using the (?) operator
function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}
// This second example is using the (||) OR operator
function checkAge(age) {
  return age > 18 || confirm('Did parents allow you?'); // this is saying return age that is higher than 18 OR confirm "Did parents allow you?"
}
// The second way is the shortest way to write this out
// Write a function min(a,b) which returns the least of two numbers a and b
/*
for instance 
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/
// This first solution is using (if)
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// This second solution is using the (?) operator
function min(a, b) {
  return a < b ? a : b;
}
// I am not sure what the (?) operator means I need to research what it does again

// !!! FOLLOW TO THE FUNDAMENTS 3 PART 2 FILE !!!
