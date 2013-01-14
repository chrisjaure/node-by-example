module.exports = function(config, connection) {

	console.log('Submodule - Init');
	
	return function() {
		connection.increment();
		console.log('Submodule - Count: %d', connection.getCount());
	}

}