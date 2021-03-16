const to = require('to2')
const level = require('level');
const sublevel = require('subleveldown');
const db = level('./main.db',{valueEncoding:'json'});

const cats = sublevel(db,'cats');
const robots = sublevel(db,'robots');

cats.put('msg','meow');
robots.put('msg2','beep beep boop boop');
robots.put('msg','beep boop boop');


cats.createReadStream()
    .pipe(
        to.obj(
            (row,enc,next)=>{
                console.log('Showing content from cats sublevel:');
                console.log(row);
                next();
            }
        )
    )

robots.createReadStream()
.pipe(
    to.obj(
        (row,enc,next)=>{
            console.log('Showing content from robots sublevel:');
            console.log(row);
            next();
        }
    )
)
