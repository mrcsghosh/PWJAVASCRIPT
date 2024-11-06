//2. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sorting the array and finding the min and max age
//Here we First Sort the Array
sortedAges = ages.sort(function (a, b) {
  return a - b;
});
// now ages[0] contains the lowest value
const minAge = sortedAges[0];
// and ages[ages.length-1] contains the highest value
const maxAge = sortedAges[sortedAges.length - 1];

//Dsplay sorted min and max ages
console.log("Sorted Ages :", sortedAges);
console.log("Min Age :", minAge);
console.log("Max Age :", maxAge);

//Find the median age(one middle item or two middle items divided by two
let medianAge;
//we Use if for create a condition
if (ages.length % 2 == 0) {
  const mid1 = ages.length / 2 - 1;
  const mid2 = ages.length / 2;
  medianAge = ages[mid1] + ages[mid2] / 2;
} else {
  const mid = Math.floor(ages.length / 2);
  medianAge = ages[mid];
}
//Display median age
console.log("Median Age :", medianAge);

//Find the average age(all items divided by number of items
function getSum(acc, age){
    return acc + age ;
}
const sumOfAges = ages.reduce(getSum, 0);
const averageAge = sumOfAges / ages.length;
console.log("Average Age :", averageAge);

//Here We USe Arrow Function for Average
/*const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;
console.log(averageAge);*/
//Find the range of the ages(maa minus min)
const ageRange = maxAge - minAge;

console.log("Range of the Ages :", ageRange);

//Compare the value of (min - average) and (maa - average), use abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log("Min Average :", minDiff.toFixed(1));
console.log("Max Average :", maxDiff.toFixed(1));


