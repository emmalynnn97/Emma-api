const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
//Get back all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
})
//submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json(err);
    }
});
//Specific Post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    }
    catch (err) {
        res.json(err)
    }
})
//Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (err) {
        res.json(err);
    }
})
//Update a Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { title: req.body.title } });
            res.json(updatedPost);
            
    } catch (err) {
        res.json(err);
    }

})
module.exports = router;