/*Loops :-  in programming are control flow structures that allow a certain block of code to be executed repeatedly until a specified condition is met. Loops are essential for automating repetitive tasks, iterating over collections of data, and performing computations. They help in making code more concise, readable, and efficient.
*/

/*for Loop :- It's useful when the number of iterations is known before entering the loop. It typically has an initialization step, a condition for continuation, and an iteration step.
*/
//syntax :- 
/*for(Declaration/initialization; condition; iteration){
    //body or code to be executed
}*/
//Example :- 
for (let userScore = 0; userScore <= 10; userScore++) {
        console.log(userScore);    
}

/*while Loop :- It's useful when the number of iterations is not known beforehand, and the loop continues as long as a specified condition is true.
*/
//syntax :-
/*while (condition) {
    //body code
    //output
    //iteration
}*/
//Example :-
let userAge = 35;
const maxUserAge = 60;

while (userAge <= 60) {
    console.log(userAge);
    userAge++;
}

/*do-while Loop :- Similar to a while loop, but it guarantees that the code inside the loop is executed at least once before checking the condition.
*/
//Syntax :- 
/*do {
    //body code
    //output
    //iteration
} while (condition);*/
//Example :- 
let userAnswer = "135";

do {
    console.log("Current user answer:", userAnswer);
    userAnswer = String(Number(userAnswer) + 1);
} while (userAnswer !== "143");

console.log("I Love You !");
