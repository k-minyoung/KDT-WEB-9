'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델
//db에 User생성
db.User = require('./user')(sequelize); //밑 세줄의 축약형
// const model = require('./user');
// const temp = model(sequelize)
// db.User = temp


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
