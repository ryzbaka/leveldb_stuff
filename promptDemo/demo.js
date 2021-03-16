const prompt = require('prompt');

prompt.start();
prompt.get(["username","email"],(err,result)=>{
	if(err){
	 	return console.error(err);
	}
	console.log('commandline input received');
	console.log(`Username : ${result.username}`);
	console.log(`Email: ${result.email}`);
})

