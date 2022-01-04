const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config')



   class Dept_Emp extends Model {

  }
  Dept_Emp.init(
    {
    emp_no: DataTypes.BIGINT, 
    dept_no: DataTypes.STRING,
     from_date: DataTypes.DATE,
     to_date: DataTypes.DATE
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Dept_Emp',
      tableName: 'dept_emp',
      underscore: true,
    },
  );

  Dept_Emp.removeAttribute('id');

  module.exports= Dept_Emp