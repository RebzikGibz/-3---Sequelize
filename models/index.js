const sequelize = require('../db');
const Category = require('./Category');
const Article = require('./Article');

Category.hasMany(Article, { foreignKey: 'categoryId', as: 'articles' });
Article.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = {
  sequelize,
  Category,
  Article,
};