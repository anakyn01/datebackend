// config/database.js 파일 내용
const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../dating_db.sqlite'), // 루트 경로의 sqlite 파일 지정
  logging: console.log,
});

module.exports = sequelize;