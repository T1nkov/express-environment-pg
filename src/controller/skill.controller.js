const express = require('express');

const { getAllSkill, createNewSkill, updateSkill, deleteSkill, updateSkillOnReq } = require('../service/skill.service');
const { isValidId } = require('../helper/validation');
const route = express.Router();

route.get('/', async (_req, res) => {
  try {
    const data = await getAllSkill();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createNewSkill(label, category, priority);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateSkill(id, label, category, priority);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteSkill(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await updateSkillOnReq(id, body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = { route };
