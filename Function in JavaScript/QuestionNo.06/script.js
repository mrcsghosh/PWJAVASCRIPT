/* the curry function takes a function fn as an argument and returns a new curried function. The curried function keeps track of the arguments received so far, and if all arguments are provided, it executes the original function (fn). If not all arguments are provided, it returns a new curried function. The curriedAdd function is then tested with various usage scenarios. Adjust the add function or test cases as needed.
*/

//write a Function Named curry
function curry(fn) {
    return function curried(...args){
        if (args.length >= fn.length) {
                        // If all arguments are provided, execute the original function

            return fn(...args);
        } else {
                        // If not all arguments are provided, return a new curried function
            return function(...moreArgs){
                return curried(...args, ...moreArgs);
            };

        }
    };
}

// Test the curry function with a function that adds two numbers
const add = (a, b) => a + b;

const curriedAdd = curry(add);

// Using the curried function
const sumofTwoNumber = curriedAdd(3)(4);
console.log(`Result 1 : ${sumofTwoNumber}`);

// Another way to use the curried function
const sumofTwoNumber1 = curriedAdd(2,3);
console.log(`Result 2 : ${sumofTwoNumber1}`);

// Fully providing all arguments at once
const sumofTwoNumber2 = curriedAdd(1,3,5,7); 
console.log(`Result 3 : ${sumofTwoNumber2}`);//(ignores the third and other argument because of length)