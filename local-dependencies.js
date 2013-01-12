var fs = require("fs");

fs.readdir('./node_modules', function(err, files) {
    if (err) return console.log(err.message);
    console.log(files);
});