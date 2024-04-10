const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment')

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.hasMany(Comment)

// BlogPost.hasMany(Comment)

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blog_id'
});

module.exports = { User, BlogPost, Comment };