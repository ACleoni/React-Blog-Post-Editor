const Sequelize = require('sequelize');
const connection = require('../database');

const Post = connection.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
});

module.exports = Post