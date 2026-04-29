export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    // méthode qui compte le nombre de départements
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
