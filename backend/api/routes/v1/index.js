const express = require('express');
const passport = require('passport');

require('../../../config/passport');

const router = express.Router();
const userController = require('../../controllers').user;

const requireSignin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('bearer', { session: false });

router.post('/user/register', userController.register);
router.post('/user/login', requireSignin, userController.login);
router.get('/token/refresh', requireAuth, userController.refresh);

module.exports = router;
