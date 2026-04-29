import getFullBudget from './9-getFullBudget.js';

const fullBudget = getFullBudget(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
