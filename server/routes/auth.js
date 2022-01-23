const express = require('express');
const passport = require('passport');
const router = express.Router();
const { home, loggedInUser, login, register } = require('../controllers/auth');
const validateInput = require('../middlewares/validation');
const User = require('../models/User');

router.get('/', passport.authenticate('jwt', { session: false }), home);
router.get('/user', passport.authenticate('jwt', { session: false }), loggedInUser);
router.post('/login', validateInput('login'), login);
router.post('/register', validateInput('register'), register);

module.exports = router;