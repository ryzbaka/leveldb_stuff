const level = require('level');
const db = level('./batch.db',{valueEncoding:'json'});

const batch = [];

for(let i=0;i<10;i++){
	batch.push({key:'n'+i, value:i*100,type:'put'}); //type should either be 'put' or 'del'
}

db.batch(batch, (err)=>{
	if(err){
		console.error(err);
	}
});
