var util = require('util'),
	EventEmitter = require('events').EventEmitter;

var Emitter = function() {
	EventEmitter.call(this);
};
util.inherits(Emitter, EventEmitter);

Emitter.prototype.beep = function() {
	console.log('beep');
	this.emit('boop');
};

module.exports = function() {
	return new Emitter();
};