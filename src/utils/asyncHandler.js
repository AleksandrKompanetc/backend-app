module.exports = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
}

const asyncHandler = require('./utils/asyncHadler');
exports.getUsers = asyncHandler(async (req, res) => {
  res.json(users)
})