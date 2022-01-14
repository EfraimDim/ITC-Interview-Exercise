const app = require("../../app");
const request = require("supertest");

beforeAll(() => {
  jest.setTimeout(30000);
});

describe("Testing users route", () => {
  test("Test login route with correct details", async () => {
    const login = await request(app)
      .post("/users/login")
      .send({ employeeID: "10100", password: "1953-04-21" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(typeof login.body).toBe("object");
    expect(login.body["totalEmployees"]).toBeDefined();
    expect(typeof login.body["totalEmployees"]).toBe("number");
    expect(typeof login.body["equalityAllWorkers"]).toBe("object");
    expect(login.body["equalityAllWorkers"].length).toBe(2);
    expect(login.body["equalityAllWorkers"][0]).toHaveProperty("noEmp", "avgSalary", "gender");
    expect(typeof login.body["equalityActiveWorkers"]).toBe("object");
    expect(login.body["equalityActiveWorkers"].length).toBe(2);
    expect(login.body["equalityActiveWorkers"][0]).toHaveProperty("noEmp", "avgSalary", "gender");
    expect(typeof login.body["payrollExpectation"]).toBe("object");
    expect(login.body["payrollExpectation"].length).toBe(9);
    expect(login.body["payrollExpectation"][0]).toHaveProperty("noEmp", "sumSalary", "'Departments.dept_no'", "'Departments.dept_name'");
    expect(login.body["user"]).toHaveProperty("emp_no", "birth_date", "first_name", "last_name", "gender", "hire_date");
  });
  test("Test login route with incorrect employeeID", async () => {
    await request(app)
      .post("/users/login")
      .send({ employeeID: "1111", password: "1953-04-21" })
      .set("Accept", "application/json")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(400)
      .expect("Incorrect EmployeeID");
  });
  test("Test login route with incorrect password", async () => {
    await request(app)
      .post("/users/login")
      .send({ employeeID: "10100", password: "1953-04-22" })
      .set("Accept", "application/json")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(400)
      .expect("Incorrect Password");
  });
  test("Test login route with incorrect schema constraints (password)", async () => {
    await request(app)
      .post("/users/login")
      .send({ employeeID: "10100", password: "1953-04-2244" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(
        '{"instancePath":"/password","schemaPath":"#/properties/password/maxLength","keyword":"maxLength","params":{"limit":10},"message":"must NOT have more than 10 characters"}'
      );
  });
});
