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
console.log(madeString); // returns 'I love chocolate frongs'
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
let from = 'Samuel';
let text = "What's up?";
function displayMessage(from, text) {
  alert(from + ': ' + text);
}
function showMessage(from, text) {
  // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
