// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize({
//     host: 'localhost',
//     dialect: 'postgres',
//     password: '1234',
//     username: 'postgres',
//     port: 5433,
//     database: 'postgres'
//   });

// async function test() {
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }}

// test()

// const { Pool } = require('pg')
// const pool = new Pool({
//   host: 'localhost',
//   port: 5433,
//   database: 'postgres',
//   user: 'postgres',
//   password: '1234',
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })



//     pool.query('SELECT * from employees', (err, result) => {
//         if (err) {
//           return console.error('Error executing query', err.stack)
//         }
//         console.log(result.rows[0]) 
//       })
