const { Pool } = require('pg');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';
console.log("isProduction: ", isProduction);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? { rejectUnauthorized: false }
    : false //Disable SSL for local dev
});

const createTaskTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS task (
      id SERIAL PRIMARY KEY,
      description VARCHAR(255),
      priority VARCHAR(10),
      status VARCHAR(10) NOT NULL DEFAULT 'pending',
      created_at DATE,
      updated_at DATE
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("task table created or already exists.");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await pool.end();
  }
};

module.exports = createTaskTable;
