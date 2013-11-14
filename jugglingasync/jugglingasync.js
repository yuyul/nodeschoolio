var http = require('http');
var bl = require('bl');
var contenidos = [];
var count = 0;

function printResults(){
	for (var i = 0; i<3;i++){
		console.log(contenidos[i]);
	}
};

function getUrl(index){
	http.get(process.argv[2 + index], function(response){
		response.pipe(bl(function(err, data){
			if (err)
				return console.error(err);
			contenidos[index] = data.toString();
			count++;

			if (count == 3)
				printResults();
		}));

	});
};

for (var i = 0; i < 3; i++)
	getUrl(i);