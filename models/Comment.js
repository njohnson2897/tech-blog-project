const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

// haven't gotten around to utilizing this model yet but it is the model for comments left under posts
// users will only populate the content of the comment, the rest will populate automatically through default settings
// ...or by the BlogPost or user that it is attached to
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BlogPost',
                key: 'id'
            }, 
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
    }
);

module.exports = Comment;