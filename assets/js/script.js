// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Function to collect employee names and salary
// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt('Enter employee First Name: ');
    const lastName = prompt('Enter employee Last Name: ');
    const salary = Number(prompt('Enter Salary: '));
   
if (isNaN(Number(salary))) {
  salary = 0;
}

employeesArray.push({
  firstName: firstName,
  lastName: lastName,
  salary: Number(salary)
});

const addAnother = confirm('Would you like to add another Employee? ');
if (!addAnother) {
  addEmployee = false;
}
}

return employeesArray;
}

  // Function to display the average salary
  // TODO: Calculate and display the average salary
   function displayAverageSalary(employees) {
    let totalSalary = 0;
    employees.forEach(function (employee){
        totalSalary += employee.salary;
    });

    const averageSalary = totalSalary / employees.length;

    console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employees.length} employees.`); 
  }
/* } */


    // Function to select a random employee
    // TODO: Select and display a random employee
   function getRandomEmployee(employees) { 
    // Generate a random index within the range of the employees array
    const randomIndex = Math.floor(Math.random() * employees.length);

    // Select a random employee from the array based on the random index
    const randomEmployee = employees[randomIndex];

    // Log the full name of the randomly selected employee to the console
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
/* } */
} 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

 const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
} 

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
