require("../../app");
const { equalityGenderSalaryAllTime } = require("../equalityGenderSalaryAllTime");

test("Test equalityGenderSalaryAllTimeEmployee query", async () => {
  const allTimeEmployees = await equalityGenderSalaryAllTime();
  expect(allTimeEmployees.length).toBe(2);
  expect(typeof allTimeEmployees).toBe("object");
  expect(allTimeEmployees[0]).toHaveProperty("noEmp", "avgSalary", "gender");
  expect(allTimeEmployees[0].gender).toBe("M");
  expect(allTimeEmployees[1].gender).toBe("F");
});
