const User = require('@app/database').User;
exports.list = async function() {
    return await User.findAll()
};