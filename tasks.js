//Task 1
const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) return string.length;
  throw new Error('Invalid string length');
};

//Task 2
const reverseString = (string) => string.split('').reverse().join('');

//Task 3
class Calculator {
 
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  mult(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if(num2===0) throw new Error('Division by 0 not allowed');
    return num1 / num2;
  }

}

const capitalize = string => string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
module.exports = { stringLength, reverseString, Calculator,capitalize };
