var fs = require('fs');

fs.readdir(process.argv[2], function(err, files){

	var re = new RegExp('\\.' + process.argv[3] + '$');

	for(var i=0; i<files.length; i++){
		if (re.test(files[i])){
			console.log(files[i]);
		}
	}
});