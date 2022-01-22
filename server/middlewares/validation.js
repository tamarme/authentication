const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const loginSchema = [
    body('email').exists().isEmail().withMessage('provide valid email address'),
    body('password').isLength({ min: 5 }).withMessage('min length is 5')
]

const registerSchema = [
    body('firstname').isLength({ min: 3 }).withMessage('min length is 3'),
    body('lastname').isLength({ min: 3 }).withMessage('min length is 3'),

    body('email')
        .exists()
        .isEmail()
        .withMessage('provide valid email address')
        .custom(async (value) => {
            const user = User.findOne({ email: value })
            if (user) {
                return Promise.reject('E-mail already in use');
            }
        }),

    body('password').isLength({ min: 5 }).withMessage('min length is 5')
]

const validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

function validateInput(param) {
    if (param === 'login') return [...loginSchema, validation];
    else if (param === 'register') return [...registerSchema, validation];
}

module.exports = validateInput