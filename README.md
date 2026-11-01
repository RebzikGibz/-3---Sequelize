# Контрольная точка №3 — Модели Sequelize (Вариант 1: Новости)

Консольное приложение на Node.js с Sequelize + SQLite, демонстрирующее модели, связь 1:N и базовые запросы.

## Модели
- **Category** (Категория): `name` (STRING, notNull, unique)
- **Article** (Статья): `title` (STRING, notNull), `content` (TEXT), `categoryId` (FK)

## Связь
- `Category.hasMany(Article)` — у категории много статей.
- `Article.belongsTo(Category)` — статья принадлежит категории.

## Запросы
1. `findAll()` — все статьи.
2. `findByPk()` — статья по id.
3. `findAll({ where: ... })` — фильтр по названию.
4. `findAll({ include: ... })` — статьи с категориями (жадная загрузка).
5. `create()` — создание новой статьи.

## Запуск
1. `npm install`
2. `node index.js`