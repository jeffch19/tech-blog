const { Comment} = require('../models');

const commentData = [
  
  {
    text: 'Shorts',    
    postId: 3
  },
  {
    text: 'Music',   
    postId: 2
  },
  {
    text: 'Hats',
    postId: 1,
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;