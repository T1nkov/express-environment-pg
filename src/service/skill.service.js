const { getAllSkillDB, createNewSkillDB, updateSkillDB, deleteSkillDB, updateSkillOnReqDB } = require('../repository/skill.repository');

async function getAllSkill() {
  const data = await getAllSkillDB();
  return data;
}

async function createNewSkill(label, category, priority) {
  const data = await createNewSkillDB(label, category, priority);
  return data;
}

async function updateSkill(id, label, category, priority) {
  const data = await updateSkillDB(id, label, category, priority);
  return data;
}

async function deleteSkill(id) {
  const data = await deleteSkillDB(id);
  return data;
}

async function updateSkillOnReq(id, body) {
  const data = await updateSkillOnReqDB(id, body);
  return data;
}
module.exports = { getAllSkill, createNewSkill, updateSkill, deleteSkill, updateSkillOnReq };
