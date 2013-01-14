module.exports = function(config) {

	var database = config.database,
		count = 0;

	console.log('Connection - Init');
	// maybe start a database connection

	return {
		increment: function() {
			count++;
		},
		getCount: function() {
			return count;
		}
	};

}