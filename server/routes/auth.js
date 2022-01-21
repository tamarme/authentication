const express = require('express');
const passport = require('passport');
const router = express.Router();
const { home, login, register } = require('../controllers/auth');


router.get('/', passport.authenticate('jwt', { session: false }), home);
router.post('/login', login);
router.post('/register', register);

module.exports = router;