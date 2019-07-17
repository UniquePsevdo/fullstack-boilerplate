const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

const { jwtExpirationInterval, jwtSecret } = require('../../config/vars');

function generateTokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    name: user.name,
    iat: timestamp,
    exp: Math.round(Date.now() / 1000) + jwtExpirationInterval,
  }, jwtSecret);
}

function generateRefreshTokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    name: user.name,
    iat: timestamp,
    exp: Math.round(Date.now() / 1000) + (jwtExpirationInterval * 2),
  }, jwtSecret);
}

module.exports = {
  register(req, res) {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
        user.save().then((user)=>{
          res.status(201).send(user);
        })
        .catch((err) => {
          res.status(500).send(err);
        })
      })
  },
  login(req, res) {
    User.findOne({email: req.body.email})
      .then((user) => {
        if (!user) {
          return res.status(401).send();
        }
        return  bcrypt.compare(req.body.password, user.password)
          .then((result) => {
            if(result){
              res.status(200).send({
                  token: {
                    access_token: generateTokenForUser(user),
                    refresh_token: generateRefreshTokenForUser(user),
                  }
              });
            }
          })
      })
      .catch(error => res.status(500).send(error));
  },
  refresh(req, res) {
    if (req.user) {
      res.status(200).send({
        token: {
          access_token: generateTokenForUser(req.user),
          refresh_token: generateRefreshTokenForUser(req.user),
        },
      });
    } else {
      res.status(401).send();
    }
  },
};
