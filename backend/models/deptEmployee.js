const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelizeDatabaseConfig');

class DeptEmp extends Model {
};
DeptEmp.init(
  {
    emp_no: {
      type: DataTypes.BIGINT,
      primaryKey: true
    }, 
    dept_no: DataTypes.STRING,
    from_date: DataTypes.DATE,
    to_date: DataTypes.DATE
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'DeptEmp',
    tableName: 'dept_emp',
    underscore: true,
  },
);
DeptEmp.removeAttribute('id');

module.exports = DeptEmp;