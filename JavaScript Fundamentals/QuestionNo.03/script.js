//write A Function Named as searchCharacterClass
function searchCharacterClass(inputString) {
     // Matches digits
    const digitPattern = /\d/g;  
    // Matches uppercase letters
    const uppercasePattern = /[A-Z]/g; 
     // Matches lowercase letters
    const lowercasePattern = /[a-z]/g;
     // Matches special characters
    const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g; 
  

    const digitMatches = inputString.match(digitPattern) || [];
    const uppercaseMatches = inputString.match(uppercasePattern) || [];
    const lowercaseMatches = inputString.match(lowercasePattern) || [];
    const specialCharMatches = inputString.match(specialCharPattern) || [];

    return {
        digits: digitMatches,
        uppercase: uppercaseMatches,
        lowercase: lowercaseMatches,
        specialChar: specialCharMatches

    };
  
}

// Test the function with a sample string
const sampleString = "Hello MrCS ! 143 @#$";
const result = searchCharacterClass(sampleString);

console.log("sampleString:", sampleString);//For sampleString
console.log("Digits:", result.digits); //For Digits
console.log("Uppercase Letters:", result.uppercase); //For UpperCase Letters
console.log("Lowercase Letters:", result.lowercase); //For LowerCase Letters
console.log("Special Characters:", result.specialChar);// For Special Characters