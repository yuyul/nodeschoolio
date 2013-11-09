var fs = require('fs');

var ficheros = new Array();

module.exports = function(directorio, filtro, callback){

	var error = null;

	var re = new RegExp('\\.' + filtro + '$');



	fs.readdir(directorio, function(err, files){
		if (err) return callback(err);

		for(var i=0; i<files.length;i++){
			if (re.test(files[i])){
				ficheros.push(files[i]);
			}
		}
		
		callback(err, ficheros);
	});



}