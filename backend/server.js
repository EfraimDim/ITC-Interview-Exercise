const app = require('./app')

const port = process.env.PORT || 5000;

const salary = require('./models/employees')


// async function test(){
//     try{
// const employees = await salary.findAll()
// console.log(employees)


// }catch(e){
//     console.log(e)
// }}
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



//     pool.query('SELECT * from salaries', (err, result) => {
//         if (err) {
//           return console.error('Error executing query', err.stack)
//         }
//         console.log(result.rows[0]) 
//       })





app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    })


