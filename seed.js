const { Category, Article } = require('./models');

async function seed() {
  console.log('🌱 Заполнение базы тестовыми данными...');

  const categories = await Category.bulkCreate([
    { name: 'Спорт' },
    { name: 'Технологии' },
    { name: 'Культура' },
  ]);
  console.log('✅ Категории созданы.');

  await Article.bulkCreate([
    {
      title: 'Новый рекорд в марафоне',
      content: 'Спортсмен из Кении установил новый мировой рекорд...',
      categoryId: categories[0].id, 
    },
    {
      title: 'Сборная по футболу вышла в финал',
      content: 'В упорной борьбе наша сборная одержала победу...',
      categoryId: categories[0].id, 
    },
    {
      title: 'Вышла новая версия Next.js',
      content: 'Команда Vercel анонсировала релиз Next.js 16...',
      categoryId: categories[1].id,
    },
    {
      title: 'Самый быстрый процессор 2026 года',
      content: 'Обзор нового флагманского чипа от Apple...',
      categoryId: categories[1].id,
    },
    {
      title: 'Открытие выставки современного искусства',
      content: 'В галерее открылась экспозиция молодых художников...',
      categoryId: categories[2].id,
    },
  ]);
  console.log('✅ Статьи добавлены.');

  console.log('\n🎉 База данных заполнена!');
}

module.exports = seed;