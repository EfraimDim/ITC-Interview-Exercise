const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config')



   class Title extends Model {
  }
  Title.init(
    {
    emp_no: DataTypes.BIGINT, 
     title: DataTypes.STRING,
     from_date: DataTypes.DATE,
     to_date: DataTypes.DATE
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Title',
      tableName: 'titles',
      underscore: true,
    },
  );

  Title.removeAttribute('id');

  module.exports= Title