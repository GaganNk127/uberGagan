const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
// const blacklistModel = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - No token' });
        }

        // Check if token is blacklisted
        // const isBlackListed = await blacklistModel.findOne({ token });
        // if (isBlackListed) {
        //     return res.status(401).json({ message: 'Unauthorized - Token is blacklisted' });
        // }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized - User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Auth error (User):', error.message);
        return res.status(401).json({ message: 'Unauthorized - Invalid token or error' });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - No token' });
        }

        // // Check if token is blacklisted
        // const isBlackListed = await blacklistModel.findOne({ token });
        // if (isBlackListed) {
        //     return res.status(401).json({ message: 'Unauthorized - Token is blacklisted' });
        // }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized - Captain not found' });
        }

        req.captain = captain;
        next();
    } catch (error) {
        console.error('Auth error (Captain):', error.message);
        return res.status(401).json({ message: 'Unauthorized - Invalid token or error' });
    }
};
