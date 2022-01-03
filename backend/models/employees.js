const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config')



   class Employee extends Model {
  
    static associate(models) {
      this.hasMany(models.Salary, {
        foreignKey: 'emp_no'
      })
      this.hasMany(models.Title, {
        foreignKey: 'emp_no'
      })
      this.hasMany(models.Dept_Manager, {
        foreignKey: 'emp_no'
      })
    }
  }
  Employee.init(
    {
      emp_no: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
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

  module.exports= Employee

