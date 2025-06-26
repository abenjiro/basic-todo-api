const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const createTaskTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS task (
      id SERIAL PRIMARY KEY,
      description VARCHAR(255),
      priority VARCHAR(10),
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
