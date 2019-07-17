/* eslint-disable consistent-return,object-shorthand */
const passport = require('passport');
const User = require('../api/models/user');
const { jwtSecret } = require('../config/vars');
const JwtBearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require('passport-local');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

// create local strategy
const localOptions = { usernameField: 'email' };
const Local = new LocalStrategy(localOptions, ((email, password, done) => {
  User.findOne({email}).then((user) => {
    if (!user) {
      return done(null, false);
    }
    // compare passwords
    return  bcrypt.compare(password, user.password)
      .then((result) => {
        if(result){
          return done(null, user);
        }
        return done(null, false);
      })
  }).catch((err) => {
    done(err);
  });
}));

const Bearer = new JwtBearerStrategy(((token, done) => {
  let decoded;
  let alowSearch = true;
  try {
    decoded = jwt.decode(token, jwtSecret);
  } catch (err) {
    alowSearch = false;
    done(null, false);
  }
  if (alowSearch) {
    User.findById(decoded.sub)
      .then((user) => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      }).catch((err) => {
        done(err, false);
      });
  }
}));

passport.use(Bearer);
passport.use(Local);
