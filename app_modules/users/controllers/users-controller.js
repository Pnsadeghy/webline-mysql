const repo = require('../services/users-service');
exports.list = async function  (req, res) {
    const list = await repo.list();
    res.json(list)
};