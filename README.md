# Sequelize Database Queries with React/Node.js

- This Full-Stack App is a model that is being used to test new software for detecting errors in the development stage of applications using SQL databases.

## Setup

Download and run the database docker image using the following commands (make sure you have docker installed):

``` docker run --rm -p 5433:5432 -e POSTGRES_PASSWORD=1234 -d diegmonti/test_db ```
``` psql -U postgres -d postgres -h localhost -p 5433 (password is 1234) ```

Then in the terminal for the frontend file run:

``` yarn install ```
``` yarn start ```

and in the backend terminal:

``` npm install ```
``` nodemon server.js ```

## Functionality 

- Sign in with an employeeID and birth date as password (example to use: employeeID = 10100, bith date = 1953-04-21)
- Queries are then run through a pre-existing multi-table database to present information about the company employees