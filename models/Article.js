const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Article;