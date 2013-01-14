setTimeout(function() {
	console.log('Child %d done', process.pid);
	process.exit();
}, Math.round(Math.random() * 1000));