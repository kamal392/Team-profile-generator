const Engineer = require("../lib/Engineer");

// Testing for Creating github
test("Can create a github.", () => {
  const testGithub = "Kamalpandey";
  const employeeInstance = new Engineer("Kamal",2,"kamalpandey@gmail.com",testGithub);
  expect(employeeInstance.github).toBe(testGithub);
});

// Testing for return
test("Testing getGithub will return github.", () => {
  const testGithub = "Kamalpandey"; const employeeInstance = new Engineer("Kamal",2, "kamalpandey@gmail.com",testGithub);
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

// Testing for role
test("Testing role.", () => { const returnValue = "Engineer"; const employeeInstance = new Engineer("Kamal",2,"kamalpandey@gmail.com","Kamalpandey");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
