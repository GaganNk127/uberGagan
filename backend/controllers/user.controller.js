const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blackListToken.model');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body;
        const { firstname, lastname } = fullname;

        const hashedPassword = await userModel.hashpassword(password);

        const isuser = await userModel.findOne({email});

        if(isuser){
            return res.status(400).json({ message: 'Email already exists' });
        }

        const user = await userService.createUser({
            firstname,
            lastname,
            email,
            password: password,
        });

        const token = user.generateAuthToken();

        return res.status(202).json({ token, user });
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        const token = user.generateAuthToken();
        res.cookie('token', token);

        return res.status(200).json({ token, user });
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
};

module.exports.getUserProfile = async (req, res, next) => {
    return res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];  // Safe optional chaining

        if (!token) {
            return res.status(400).json({ message: 'Token not provided' });
        }

        await blackListTokenModel.create({ token });

        return res.status(200).json({ message: 'Logged Out' });
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
};
