function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

// computed property : clé dynamique calculée entre []
export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
