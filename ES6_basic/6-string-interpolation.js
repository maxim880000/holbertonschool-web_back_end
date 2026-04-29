// template literals : `texte ${variable}` au lieu de "texte " + variable
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it is estimated that ${budget.income} was the median household income for San Francisco residents. In terms of GDP, San Francisco rosses ${budget.gdp}. San Francisco's GDP per capita is ${budget.capita}.`;
}
