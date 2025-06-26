const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db_config = JSON.parse(process.env.CONFIG);

console.log("db config:", db_config);

// Determine if in production (Vercel/Neon) or local dev
const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
  db_config.database.database,
  db_config.database.username,
  db_config.database.password,
  {
    host: db_config.database.host,
    dialect: 'postgres',
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false, // allows self-signed SSL for Neon
          },
        }
      : {},
    logging: false, // optional: disable SQL logging
  }
);

sequelize
  .authenticate()
  .then(() => console.log('DB connection established.'))
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;