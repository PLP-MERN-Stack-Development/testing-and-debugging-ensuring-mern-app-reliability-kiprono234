// src/utils/auth.js

// Minimal stub for tests
function generateToken(user) {
    // Just return a string token for testing
    return `token-for-${user._id}`;
  }

module.exports = { generateToken };
  