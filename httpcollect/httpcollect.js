var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response){
	var datos = '';

	response.pipe(bl(function(err, data){
		console.log(data.length);
		console.log(data.toString());
	}));


});