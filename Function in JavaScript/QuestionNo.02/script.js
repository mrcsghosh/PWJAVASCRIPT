/*the generateGreeting function takes a name parameter and returns a personalized greeting using template literals. The function is then called three times with different names (Alice, Bob, and Charlie), and the greetings are displayed using console.log.
*/
//Write a Function to generate a personalized greeting
function generateGreeting(name){
  //body code
    return (`Hello ${name} Welcome to Our Room`);
}

// Greet three different people
const friend1 = "ChandraShekhar Ghosh"
const friend2 = "Hemant Vijawat"
const friend3 = "HarshWardhan Singh Chawda"


// Print the greeting messages using console.log
console.log(generateGreeting(friend1));
console.log(generateGreeting(friend2));
console.log(generateGreeting(friend3));

//generateGreeting();


