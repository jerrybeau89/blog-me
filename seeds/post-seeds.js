const { Post } = require('../models/Post');

const userPost = {
  
};

const seedPosts = Post.bulkCreate(userPost);

module.exports = seedPosts;