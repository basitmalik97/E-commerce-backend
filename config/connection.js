require('dotenv').config();

const Sequelize = require('sequelize');

// Replace 'your_database', 'your_username', and 'your_password' with your actual MySQL credentials.
const sequelize = new Sequelize('ecommerce_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

// Testing the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define your models and perform database operations using `sequelize`.

// Example model definition:
const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

// Synchronize the models with the database (create tables if they don't exist).
sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('An error occurred while synchronizing the models:', err);
  });

  module.exports = sequelize;
