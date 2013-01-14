var config = require('./lib/config'),
	connection = require('./lib/connection')(config),
	submodule = require('./lib/submodule')(config, connection);

connection.increment();
console.log('Main Module - Count: %d', connection.getCount());
submodule();