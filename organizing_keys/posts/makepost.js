const level = require('level');
// const to = require('to2');
const db = level('posts.db',{valueEncoding:'json'});
const randomBytes = require('crypto').randomBytes

const name = process.argv[2];
const postData = (process.argv.slice(3).join(" ") || "");
const time = (new Date).toISOString();
const id = randomBytes(16).toString('hex');
//best date format for lexicographical sorting is YYYY-MM-DD HH:mm:SS if its zero padded.
batch = [
    {key:'post!'+id,value:{body:postData},type:'put'},
    {key:'post-name!'+name+'!'+time+'!'+id,value:0,type:'put'},
    {key:'post-time!'+time+'!'+name+'!'+id,value:0,type:'put'},
];

db.batch(batch,(err)=>{
    if(err){
        console.error(error);
    }
})
