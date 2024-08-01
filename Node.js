const crypto = require('crypto');

function generateRandomID() {
    return crypto.randomBytes(16).toString('hex');
}

module.exports = generateRandomID;

const generateRandomID = require('./generateRandomID');

const randomID = generateRandomID();
console.log(`Generated Random ID: ${randomID}`);
