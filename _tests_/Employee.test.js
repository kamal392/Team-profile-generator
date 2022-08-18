const Employee = require("../lib/Employee");

// testing new object
test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

// Testing name
test("Testing name.", () => {
  const name = "Kamal";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});
// Testing id
test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Kamal", id);
  expect(employeeInstance.id).toBe(id);
});

// testing email
test("Testing email.", () => {
  const email = "kamalpandey@gmail.com";
  const employeeInstance = new Employee("Kamal", 2, email);
  expect(employeeInstance.email).toBe(email);
});

// testing getName()
test("Gets name through getName method.", () => {
  const testName = "Kamal";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

// testing getId()
test("Can test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("Kamal", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

// testing getEmail()
test("Can test email through getEmail method.", () => {
  const testEmail = "kamalpandey@gmail.com";
  const employeeInstance = new Employee("Kamal", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

// Testing role
test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Kamal", 2, "kamalpandey@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
