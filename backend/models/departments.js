const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config')




   class Department extends Model {
    static associate(models) {
      this.hasMany(models.Dept_Manager, {
        foreignKey: 'dept_no'
      })
    }
  }
  Department.init(
    {
    dept_no: {
        type: DataTypes.STRING,
        primaryKey: true
          }, 
     dept_name: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Department',
      tableName: 'departments',
      underscore: true,
    },
  );

 

  module.exports= Department