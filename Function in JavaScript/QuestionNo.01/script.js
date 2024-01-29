/* the square arrow function takes a number as an argument and returns its square. The inputNumber variable is set to 5, and then the result of calling the square function with inputNumber is displayed using console.log.
 */
//Here we defind num as value 
let num = 2;
//it is normal function for calculate a square of a num
function process() {
  const result = num * num;
  return result;
}
result = process(num);
console.log(`Square of ${num}, is ${result}`);


// Arrow function to calculate the square of a number
const square = (number) => number * number;

let number = 5;
const result1 = square(number);

console.log("Square of", number, "is", result1);


