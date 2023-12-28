const pool = require('../db');

async function getAllSkillDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM environment';
  const data = (await client.query(sql)).rows;
  return data;
}

async function createNewSkillDB(label, category, priority) {
  const client = await pool.connect();
  const sql = 'INSERT INTO environment (label, category, priority) VALUES ($1, $2, $3) RETURNING *';
  const {rows} = await client.query(sql, [label, category, priority]);
  return rows
}
module.exports = { getAllSkillDB,createNewSkillDB };
