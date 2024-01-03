const cli = require('nodemon/lib/cli');
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
  const { rows } = await client.query(sql, [label, category, priority]);
  return rows;
}

async function updateSkillDB(id, label, category, priority) {
  const client = await pool.connect();
  const sql = 'UPDATE environment set label = $1, category = $2, priority = $3 where id = $4 returning  *';
  const { rows } = await client.query(sql, [label, category, priority, id]);
  return rows;
}

async function deleteSkillDB(id) {
  const client = await pool.connect();
  const sql = 'DELETE from environment where id = $1 returning *';
  const { rows } = await client.query(sql, [id]);
  return rows;
}

async function updateSkillOnReqDB(id, body) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM environment WHERE id = $1 ';

  const { rows } = await client.query(sql, [id]);
  const newSkill = { ...rows[0], ...body };
  const sql2 = 'UPDATE environment set label = $1, category = $2, priority = $3 where id = $4 returning *';
  const { rows: rows2 } = await client.query(sql2, [newSkill.label, newSkill.category, newSkill.priority, id]);
  return rows2;
}
module.exports = { getAllSkillDB, createNewSkillDB, updateSkillDB, deleteSkillDB, updateSkillOnReqDB };
