const number1 = 103;
const number2 = 72;
const number3 = 189;

// Write a function called getMax to get the maximum value
const getMax = (a, b, c) => {
  if (a>=b && a>=c) return a;
  else if (b>=c) return b;
  else return c;
}

// Print "The maximum value is __"
console.log(`The maximum value is ${getMax(number1, number2, number3)}`);
