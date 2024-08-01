const crypto = require('crypto');

function generateRandomID() {
    return crypto.randomBytes(16).toString('hex');
}

module.exports = generateRandomID;
