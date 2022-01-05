const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config')

class Salary extends Model {
}
Salary.init(
  {
    emp_no: DataTypes.BIGINT, 
    salary: DataTypes.BIGINT,
    from_date: DataTypes.DATE,
    to_date: DataTypes.DATE
    },
  {
    sequelize,
    timestamps: false,
    modelName: 'Salary',
    tableName: 'salaries',
    underscore: true,
  },
);

Salary.removeAttribute('id');

module.exports= Salary
