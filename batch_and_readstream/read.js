const level = require('level');
const db = level('./batch.db',{valueEncoding:'json'});
const to = require('to2');

//db.createReadStream() //read records in order
db.createReadStream({reverse:true, gt:'n5', limit:2}) //read records in reverse order and show keys that are greater then 'n5'(n6, n7, n8,etc)
	.pipe(
	to.obj( //.obj is used here because leveldb returns an object stream
		function(row,enc,next){
			console.log(row);
			next();
		}
	)
)
