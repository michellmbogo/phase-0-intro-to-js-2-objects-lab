// Employee object
const employee = {
    name: "John Doe",
    position: "Software Engineer",
  };
  
  // Non-destructive update: Adds/updates key-value pair and returns a new object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Destructive update: Adds/updates key-value pair in the original object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive delete: Deletes key from a clone and returns a new object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive delete: Deletes key from the original object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
