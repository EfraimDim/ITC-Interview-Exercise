const { Sequelize } = require("sequelize");
const { Employee, Salary } = require("../models/modelRelations");

module.exports.equalityGenderSalaryAllTime = async () => {
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
        [Sequelize.fn("COUNT", Sequelize.col("Employee.gender")), "noEmp"],
        [Sequelize.fn("AVG", Sequelize.col("Salaries.salary")), "avgSalary"],
        "gender",
      ],
      group: "gender",
      raw: true,
    });
    return equality;
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};
