'use strict'

const express = require('express');
const Post = require('../model/post')
const router = express.Router();
const {postValidation} = require('../validation/validation')


router.get('/post', async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).send(posts);
        next();
    } catch (error) {

        return res.status(404).json({ error: error.message, message: 'Database error, try again later' });
    }

})

router.get('/post/:id', async (req, res, next) => {
    try {
        const posts = await Post.find({ title: req.params.id })
        return res.status(200).json({ posts });
        next();
    } catch (error) {

        return res.status(404).json({ error: error.message, message: 'Invalid parameter' });
    }

})


router.post('/post', async (req, res, next) => {
    // Validate user input
    const {error} = postValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

  

    // Save user into into our database
    try {
      let { title, body } = req.body;
        let postit = new Post({
            title: title,
            body: body
        });

        const posted = await postit.save();

        return res.status(201).json({ posted })

        next();

    }


    catch (error) {

        return res.status(404).json({ error: error.message, message: 'bad request' });
    }

})

router.put('/post/:id', async (req, res, next) => {
    try {
        const foundPost = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body,  {new: true} );

        return res.status(200).json({ foundPost });
        next();
    } catch (error) {
        return res.status(400).json({ error: error.message, message: 'Can not update post' });


    }
})

router.delete('/post/:id', async (req, res, next) => {
    try {

        await Post.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json({ message: 'Your post is successfully delected' });
        next()

    } catch (error) {
        return res.status(400).json({ error: error.message, message: 'Error delecting post' });

    }
});




module.exports = router


