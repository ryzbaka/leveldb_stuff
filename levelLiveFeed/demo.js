const level = require('level');
const db = level('./main.db',{valueEncoding:'json'});
const liveStream = require('level-livefeed');
const to = require('to2');



liveStream(db)
.pipe(
    to.obj((row,enc,next)=>{
        console.log(row);
        next();
    })
) //the function will run on the livestream every time leveldb data is updated.

setInterval(()=>{
    db.put('timestamp',Date.now(),(err)=>{
        if(err){
            console.error(err);
        }
    })
},500)