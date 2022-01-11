const {numberOfEmployees, equalityGenderSalary, equalityGenderSalaryActiveEmployee, payrollExpectations} = require('../queries/queries')

exports.login = async(req, res) => {
    try {
    const totalEmployees = await numberOfEmployees()
    const equalityAllWorkers = await equalityGenderSalary()
    const equalityActiveWorkers = await equalityGenderSalaryActiveEmployee()
    const payrollExpectation = await payrollExpectations()
    const user = req.user
    res.send({totalEmployees, equalityAllWorkers, equalityActiveWorkers, payrollExpectation, user })
    } catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    } 
}
