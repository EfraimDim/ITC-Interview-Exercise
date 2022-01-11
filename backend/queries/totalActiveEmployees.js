const { Sequelize } = require('sequelize');
const { Salary } = require('../models/modelRelations');
const activeEmployeeSalaryToDate = require('./querieConstants')

module.exports.numberOfActiveEmployees = async() => {
    // currently employed employees have a default to_date of salary of 9999-01-01
    const numberOfActiveEmployees = await Salary.count({
        where: Sequelize.where(Sequelize.fn('date', Sequelize.col('to_date')), '=', activeEmployeeSalaryToDate)
    });
    return numberOfActiveEmployees;
}