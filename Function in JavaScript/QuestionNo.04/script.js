/*the calculateTax function returns an inner function as a closure that calculates the tax based on the provided income and the specified tax rate ranges. The closure function is then assigned to the variable calculateTaxForIncome, which can be used to calculate taxes for different incomes. The results are displayed using console.log for various income scenarios. Adjust the income values as needed for testing.
 */

//Write a function named calculatetax
function calculateTax() {
  // Tax rate ranges and corresponding functions
  const taxRanges = [
    { min: 0, max: 10000, rate: 0.1 },
    { min: 10001, max: 50000, rate: 0.25 },
    { min: 50001, max: 100000, rate: 0.50 },
    { min: 100001, max: 150000, rate: 0.75 },
  ];

  // Closure function to calculate tax based on income
  return function (income) {
    for (const range of taxRanges) {
      if (income >= range.min && income <= range.max) {
        return income * range.rate;
      }
    }
  };
}



// Test the calculateTax function with various incomes
const calculateTaxForIncome = calculateTax();

//Here we Declare income and tax and get the payable tax
const income1 = 8000;
const tax1 = calculateTaxForIncome(income1)
console.log(`For An Income of ${income1}, the Tax to be paid is ${tax1}`);

const income2 = 28000;
const tax2 = calculateTaxForIncome(income2)
console.log(`For An Income of ${income2}, the Tax to be paid is ${tax2}`);

const income3 = 88000;
const tax3 = calculateTaxForIncome(income3)
console.log(`For An Income of ${income3}, the Tax to be paid is ${tax3}`);

const income4 = 128000;
const tax4 = calculateTaxForIncome(income4)
console.log(`For An Income of ${income4}, the Tax to be paid is ${tax4}`);

