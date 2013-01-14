var emitter = require(__dirname + '/lib/emitter'),
	myEmitter = emitter();

myEmitter.on('boop', function() {
	console.log('boop');
});

myEmitter.beep();