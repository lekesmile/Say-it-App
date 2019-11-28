const config = require('../config')
const jwt = require('jsonwebtoken');

async function verifytoken (req, res, next) {
    const token = req.header('Authorization');

    // Check for token
    if (!token)

        return res.status(401).json({ msg: 'authorizaton denied' });

    try {
        // Verify token
        const decoded = await jwt.verify(token, config.JWT_Secret);
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = verifytoken;