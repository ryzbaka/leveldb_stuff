const crypto = require('crypto-js');

const secret = (process.argv[2] || "secret");
const message = (process.argv.slice(3).join(" ") || "hello");

const encrypted = crypto.AES.encrypt(message,secret);
const decrypted = crypto.AES.decrypt(encrypted,secret);

console.log(decrypted.toString(crypto.enc.Utf8));
