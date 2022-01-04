const {numberOfEmployees, equalityGenderSalary, equalityGenderSalaryActiveEmployee, payrollExpectations} = require('../queries/queries')

exports.login = async(req, res) => {
    try {
    // const totalEmployees = await numberOfEmployees()
    // const equalityAllWorkers = await equalityGenderSalary()
    // console.log(equalityAllWorkers)
    // const equalityActiveWorkers = await equalityGenderSalaryActiveEmployee()
    // console.log(equalityActiveWorkers)
    const payrollExpectation = await payrollExpectations()
    res.send(req.user)
    } catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    }
}