//write a Function Named as isMetch 
function isMatch(pattern, inputString){
// Create a new regular expression object
const regex = new RegExp(pattern);//write a new 
    // Use the test method to check for a match
return regex.test(inputString);
}

// Test the function with various patterns and strings
const pattern1 = /[a-z]+/;//Matches one or More Lowercase Letters
const string1 = "Hello MrCS.";
console.log(`Pattern : ${pattern1}, String : ${string1}, is Match : ${isMatch(pattern1, string1)}`);

const pattern2 = /^\d{3}-\d{2}-\d{4}$/; //Matches social security number patter (###-##-####)
const string2 = "123-45-67890";
console.log(`Pattern : ${pattern2}, String : ${string2}, is Match : ${isMatch(pattern2, string2)}`);

const pattern3 = /[A-Z]/;//Matches UpperCase Letters
const string3 = "LowerCase";
console.log(`Pattern : ${pattern3}, String : ${string3}, is Match : ${isMatch(pattern3, string3)}`);

const pattern4 = /\d+/;  // Matches one or more digits
const string4 = "123abc";
console.log(`Pattern : ${pattern4}, String : ${string4}, is Match : ${isMatch(pattern4, string4)}`);