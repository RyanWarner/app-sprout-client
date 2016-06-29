exports.config = {
	seleniumServerJar: '../node_modules/selenium-standalone-jar/bin/selenium-server-standalone-2.45.0.jar',
	capabilities: {
		browserName: 'chrome'
	},
	baseUrl: 'http://rywar.local:9000',
	onPrepare: function() {
		require('protractor-http-mock').config = {
			rootDirectory: __dirname,
			protractorConfig: 'protractor.config.js'
		};
	}
};
