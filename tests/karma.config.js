// Karma configuration
// Generated on Sun Aug 10 2014 13:01:38 GMT-0700 (PDT)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'sinon-chai'],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'app/**/*.js': ['coverage']
		},


		// list of files / patterns to load in the browser
		files: [

					"../build-destination/bower/angular/angular.js",

					"../build-destination/bower/angular-animate/angular-animate.js",

					"../build-destination/bower/angular-mocks/angular-mocks.js",

					"../app/states/app-root/app-root_test-unit.js",

					"../build-destination/bower/velocity/velocity.js",

					"../app/states/homepage/homepage_test-unit.js",

					"../build-destination/bower/velocity/velocity.ui.js",

					"../app/states/login/login_test-unit.js",

					"../build-destination/bower/angular-ui-router/release/angular-ui-router.js",

					"../app/states/register/register_test-unit.js",

					"../build-destination/bower/jquery/dist/jquery.js",

					"../app/states/app-root/account/account_test-unit.js",

					"../app/states/app-root/list/list_test-unit.js",

					"../build-destination/states/app-root/list/list_module.js",

					"../build-destination/states/app-root/list/list_controller.js",

					"../build-destination/states/app-root/account/account_module.js",

					"../build-destination/states/app-root/account/account_controller.js",

					"../build-destination/common-components/directives/spinner/spinner_module.js",

					"../build-destination/common-components/directives/a-list/a-list_module.js",

					"../build-destination/common-components/directives/a-list/a-list_controller.js",

					"../build-destination/common-components/directives/example-directive/example-directive_module.js",

					"../build-destination/states/register/register_module.js",

					"../build-destination/states/register/register_controller.js",

					"../build-destination/states/login/login_module.js",

					"../build-destination/states/login/login_controller.js",

					"../build-destination/states/homepage/homepage_module.js",

					"../build-destination/states/homepage/homepage_controller.js",

					"../build-destination/states/app-root/app-root_module.js",

					"../build-destination/states/app-root/app-root_controller.js",

					"../build-destination/common-components/filters/reverse_module.js",

					"../build-destination/common-components/factories/user_factory.js",

					"../build-destination/common-components/factories/storage_factory.js",

					"../build-destination/common-components/factories/session_factory.js",

					"../build-destination/common-components/factories/list_factory.js",

					"../build-destination/app_module.js",

					"../build-destination/app_constants.js"

		],


		// list of files to exclude
		exclude: [],


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};
