const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const middle = require('../middlewares/auth.middleware')


router.post(
    '/register',
    [
        body('fullname.firstname')
          .isString().withMessage('First name must be a string')
          .isLength({ min: 3 }).withMessage('First name must be at least 3 characters'),
    
        body('fullname.lastname')
          .optional()
          .isString().withMessage('Last name must be a string')
          .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters'),
    
        body('email')
          .isEmail().withMessage('Invalid Email')
          .isLength({ min: 5 }).withMessage('Email must be at least 5 characters'),
    
        body('password')
          .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    
        body('vehicle.color')
          .isString().withMessage('Vehicle color must be a string')
          .isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters'),
    
        body('vehicle.plate')
          .isString().withMessage('Vehicle plate must be a string')
          .isLength({ min: 6 }).withMessage('Vehicle plate must be at least 6 characters'),
    
        body('vehicle.capacity')
          .isNumeric().withMessage('Vehicle capacity must be a number')
          .custom((value) => value >= 1).withMessage('Vehicle capacity must be at least 1'),
    
        body('vehicle.vehicleType')
          .isIn(['car', 'auto', 'motorcycle']).withMessage('Vehicle type must be car, auto, or motorcycle'),
    
        body('vehicle.location.lat')
          .optional()
          .isFloat({ min: -90, max: 90 }).withMessage('Latitude must be between -90 and 90'),
    
        body('vehicle.location.lng')
          .optional()
          .isFloat({ min: -180, max: 180 }).withMessage('Longitude must be between -180 and 180'),
      ],
    captainController.registerCaptain
    )
     

    router.post('/login', [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({min:6}).withMessage('password')
    ], captainController.loginCaptain)


    router.get('/profile',middle.authCaptain,captainController.getCaptain )

router.get('/logout',middle.authCaptain, captainController.logoutCaptain)

module.exports = router;