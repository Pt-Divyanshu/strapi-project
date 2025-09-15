// Load environment variables
require('dotenv').config();

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: (process.env.APP_KEYS || 'fallbackKey1,fallbackKey2').split(','),
  },
});
