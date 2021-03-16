const h = require('crypto').createHash('sha256',{encoding:'hex'});
const to = require('to2');
h.pipe(to((value,enc,next)=>{
	console.log(value.toString());
	next()
}));
h.end(process.argv.split(2).join(' '));
