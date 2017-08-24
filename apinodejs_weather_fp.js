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

var body = '';
var weather ='';
var fileContent = {};


var readData = function(chunk){

	body += chunk;
	console.log(chunk);
	console.log(body);
};

var iAmDone = function() {
	var detail = JSON.parse(body);
	console.log(detail.sys.country);
	// var country =  detail.sys;
	// console.log(country.sunrise);
	console.log(fileContent);
   	console.log(fileContent.main.temp_max);
}

var makeaCall = function(){
	

		var climate = JSON.parse();
		var  currenttemp=  weather.main.temp_max;
		console.log(currenttemp);

	//var currenttemp = Json.parse(weather.main.temp_max;
        //fs.writeFile('test.json',JSON.stringify(temp_max),'utf8');

        console.log(currenttemp);
        if(currenttemp < 10)

        {
          console.log("bloody cold day");
        }
        else
        {
          console.log("pleasant day");
        }
}

var makeSalesDecision = function(){

	fs.readData('./test.json',makeaCall());

}

var writeToFile = function(){

	var weather = JSON.parse(body);
   	fs.writeFile('test.json',weather,'utf8');
   	fileContent = weather;


    console.log('test.json');
}

var handleResponse = function(res) {

	res.on('data', readData);
	res.on('data', writeToFile);
	res.on('end', iAmDone);

};

http.request(options, handleResponse).end();
