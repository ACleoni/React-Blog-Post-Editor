const Sequelize = require('sequelize');
const Post = require('./models/posts');
const connection = require('./database')

Post.sync({force:true})
    .then(() => Post.create({
        title: 'Title',
        content: 'Content'
    }))
    .then(firstPost => {
        console.log(firstPost.toJSON());
    });