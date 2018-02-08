const Sequelize = require('sequelize');
const connection = require('../database');

const Posts = connection.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
});