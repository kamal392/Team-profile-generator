// My Attempt
const Manager = require("../lib/Manager");

// Testing for office number
test("Can create an office number.", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager("Kamal",2,"kamalpandey@gmail.com",testOfficeNumber);
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

// Testing to confirm office number
test("Testing officeNumber will return office number.", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager("Kamal",2,"kamalpandey@gmail.com",testOfficeNumber );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

// Testing for role
test("Testing role.", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager("Kamal", 2, "kamalpandey@gmail.com", 2);
  expect(employeeInstance.getRole()).toBe(returnValue);
});
