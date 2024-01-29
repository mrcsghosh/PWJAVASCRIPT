/*the factorial function is defined with a base case for when n is 0 or 1, where the factorial is 1. For other values of n, the function calls itself recursively with n - 1. The results for different inputs are displayed using console.log. Adjust the input1, input2, and input3 values as needed for testing with different inputs.
*/
//Write a Function Name factorial()
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }

}

// Test the factorial function with different inputs
const inputNumber = 3;
console.log(`The Factorial of ${inputNumber}, is: ${factorial(inputNumber)}`);

const inputNumber1 = 0;
console.log(`The Factorial of ${inputNumber1}, is: ${factorial(inputNumber1)}`);

const inputNumber2 = 5;
console.log(`The Factorial of ${inputNumber2}, is: ${factorial(inputNumber2)}`);