const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

// const { jwtExpirationInterval, jwtSecret } = require('../../config/vars');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    name: user.fullName,
    iat: timestamp,
    exp: Math.round(Date.now() / 1000) + jwtExpirationInterval,
  }, jwtSecret);
}

function refreshTokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    name: user.fullName,
    iat: timestamp,
    exp: Math.round(Date.now() / 1000) + (jwtExpirationInterval * 2),
  }, jwtSecret);
}

module.exports = {
  /*register(req, res) {
    User.create({
      email: req.body.email,
      password: req.body.password,
      fullName: req.body.fullName,
    })
      .then((user) => {
        return res.status(201).send({
          token: {
            access_token: tokenForUser(user),
          },
        });
      })
      .catch(error => res.status(400).send(error));
  },
  login(req, res) {
    if (typeof req.body.email !== 'string' && typeof req.body.password !== 'string') {
      return res.status(400).send();
    }
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user || !bcrypt.compareSync(req.body.password, user.get('passwordHash'))) {
          return res.status(401).send();
        }
        res.status(201)
          .send({
            token: {
              access_token: tokenForUser(req.user),
              refresh_token: refreshTokenForUser(req.user),
            },
          });
      })
      .catch(error => res.status(500).send(error));
  },
  refresh(req, res) {
    if (req.user) {
      res.status(201).send({
        token: {
          access_token: tokenForUser(req.user),
          refresh_token: refreshTokenForUser(req.user),
        },
      });
    } else {
      res.status(400).send();
    }
  },*/
};
