var fs = require("fs");

console.log("Contents of node_modules:");
fs.readdir(__dirname + '/../node_modules', function(err, files) {
    if (err) return console.error(err.message);
    console.log(files);
});