const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const Blog = require('./Blog');
const User = require('./User');

class Comment extends Model {};

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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

Comment.hasMany(Blog, User)

module.exports = Comment;
