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
