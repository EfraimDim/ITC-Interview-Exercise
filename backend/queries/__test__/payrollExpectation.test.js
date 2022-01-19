require("../../app");
const { payrollExpectations } = require("../payrollExpectations");

test("Test payrollExpecation query", async () => {
  const payrollExpectation = await payrollExpectations();
  expect(payrollExpectation.length).toBe(9);
  expect(payrollExpectation[0]).toHaveProperty("noEmp", "sumSalary", "'Departments.dept_no'", "'Departments.dept_name'");
  expect(payrollExpectation[0]["Departments.dept_no"]).toBe("d001");
  expect(payrollExpectation[0]["Departments.dept_name"]).toBe("Marketing");
  expect(payrollExpectation[1]["Departments.dept_no"]).toBe("d002");
  expect(payrollExpectation[1]["Departments.dept_name"]).toBe("Finance");
  expect(payrollExpectation[2]["Departments.dept_no"]).toBe("d003");
  expect(payrollExpectation[2]["Departments.dept_name"]).toBe("Human Resources");
  expect(payrollExpectation[3]["Departments.dept_no"]).toBe("d004");
  expect(payrollExpectation[3]["Departments.dept_name"]).toBe("Production");
  expect(payrollExpectation[4]["Departments.dept_no"]).toBe("d005");
  expect(payrollExpectation[4]["Departments.dept_name"]).toBe("Development");
  expect(payrollExpectation[5]["Departments.dept_no"]).toBe("d006");
  expect(payrollExpectation[5]["Departments.dept_name"]).toBe("Quality Management");
  expect(payrollExpectation[6]["Departments.dept_no"]).toBe("d007");
  expect(payrollExpectation[6]["Departments.dept_name"]).toBe("Sales");
  expect(payrollExpectation[7]["Departments.dept_no"]).toBe("d008");
  expect(payrollExpectation[7]["Departments.dept_name"]).toBe("Research");
  expect(payrollExpectation[8]["Departments.dept_no"]).toBe("d009");
  expect(payrollExpectation[8]["Departments.dept_name"]).toBe("Customer Service");
});
