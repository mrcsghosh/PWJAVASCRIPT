/*we define an anonymous function within parentheses and immediately invoke it by adding (7) at the end. The number 7 is passed as an argument to the function, and the square of the number is calculated and displayed using console.log. Replace the 7 with the desired number you want to calculate the square for.
*/
// IIFE to calculate and display the square of a number
let number = 7;
(function exec() {
  //  let number = 5;
    const cube = number**3;
    console.log(`The Cube of ${number} is ${cube}`);
})();
/*So, if you want to use the global variable within the IIFE, you don't need to redeclare it inside the IIFE. If you redeclare it inside the IIFE, it will create a new variable with block scope, and it won't affect the global variable.
*/

//console.log(exec); here we get exec is not defind
 