var http = require('http');
var fs = require('fs');

var options = {
	//host: 'api-sandbox.oanda.com',
	
	host: 'api.openweathermap.org',
	post: 80,
	//path: '/v1/quote?instruments=USD_ZAR',

	path: '/data/2.5/weather?q=Melbourne,au&APPID=60b38b6410515ff66979435e91c674e9&units=metric',
	method: 'GET'
}



http.request(options, function(res) {
	var content = '';
	res.on('data', function(chunk) {
		content += chunk;
	});
	res.on('end', function() {
		var obj = JSON.parse(content);
		console.log(obj.main.temp_max);
	});
}).end();





// http.request(options, function(res) 
// 				{
// 					var body = '';
// 					res.on('data', function(chunk)
// 					{
// 						//var body = '';
// 						body += chunk;
// 						//console.log(chunk);
// 						console.log(body);
// 					}
// 				)
			
// 			// 		res.on('end', function()
// 			// 	{

// 			// 		var weather = JSON.parse(body);
// 			// 	   	fs.writeFile('test.json',weather,'utf8');
// 			// 	   	fileContent = weather;


// 			// 	}
// 			// )
// 				res.on('end', function() 


// 					{
// 						var filecontent ={};
// 						fileContent = JSON.parse(body);
// 					console.log(fileContent.main.temp_max);
// 					// var country =  detail.sys;
// 					// console.log(country.sunrise);
// 					console.log(fileContent);
// 				   	console.log(fileContent.main.temp_max);
// 					}
// 				);
			

// 				}
// 			).end();

