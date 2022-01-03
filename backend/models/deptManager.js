const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config')



   class Dept_Manager extends Model {

    static associate(models) {
      this.hasOne(models.Employee, {
        foreignKey: 'emp_no'
      })
      this.hasOne(models.Departments, {
        foreignKey: 'dept_no'
      })
    }
  }
  Dept_Manager.init(
    {
    emp_no: DataTypes.BIGINT, 
    dept_no: DataTypes.STRING,
     from_date: DataTypes.DATE,
     to_date: DataTypes.DATE
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Dept_Manager',
      tableName: 'dept_manager',
      underscore: true,
    },
  );

  Dept_Manager.removeAttribute('id');

  module.exports= Dept_Manager