var fs = require('fs');

var modulePath = __dirname + '/../node_modules';


// Problem ---------------------------------------------------------------------
var total = 0,
	current = 0;

fs.readdir(modulePath, function(err, files) {
	if (err) {
		console.error(err);
	}
	else {
		total = files.length;
		files.forEach(function(file) {
			fs.stat(modulePath + '/' + file, function(err, stats) {
				if (err) {
					console.error(err);
				}
				else {
					console.log('.');
					current++;
					if (current === total) {
						console.log('Done');
					}
				}
			});
		});
	}
});


// Solution --------------------------------------------------------------------
var async = require('async');

function getFiles(cb) {
	fs.readdir(modulePath, function(err, files) {
		cb(err, files);
	});
}

function statFiles(files, cb) {
	async.forEach(files, statFile, cb);
}

function statFile(file, cb) {
	fs.stat(modulePath + '/' + file, function(err, stats) {
		console.log('.');
		cb(err);
	});
}

async.waterfall([
	getFiles,
	statFiles
], function(err, result) {
	if (err) {
		return console.error(err);
	}
	console.log('Done');
});