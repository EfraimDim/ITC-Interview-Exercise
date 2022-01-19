require("../../app");
const { equalityGenderSalaryActiveEmployee } = require("../equalityGenderSalaryActiveEmployees");

test("Test equalityGenderSalaryActiveEmployee query", async () => {
  const activeEmployees = await equalityGenderSalaryActiveEmployee();
  expect(activeEmployees.length).toBe(2);
  expect(typeof activeEmployees).toBe("object");
  expect(activeEmployees[0]).toHaveProperty("noEmp", "avgSalary", "gender");
  expect(activeEmployees[0].gender).toBe("M");
  expect(activeEmployees[1].gender).toBe("F");
});
