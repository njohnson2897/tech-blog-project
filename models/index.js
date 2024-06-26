const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment')

// establishes the one-to-many relationships found between the models

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blog_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blog_id'
});

module.exports = { User, BlogPost, Comment };