var fork = require('child_process').fork;

console.log('Spawning children...');

for (var i = 0; i < 5; i++) {
	fork(__dirname + '/lib/worker');
};

console.log('Continuing with other things.');