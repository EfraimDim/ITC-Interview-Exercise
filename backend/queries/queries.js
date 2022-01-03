const Employee = require('../models/employees')

module.exports.numberOfEmployees = async() => {
    const numberOfEmployees = await Employee.count()
    console.log(numberOfEmployees)
    return numberOfEmployees
}
