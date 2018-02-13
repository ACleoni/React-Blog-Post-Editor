const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  })


router.route('/')
    .post((req, res) => {
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(newPost => {
            res.json(newPost);
        })
    })
    .get((req, res) =>{
        Post.findAll()
        .then(posts =>{
            res.json(posts);
        })
    })

router.route('/:id')
    .delete((req, res)=>{
        // console.log("You are going to delete this post...")
        Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(result => {
            result.destroy()
                .then(() => {
                    console.log("post deleted")
                    res.send({message:`Deleted post ${req.params.id}`})
                })
        })
    })

module.exports = router;