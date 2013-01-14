var http = require('http');

console.log('Make a request.');

http.get('http://cleverchris.com', function(res){
	console.log('Got the response!');
}).on('error', function(){
	console.error('Oops, there was an error.');
});

console.log('Continue with other things.');
for (var i = 0; i < 5; i++) {
	console.log("other thing");
}