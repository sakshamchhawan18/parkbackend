
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db.sqlite3',
    logging: false
})

module.exports = sequelize
