module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://admin:password9@ds151817.mlab.com:51817/tasks',
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpirationInterval: Number(process.env.JWT_EXPIRATION_SECONDS) || (65 * 60),
};
