const Intern = require("../lib/Intern");

// testing to create school 
test("Can create school.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern( "Kamal",2,"kamalpandey@gmail.com",testSchool);
  expect(employeeInstance.school).toBe(testSchool);
});

// testing for office number
test("Testing officeNumber will return office number.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern("Kamal",2,"kamalpandey@gmail.com",testSchool);
  expect(employeeInstance.getSchool()).toBe(testSchool);});

//   testing for role
test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Kamal",2,"kamalpandey@gmail.com","School Name");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
