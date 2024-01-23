//here we use conditional satatements and syntax

/*Conditional statements:-  in programming are used to make decisions based on certain conditions. These statements allow the program to execute different blocks of code depending on whether a specified condition evaluates to true or false. Conditional statements are crucial for controlling the flow of a program and implementing logic.

//types of conditional statements:-
There are primarily two types of conditional statements: if statements and switch statements. 
*/
//syntax for conditional statements
//if statement
/*if (condition) {
    
}

//switch case
switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/


//here we defind the value for use if and switch conditions

/*Here, I'll explain the if statement, which is one of the most fundamental conditional constructs. 
In this example:

The if statement checks if the temperature is less than 30, and if true, it prints "It's very Cold Outside!"
The else if statement checks if the temperature is between 20 and 30 (inclusive) and prints "Enjot the Weather" if true.
The else statement covers any other case and prints "It's very Hot outside."
*/

let temperature = 15
//example of if conditional function or method

if (temperature < 30) {
  if (temperature >= 20 && temperature <= 30) {
    console.log("Enjoy the weather!");
  } else {
    console.log("it's very Cold Outside ");
  }
} else {
  console.log("it's very Hot Outside");
}

//Example of Switch case Function or method
let isRaining = false;
let isCold = true;

switch (true) {
  case isRaining && isCold:
    console.log("Don't forget your umbrella and coat!");
    break;
  case isRaining:
    console.log("You might need an umbrella.");
    break;
  default:
    console.log("Enjoy the weather!");
    break;
}
