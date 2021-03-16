const level = require('level');
const to = require('to2')
const db = level('./posts.db', {valueEncoding:'json'});

const settings = {
	reverse:false,
	gt:'user!',
	lt:'user!~'
}

db.createReadStream(settings)
	.pipe(
		to.obj(
			(row, enc, next)=>{
				console.log(row.key.split('!')[1]);
				next();
			}
		)
	)
