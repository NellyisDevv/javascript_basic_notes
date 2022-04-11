const input = document.querySelector('.numberInput'); // This is selecting the input HTML element
const para = document.querySelector('p'); // This is selecting the <p> tag HTML element
function squared(num) {
  // squared is the function!
  return num * num; // It takes the "num" and multiplies the num once with itself thats what squared means
}
function cubed(num) {
  // cubed is the function and it takes the num
  return num * num * num; // It takes the "num" and multiplies it with itself three times thats what cubed means
}
function factorial(num) {
  // factorial is the function and it takes the "num"
  if (num < 0) return undefined; // if 0 is greater than the "num" inputted return it as "undefined"
  if (num == 0) return 1; // if "num" inputted is equal to 0 return "1"
  let x = num - 1; // declare a new variable "x" which equals the "num" inputted minus 1
  while (x > 1) {
    // While "x" is greater than 1
    num *= x; // Take the "num" and multiply it with "x" again
    x--; // this is a postfix decrement!
  }
  return num;
}
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
