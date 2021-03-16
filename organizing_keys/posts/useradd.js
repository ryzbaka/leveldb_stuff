const level = require('level');
const db = level('posts.db',{valueEncoding:'json'});

const name = process.argv[2];

db.put('user!'+name,{},err=>{
	if (err){
		console.error(err)
	}
});

