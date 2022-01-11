const Employee = require('../models/employees');
const Ajv = require('ajv');
const ajv = new Ajv();
const addFormats = require('ajv-formats');
addFormats(ajv);

exports.validateBody = (schema) => {
  return (req, res, next) => {
    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      res.status(400).send(ajv.errors[0]['message']);
      return;
    }
    next();
  };
};

exports.checkPassword = async(req, res, next) => {  
    try {
        const { employeeID, password } = req.body;
        const user = await Employee.findByPk(employeeID);
        if(user.dataValues.birth_date === password){
          req.user = user;
          next();
        }
        else{ 
          res.status(400).send('Incorrect Password');
        }
    } catch (e) {
      res.status(400).send('Incorrect EmployeeID');
      console.error(e);
    }
  };