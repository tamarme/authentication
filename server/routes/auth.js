const express = require('express');
const router = express.Router();
const { home, login, register } = require('../controllers/auth');


router.get('/', home);
router.post('/login', login)
router.post('/register', register)

module.exports = router;