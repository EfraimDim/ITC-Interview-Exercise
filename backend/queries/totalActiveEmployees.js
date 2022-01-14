const { Sequelize } = require("sequelize");
const { Salary } = require("../models/modelRelations");
const ACTIVE_EMPLOYEE_SALARY_TO_DATE = require("./querieConstants");

module.exports.numberOfActiveEmployees = async () => {
  try {
    // currently employed employees have a default to_date of salary of 9999-01-01
    const numberOfActiveEmployees = await Salary.count({
      where: Sequelize.where(Sequelize.fn("date", Sequelize.col("to_date")), "=", ACTIVE_EMPLOYEE_SALARY_TO_DATE),
    });
    return numberOfActiveEmployees;
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};
