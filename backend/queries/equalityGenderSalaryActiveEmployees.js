const { Sequelize } = require("sequelize");
const { Employee, Salary } = require("../models/modelRelations");
const ACTIVE_EMPLOYEE_SALARY_TO_DATE = require("./querieConstants");

module.exports.equalityGenderSalaryActiveEmployee = async () => {
  try {
    const equality = await Employee.findAll({
      include: [
        {
          model: Salary,
          attributes: [],
          required: true,
        },
      ],
      attributes: [
        [Sequelize.fn("COUNT", Sequelize.col("Salaries.salary")), "noEmp"],
        [Sequelize.fn("AVG", Sequelize.col("Salaries.salary")), "avgSalary"],
        "gender",
      ],
      group: "gender",
      raw: true,
      where: Sequelize.where(Sequelize.fn("date", Sequelize.col("Salaries.to_date")), "=", ACTIVE_EMPLOYEE_SALARY_TO_DATE),
    });
    return equality;
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};
