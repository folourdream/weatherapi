var http = require('http');

var options = {
	//host: 'api-sandbox.oanda.com',
	
	host: 'api.openweathermap.org',
	post: 80,
	//path: '/v1/quote?instruments=USD_ZAR',

	path: '/data/2.5/weather?q=Melbourne,au&APPID=60b38b6410515ff66979435e91c674e9',
	method: 'GET'
}

var continent = {

	host: 'https://restcountries.eu',
	post: 80,
	//path: '/v1/quote?instruments=USD_ZAR',

	path: '/rest/v2/name/',
	method: 'GET'

}

http.request(options,function(res){
	var body = '';
	res.on('data',function(chunk){

		body += chunk;
	});

	res.on('end',function(){
		var detail = JSON.parse(body);
		console.log(detail.sys.country);
		var country =  detail.sys.country;
		return country;

	}
	

	)



	// http.request(continent,function(res)){

	// 	var cntryName = 
	// }

}).end();
