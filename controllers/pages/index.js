const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const profile = require('./profile');
const home = require('./home');
const login = require('./login');

router.use('/profile', withAuth, profile);

router.use('/home', withAuth, home);

router.use('/login', login);

router.get('/', (req, res) => {
  return res.render('welcome', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;