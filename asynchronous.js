var http = require('http');

console.log('Make a request.');

http.get('http://cleverchris.com', function(res){
    console.log('Got the response!');
}).on('error', function(){
    console.log('Oops, there was an error.');
});

console.log('Continue with other things.');