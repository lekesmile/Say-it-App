const express = require('express');
const router = express.Router();
const config = require('../config');
const User = require('../model/user')
const bcrypt = require('bcrypt')
const { registrationValidation } = require('../validation/validation')
const jwt = require('jsonwebtoken')



router.post('/login', async (req, res, next) => {

    // Validate user input
    const { error } = registrationValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    let { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) return res.status(400).json({ user: `${username} is not found in the database` });


        if (user) {

            const comPassword = await bcrypt.compareSync(password, user.password);
            if (!comPassword) return res.status(400).json({ user: "Wrong Password" });

            const payload = {
                user: {
                    id: user._id,
                    user: user.username
                }
            };

            jwt.sign( payload , config.JWT_Secret, { expiresIn: 3600 }, (err, token) => {
                if (err) throw err;
                return res.status(200).json({ message: "login Successfull", 'authorization': token, "user": user }).headers(token);
            })


        }

    } catch (error) {
        return res.status(404).json({ error: error.message, message: 'Unable to sign in' });

    }



});


module.exports = router