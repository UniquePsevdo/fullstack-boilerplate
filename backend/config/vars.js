module.exports = {
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpirationInterval: Number(process.env.JWT_EXPIRATION_SECONDS) || (65 * 60),
};
