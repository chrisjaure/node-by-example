NPM - Node Package Manager
==========================
https://npmjs.org/

Install and publish Node modules with NPM.


Consuming modules
-----------------

Install a local module for programmatic use:
	
	npm install <module>

After you install modules this way, any javascript in the current directory or any subdirectory can require the module.

	var myModule = require('<module>');

Install a global module cli use:

	npm install -g <module>

Some modules are designed to be command line tools. After installing them globally, they can be used in your terminal.


Developing packages
-------------------
https://npmjs.org/doc/json.html

NPM uses `package.json` to manage dependencies, among other things. In fact, this repo is a node package. In your terminal `cd` to the repo directory and run

	npm install

to install the dependencies, and you'll be able to run the examples in the following sections.

There is a lot to learn about npm's so follow the link above for documentation.

As you're developing your package, it's useful to provide the `--save` flag to `npm install`. When you do, it will automatically update your dependencies in your `package.json` file.

Publishing modules
------------------

NPM also allows you to publish your own modules to the registry.

	npm adduser
	npm plublish