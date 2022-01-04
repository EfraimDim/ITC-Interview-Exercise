const { Sequelize } = require('sequelize');
const Employee = require('../models/employees')
const Salary = require('../models/salaries')
const Department = require('../models/departments');
const Dept_Manager = require('../models/deptManager');
const Dept_Emp = require('../models/deptEmployee');

module.exports.numberOfEmployees = async() => {
    const numberOfActiveEmployees = await Salary.count({where: Sequelize.where(Sequelize.fn('date', Sequelize.col('to_date')), '=', '9999-01-01')})
    console.log(numberOfActiveEmployees)
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
            [Sequelize.fn('COUNT', Sequelize.col('Salaries.salary')), 'no_emp'],
            [Sequelize.fn('AVG', Sequelize.col('Salaries.salary')), 'avgSalary'],
            'gender'
        ],
        group: 'gender',
        raw: true,
        where: Sequelize.where(Sequelize.fn('date', Sequelize.col('Salaries.to_date')), '=', '9999-01-01')
    })
    return equality
}

module.exports.payrollExpectations = async() => {
    const payrollExpectation = await Employee.findAll({
        include: [
            {
                model: Department,
                attributes: ['dept_no', 'dept_name'],
                through: {
                    attributes: [],
                    where: Sequelize.where(Sequelize.fn('date', Sequelize.col('to_date')), '=', '9999-01-01')
                }
            },
            {
                model: Salary,
                attributes: []
            }
          ],
          attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('Employee.emp_no')), 'no_emp'],
                [Sequelize.fn('SUM', Sequelize.col('Salaries.salary')), 'sumSalary']
            ],
          raw: true,
          where: Sequelize.where(Sequelize.fn('date', Sequelize.col('Salaries.to_date')), '=', '9999-01-01'),
          group: ['Departments.dept_no']
    })
    return payrollExpectation
}
