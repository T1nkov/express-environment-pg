function isValidSkill(req, res, next) {
  // eslint-disable-next-line no-prototype-builtins
  if (!req.body.hasOwnProperty('title')) throw new Error('title is undefind');
  const { label, category, priority } = req.body;
  if (!isNaN(label)) throw new Error('title from number');
  next();
}

function isValidId(req, res, next) {
  const { id } = req.params;
  if (typeof id != 'number' && typeof id != 'string') throw new Error('error data type');
  if (isNaN(id)) throw new Error('letter in id');
  if (id < 0) throw new Error('Error in id');
  next();
}

module.exports = { isValidId, isValidSkill };
