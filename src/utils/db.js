
const Sequelize = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const db_config = JSON.parse(process.env.CONFIG);

console.log("db config:", db_config);

const sequelize = new Sequelize(db_config.database.database, db_config.database.username , db_config.database.password, {
    host: db_config.database.host,
    dialect: 'mysql'
  });

   sequelize.authenticate().then( ()=> console.log('Connection has been established successfully.'))
   .catch((error) => {
    console.error('Unable to connect to the database:', error);
  })

  module.exports = sequelize;