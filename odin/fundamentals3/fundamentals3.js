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
