const level = require('level');
const to = require('to2');
const db = level('randomdatabase.db');

const readStreamSettings = {
    reverse:false,
    gt:'post!', //lower bound
    lt:'post!~', //upper bound, since ~ is high up on the ascii table.
} //we're asking for all posts.

db.createReadStream(readStreamSettings)
  .pipe(
      to.obj(
          (row,enc,next)=>{
              console.log(row);
              next();
          }
      )
  )