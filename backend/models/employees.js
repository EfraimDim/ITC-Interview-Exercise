const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config');
const Department = require('./departments');
const Dept_Emp = require('./deptEmployee')
const Dept_Manager = require('./deptManager')

const Salary = require('./salaries')



   class Employee extends Model {
  
  }
  Employee.init(
    {
      emp_no: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      birth_date: DataTypes.DATE,
     first_name: DataTypes.STRING,
     last_name: DataTypes.STRING,
     gender: DataTypes.STRING,
     hire_date: DataTypes.DATE
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Employee',
      tableName: 'employees',
      underscore: true,
    },
  );

  Employee.hasMany(Salary, {
    foreignKey: 'emp_no'
  })
  Salary.belongsTo(Employee, {
    foreignKey: 'emp_no'
  })
  Department.belongsToMany(Employee , { through: Dept_Emp, Dept_Manager })
  Employee.belongsToMany(Department , { through: Dept_Emp, Dept_Manager })

  module.exports= Employee

