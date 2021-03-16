const level = require('level');
const db = level('./randomdatabase.db',{valueEncoding:'json'});

batch = [
	{key:'user!hamza',value:{bio:"beep boop"},type:'put'},
	{key:'user!satoshi',value:{bio:"ka-ching"},type:'put'},
	{key:'post!hamza!2021-01-04 11:45',value:'',type:'put'},
	{key:'post!satoshi!2021-01-02 17:23',value:'',type:'put'},
]; //! is being used as a delimiter in the key.

db.batch(batch,err=>{
	if(err){
		console.error(error)
	}
});
