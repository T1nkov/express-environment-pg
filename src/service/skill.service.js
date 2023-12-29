const { getAllSkillDB, createNewSkillDB } = require('../repository/skill.repository');

async function getAllSkill() {
  const data = await getAllSkillDB();
  return data;
}

async function createNewSkill(label, category, priority) {
  const data = await createNewSkillDB(label, category, priority);
  return data;
}

async function updateSkill(id, label, category, priority) {}

module.exports = { getAllSkill, createNewSkill };
