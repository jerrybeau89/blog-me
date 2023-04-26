const { User } = require('../models/User');

const user = {
  
};

const seedUsers = User.bulkCreate(user);

module.exports = seedUsers;