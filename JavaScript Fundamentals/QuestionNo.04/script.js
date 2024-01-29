//Write A Function Named extractGroups
function extractGroups(pattern, dateString) {
    // Create a new regular expression object
  const regex = new RegExp(pattern);
  const match = regex.exec(dateString);

  if (match) {
        // Extracted groups using array destructuring starting from index 1
        const [,day, month, year] = match;
             
           return {
            match: true,
            day,
            month,
            year
           };
        } else {
            return{
                match: false
            };
        }
}


// Test the function with a sample date string
const pattern1 = /(\d{2})-(\d{2})-(\d{4})/; // Pattern with groups for day, month, and year
const dateString1 = "01-28-2023";
const result1 = extractGroups(pattern1, dateString1);
console.log("Date String:", dateString1);

if (result1.match) {
    console.log("Match Found !");
    console.log("Day:", result1.day);
    console.log("Month:", result1.month);
    console.log("Year:", result1.year);
} else {
    console.log("No Match Found.");
}

/*const pattern2 = /(\d{4})-(\d{2})-(\d{2})/;
const dateString2 = "08-02-2003";
const result2 = extractGroups(pattern2, dateString2);
console.log("Date String:", dateString2);



if (result2.match) {
    console.log("Match Found !");
    console.log("Day:", result2.day);
    console.log("Month:", result2.month);
    console.log("Year:", result2.year);
} else {
    console.log("No Match Found.");
}
*/