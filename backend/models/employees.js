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
  Employee.hasMany(Dept_Emp, {
    foreignKey: 'emp_no'
  })
  Employee.hasMany(Dept_Manager, {
    foreignKey: 'emp_no'
  })
  Dept_Manager.belongsTo(Employee, {
    foreignKey: 'emp_no'
  })
  Dept_Emp.belongsTo(Employee, {
    foreignKey: 'emp_no'
  })
  Department.hasMany(Dept_Emp, {
    foreignKey: 'dept_no'
  })
  Department.hasMany(Dept_Manager, {
    foreignKey: 'dept_no'
  })
  Dept_Manager.belongsTo(Department, {
    foreignKey: 'dept_no'
  })
  Dept_Emp.belongsTo(Department, {
    foreignKey: 'dept_no'
  })
  Department.belongsToMany(Employee , { through: Dept_Emp,   foreignKey: 'dept_no' })
  Employee.belongsToMany(Department , { through: Dept_Emp,  foreignKey: 'emp_no' })

  

  module.exports= Employee

