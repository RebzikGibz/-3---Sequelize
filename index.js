const { sequelize } = require('./models');
const seed = require('./seed');
const runQueries = require('./queries');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('✅ Подключение к базе данных установлено.');

    await sequelize.sync({ force: true }); 
    console.log('✅ Таблицы синхронизированы.');

    await seed();

    await runQueries();

    await sequelize.close();
    console.log('\n🔒 Соединение закрыто. Работа завершена.');
  } catch (error) {
    console.error('❌ Ошибка:', error);
    await sequelize.close();
  }
}

main();