'use strict'

const express = require('express');
const User = require('../model/user')
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('../config')
const { registrationValidation } = require('../validation/validation')


router.get('/signup', async (req, res, next) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ users });
        next();

    } catch (error) {
        return res.status(404).json({ error: error.message, message: 'Invalid parameter' });
    }

})

router.get('/signup/:id', async (req, res, next) => {
    try {
        const user = await User.find({ _id: req.params.id })
        return res.status(200).json({ user });
        next();

    } catch (error) {
        return res.status(404).json({ error: error.message, message: 'Invalid parameter' });
    }

})

router.post('/signup', async (req, res, next) => {

    // Validate user input
    const { error } = registrationValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    // Check if already same username in the database
    const alreadyRegistered = await User.findOne({ username: req.body.username });
    if (alreadyRegistered) return res.status(400).json({ message: "Username already exits" });

    
    let { username, password, admin } = req.body;

    // Hash password
    let hash = bcrypt.hashSync(password, config.saltRounds);
    try {
        let regUser = new User({
            username: username,
            password: hash
        });

        const user = await regUser.save();

        console.log(user)
        return res.status(201).json({ user })

        next();

    }


    catch (error) {

        return res.status(404).json({ error: error.message, message: 'bad request' });

    }

})

module.exports = router


