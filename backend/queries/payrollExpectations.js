const { Sequelize } = require('sequelize');
const { Employee, Salary, Department }= require('../models/modelRelations');
const activeEmployeeSalaryToDate = require('./querieConstants');

module.exports.payrollExpectations = async() => {
    try{
        const payrollExpectation = await Employee.findAll({
            include: [{  
                model: Department,
                attributes: ['dept_no', 'dept_name'],
                // through attributes aren't required from Dept_Emp table -> the where selects only currently employed
                through: {
                    attributes: [],
                    where: Sequelize.where(Sequelize.fn('date', Sequelize.col('to_date')), '=', activeEmployeeSalaryToDate)
                    }
                },
                {
                model: Salary,
                attributes: []
                }
            ],
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('Employee.emp_no')), 'noEmp'],
                [Sequelize.fn('SUM', Sequelize.col('Salaries.salary')), 'sumSalary']
            ],
            raw: true,
            // this where only includes the currently active salaries
            where: Sequelize.where(Sequelize.fn('date', Sequelize.col('Salaries.to_date')), '=', activeEmployeeSalaryToDate),
            group: 'Departments.dept_no'
        });
        return payrollExpectation;
    } catch(e) {
        console.log(e);
        res.status(500).send(e.message);
    };
};