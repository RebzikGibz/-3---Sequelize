const { Category, Article } = require('./models');

async function runQueries() {
  console.log('\n========== ВЫПОЛНЕНИЕ ЗАПРОСОВ ==========\n');

  const allArticles = await Article.findAll();
  console.log('--- 1. Все статьи ---');
  allArticles.forEach((a) => console.log(`  📝 ${a.title}`));

  const articleById = await Article.findByPk(1);
  console.log('\n--- 2. Статья по ID (id=1) ---');
  console.log(`  📝 ${articleById.title}: ${articleById.content}`);

  const filtered = await Article.findAll({
    where: { title: 'Вышла новая версия Next.js' },
  });
  console.log('\n--- 3. Статья с конкретным названием ---');
  filtered.forEach((a) => console.log(`  📝 ${a.title}`));

  const articlesWithCategories = await Article.findAll({
    include: { model: Category, as: 'category' },
  });
  console.log('\n--- 4. Все статьи с их категориями ---');
  articlesWithCategories.forEach((a) => {
    console.log(`  📝 ${a.title} [категория: ${a.category.name}]`);
  });

  const newArticle = await Article.create({
    title: 'Новая статья о киберспорте',
    content: 'Сегодня завершился турнир по CS2...',
    categoryId: 1,
  });
  console.log('\n--- 5. Создана новая статья ---');
  console.log(`  ✅ Статья "${newArticle.title}" успешно добавлена (id=${newArticle.id})`);

  const categories = await Category.findAll();
  console.log('\n--- Все категории в базе ---');
  categories.forEach((c) => console.log(`  📂 ${c.name}`));
}

module.exports = runQueries;