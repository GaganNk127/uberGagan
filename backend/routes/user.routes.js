const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authUser = require('../middlewares/auth.middleware')
// Register route
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], userController.registerUser);

// Login route
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.loginUser);




router.get('/logout',authUser.authUser,userController.logoutUser)

router.get('/profile',authUser.authUser,userController.getUserProfile);

module.exports = router;
