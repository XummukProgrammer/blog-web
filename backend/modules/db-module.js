const Sequelize = require("sequelize");

const dbName = "blogs";
const login = "root";
const password = "";
const dbDriver = "mysql"
const dbHost = "127.0.0.1";
const dbPort = 3306;

exports.sequelize = new Sequelize(dbName, login, password, {
    dialect: dbDriver,
    host: dbHost,
    port: dbPort
});
