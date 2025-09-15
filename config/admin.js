// config/admin.js
module.exports = ({ env }) => ({
  auth: {
    // Use your 32-byte hex generated secret
    secret: 'ed97aa9a397a0b00871a90f8a03a23a06a5721a990781c9c403f68bab5cc62d4',
  },
  apiToken: {
    // Use your 16-byte base64 salt
    salt: '5CcFTAJjY2/T0048RUIQmA==',
  },
});
