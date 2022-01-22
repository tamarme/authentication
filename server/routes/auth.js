const express = require('express');
const passport = require('passport');
const router = express.Router();
const { home, login, register } = require('../controllers/auth');
const validateInput = require('../middlewares/validation');

router.get('/', passport.authenticate('jwt', { session: false }), home);
router.post('/login', validateInput('login'), login);
router.post('/register', validateInput('register'), register);

module.exports = router;