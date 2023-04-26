const { Comment } = require('../models/Comment');

const userComment = {
  
};

const seedComments = Comment.bulkCreate(userComment);

module.exports = seedComments;