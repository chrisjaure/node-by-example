var request = require('request');

request('http://cleverchris.com/humans.txt').pipe(process.stdout);