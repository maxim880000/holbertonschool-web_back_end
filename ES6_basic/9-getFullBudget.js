import getBudgetObject from './7-getBudgetObject.js';

// méthodes ES6 : sans le mot "function"
export default function getFullBudget(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
