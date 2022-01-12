const { numberOfActiveEmployees } = require('../queries/totalActiveEmployees');
const { equalityGenderSalaryAllTime } = require('../queries/equalityGenderSalaryAllTime');
const { equalityGenderSalaryActiveEmployee } = require('../queries/equalityGenderSalaryActiveEmployees');
const { payrollExpectations } = require('../queries/payrollExpectations');
const { DeptManager }= require('../models/modelRelations');

exports.login = async(req, res) => {
    try {
        const check = await DeptManager.findAll({})
        console.log(check)
        const totalEmployees = await numberOfActiveEmployees();
        const equalityAllWorkers = await equalityGenderSalaryAllTime();
        const equalityActiveWorkers = await equalityGenderSalaryActiveEmployee();
        const payrollExpectation = await payrollExpectations();
        const user = req.user;
        res.send({ totalEmployees, equalityAllWorkers, equalityActiveWorkers, payrollExpectation, user });
    } catch(e) {
        console.log(e);
        res.status(500).send(e.message);
    }; 
};