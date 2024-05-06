const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  age: Number,
  salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

async function createEmployee() {
  const employee = new Employee({
    name: 'Ariel Y',
    department: 'js developer',
    age: 30,
    salary: 25000
  });

  const result = await employee.save();
  console.log(result);
}
async function createEmployees() {
  const employees = [
    { name: 'Avi Cohen', department: 'Sales', age: 45, salary: 12000 },
    { name: 'Dana Levi', department: 'Development', age: 28, salary: 15000 },
    { name: 'Ronnie Levi', department: 'Development', age: 55, salary: 18000 }
  ];

  const result = await Employee.insertMany(employees);
  console.log(result);
}

async function updateEmployeeDepartment(employeeName, newDepartment) {
  const result = await Employee.updateOne({ name: employeeName }, {
    $set: {
      department: newDepartment
    }
  });
  console.log(result);
}

async function removeEmployeesOver50() {
  const result = await Employee.deleteMany({ age: { $gt: 50 } });
  console.log(result);
}

createEmployee();
createEmployees();
updateEmployeeDepartment('Ronnie Levi', 'Marketing');
removeEmployeesOver50();
