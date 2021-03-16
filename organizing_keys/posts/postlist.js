const level = require('level');
const to = require('to2');
const db = level('posts.db',{valueEncoding:'json'});

const settings = {
	reverse:false,
	gt:'post-time!',
	lt:'post-time!~'
}

db.createReadStream(settings)
	.pipe(
		to.obj(
			(row, enc, next)=>{
				const [_,date,username,id] = row.key.split('!')
				db.get('post!'+id,(err,value)=>{
					if(err){
						console.error(err);
					}
					console.log(`${date} < ${username} > ${value.body}`)
					next();
				})
			}
		)
	)

