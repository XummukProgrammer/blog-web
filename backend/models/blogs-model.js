const Sequelize = require("sequelize");
const DbModule = require("../modules/db-module.js");

const model = DbModule.sequelize.define("blogs", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

exports.add = (blogTitle, blogContent, callback) => {
    model.create({
        title: blogTitle,
        content: blogContent
    }).then(callback);
};

exports.getAll = (callback) => {
    model.findAll({ 
        raw: true 
    }).then(callback);
}
