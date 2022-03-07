require("../../app");
const { numberOfActiveEmployees } = require("../totalActiveEmployees");

test("Test equalityGenderSalaryActiveEmployee query", async () => {
  const activeEmployees = await numberOfActiveEmployees();
  expect(activeEmployees).toBeDefined();
  console.log(activeEmployees)
  expect(typeof activeEmployees).toBe("number");
});
