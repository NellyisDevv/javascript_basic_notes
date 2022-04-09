// This contains two functions called a() and b()
// Two of which are defined inside functions "(a() and b()) are contained inside functions"
// And one in the global scope "(x) is inside the global scope" meaning its outside of a function
// This also contains a third function called output(), which takes a single parameter and outputs it in a paragraph on the page!
const x = 1;

function a() {
  const y = 2;
  output(y); // THIS WAS ADDED IN DURING STEP 6!
}

function b() {
  const z = 3;
  output(z); // THIS WAS ADDING IN DURING STEP 6!
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}
/*
1. Open the example in a browser and in the text editor
2. Open the JavaScript console in the browser and enter the command
output(x); // you should see the value of variable x printed to the
browser viewport and it should display "Value: 1"
3. Next do output(y); and output(z); and log what happens next.
4. It should throw an error into the console, This is because y and z
are locked inside the a() and b() functions, so output() can't access
them when called from the global scope!
5. This is why output(x); works because it is inside the global scope
and not inside a function!
6. a() and b() functions have been edited to show output(y); and
output(z);
7. Now go into the console log and enter a(); and b(); what do you
see?
8. You should now be able to see the y and z values printed on the 
screen. Because the output() function is being called inside the 
other functions in the same scope as the variables it is printing 
are defined in, in both cases. output() itself is available from
anywhere, as it is defined in the global scope!
9. function a() {
  const y = 2;
  output(x);
}

function b() {
  const z = 3;
  output(x);
}
10. both a() and b() should print the value of x to the screen, these
work because even though output() calls are not in the same scope as x
is defined in, x is a global variable so is available inside all code
11. function a() {
  const y = 2;
  output(z);
}

function b() {
  const z = 3;
  output(y);
}
12. If you do this you will get an error! This is because the output()
calls and the variables they are trying to print are not in the same
function scopes, meaning the variables are effectively invisible to those
function calls!
*/
