
var express 	= require("express"); 
var app 	= express();
var bodyParser 	= require('body-parser');
var request 	= require("request");
 

var url = "http://www.raydelto.org/itla/agenda/"
 

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 
 

app.get('/', function(req, res) {

	 request({
	    url: url,
		json: true

	}, function (error, response, body) {
 
	    if (!error && response.statusCode === 200) {

	        res.send(body) 
	    }
	}) 


});
 
 app.post('/post', function(req, res) {
 
 
	request({
	    url: url,
	    json: true
	}, function (error, response, body) {
 
			console.log(body);
	        res.send(body);
	    
	})
}) 
 
var server = app.listen(8888, () => {
    console.log('El servisor esta corriendo en el puerto 8888'); 
});

