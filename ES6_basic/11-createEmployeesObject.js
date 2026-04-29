// [departmentName] = clé dynamique (computed property)
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
