const { Sequelize } = require('sequelize');
const Employee = require('../models/employees')
const Salary = require('../models/salaries')
const Departments = require('../models/departments');
const Department = require('../models/departments');

module.exports.numberOfEmployees = async() => {
    const numberOfActiveEmployees = await Salary.count({where: Sequelize.where(Sequelize.fn('date', Sequelize.col('to_date')), '=', '9999-01-01')})
    return numberOfActiveEmployees
}

module.exports.equalityGenderSalary = async() => {
    const equality = await Employee.findAll({
        include: [{
            model: Salary,
            attributes: [],
            required: true
           }],
        attributes: [
            [Sequelize.fn('COUNT', Sequelize.col('Employee.gender')), 'no_emp'],
            [Sequelize.fn('AVG', Sequelize.col('Salaries.salary')), 'avgSalary'],
            'gender'
        ],
        group: 'gender',
        raw: true
    })
    return equality
}

module.exports.equalityGenderSalaryActiveEmployee = async() => {
    const equality = await Employee.findAll({
        include: [{
            model: Salary,
            attributes: [],
            required: true
           }],
        attributes: [
            [Sequelize.fn('COUNT', Sequelize.col('Employee.emp_no')), 'no_emp'],
            [Sequelize.fn('AVG', Sequelize.col('Salaries.salary')), 'avgSalary'],
            'gender'
        ],
        group: 'gender',
        raw: true,
        where: Sequelize.where(Sequelize.fn('date', Sequelize.col('to_date')), '=', '9999-01-01')
    })
    return equality
}

module.exports.payrollExpectations = async() => {
    const payrollExpectation = await Employee.findAll({
        include: [{
            model: Salary,
            attributes: [],
            required: true
           },
                {
            model: Department,
            attributes: [],
            required: true
                }],
        attributes: [
            [Sequelize.fn('COUNT', Sequelize.col('Employee.emp_no')), 'no_emp'],
            [Sequelize.fn('SUM', Sequelize.col('Salaries.salary')), 'avgSalary'],
            'gender'
        ],
        group: 'dept_no',
        raw: true,
        where: Sequelize.where(Sequelize.fn('date', Sequelize.col('to_date')), '=', '9999-01-01')
    })
    return payrollExpectation
}
