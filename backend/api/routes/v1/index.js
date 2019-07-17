const express = require('express');
// const passport = require('passport');

// const passportConfig = require('../../../config/passport');

const router = express.Router();
const userController = require('../../controllers').user;

router.post('/user/register', userController.register);

module.exports = router;
