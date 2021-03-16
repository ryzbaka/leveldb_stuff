const level = require('level');
const db = level('./basic.db',{valueEncoding:'json'});
//storing json values in the leveldb database.
