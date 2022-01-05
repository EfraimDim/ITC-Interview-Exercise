const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    password: '1234',
    username: 'postgres',
    port: 5433,
    database: 'postgres'
});

module.exports = sequelize;