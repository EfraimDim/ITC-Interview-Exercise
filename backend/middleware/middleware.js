const Employee = require('../models/employees')
exports.checkPassword = async(req, res, next) => {  
    try {
        const { employeeID, password } = req.body
        const user = await Employee.findByPk(employeeID);
        if(user.dataValues.hire_date === password){
        req.user = user
        next()
    }
        else res.status(400).send('Incorrect Password')
    } catch (e) {
      console.error(e);
    }
  };